import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Grid, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Buttons from '../components/Button.js';
import AlertBar from '../components/AlertBar';
import chirpy from '../assets/chirpy.svg';
import userAPI from '../utils/userAPI';
import { useAuth } from '../utils/authContext';

export default function Signin() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  // auth state
  const { setAuthTokens, setCurrentUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/moodboard' } };
  // error alert state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: '', type: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleErrorAlert = (message) => {
    setAlertMessage({ message, type: 'error' });
    setAlertOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // close alert
    setAlertOpen(false);
  };

  const handleSignin = async () => {
    try {
      const signin = await userAPI.signinUser({
        username: user.username,
        password: user.password,
      });
      console.log(signin);
      if (signin.status === 200) {
        console.log(signin.data);
        setCurrentUser(signin.data.body);
        setAuthTokens(signin.data.token);
        history.replace(from);
      }
    } catch {
      handleErrorAlert('Username or password did not match');
    }
  };

  return (
    <Grid
      container
      style={container}
      justify='space-evenly'
      alignItems='center'
      direction='column'
    >
      <Grid item />
      <Grid item>
        <img src={chirpy} alt='chirpy the bird' />
      </Grid>

      <Grid item style={{ width: '180px' }}>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Username'
          name='username'
          id='outlined-size-normal'
          placeholder='Username'
          variant='outlined'
          onChange={(e) => handleInputChange(e)}
        ></TextField>
        <TextField
          style={{ marginBottom: '10px' }}
          label='Password'
          name='password'
          type={show ? 'text' : 'password'}
          id='filled-adornment-password'
          placeholder='Password'
          variant='outlined'
          onChange={(e) => handleInputChange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>

      <Grid item>
        <Buttons onClick={handleSignin}>Sign In</Buttons>
      </Grid>
      <AlertBar
        message={alertMessage.message}
        type={alertMessage.type}
        openState={alertOpen}
        onClose={handleCloseAlert}
      />
      <Grid item>
        No account? <Link to='/signup'>Sign Up</Link>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

const container = {
  backgroundColor: '#A1D1B6',
  fontFamily: 'Reenie Beanie',
  width: '100vw',
  height: '94vh',
  flexGrow: '1',
};
