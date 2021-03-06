import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AboutCard from '../components/AboutCard.js';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ImageAvatars from '../components/Avatars';
import PageTitle from '../components/PageTitle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '1px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '5px',
  },
  title: {
    fontFamily: 'Reenie Beanie',
  },
  body: {
    fontSize: '16px',
    fontFamily: 'Ruluko',
    left: '5.81%',
    right: '22.63%',
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <Grid container style={container}>
      <Grid item xs={11} lg={10}>
        <PageTitle>About Us</PageTitle>
      </Grid>

      <Grid item xs={11} lg={10}>
        <AboutCard
          title='What is Chirrup?'
          description='Chirrup! is a mental health application in which users log their emotions or thoughts as personal records or anonymous, public posts to which other users can reply with words of encouragement. The app seeks to provide a space for people to share positive energy without worrying about shame, stigma, or judgments.'
        />
      </Grid>

      <Grid item xs={11} lg={10}>
        <AboutCard
          title='Our Inspiration'
          description="Chirrup! was inspired by current events, especially observations of friends and family expressing distress and need for emotional support during 2020's COVID-19 lockdowns. The app aspires to join the growing league of mental health technologies, which are becoming increasingly mainstream."
        />
      </Grid>

      <Grid item xs={11} lg={10}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography className={classes.title} variant='h5'>
              The Chirrup Team
            </Typography>
            <ImageAvatars />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={11} lg={10} style={{ paddingBottom: '60px' }}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography className={classes.title} variant='h5'>
              Who is Chirpy?
            </Typography>
            <Typography className={classes.body} variant='body2' component='p'>
              Our team became close while completing Columbia University's
              Coding Bootcamp. 'Chirpy' was the name of a Twitter-like app we
              coded during class exercises. As a nod to the many months we spent
              together in our class's Zoom link, and in keeping with the avian
              theme of our app, we adopted a cheerful yellow bird as our mascot
              and dubbed him Chirpy.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default About;

const container = {
  background: '#A1D1B6',
  height: '90vh',
  justifyContent: 'center',
};
