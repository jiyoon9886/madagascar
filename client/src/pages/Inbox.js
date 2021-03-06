/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import userAPI from '../utils/userAPI';
import PageTitle from '../components/PageTitle';
import InboxCard from '../components/InboxCard.js';

const Inbox = () => {
  const [sentPosts, setSentPosts] = useState([]);
  const [isMounted, setIsMounted] = useState(true); // note this flag denote mount status

  const getUserID = () => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    return _id;
  };

  const getSentPosts = async () => {
    try {
      const { data } = await userAPI.getUserData(getUserID());
      const allUserPosts = data.posts;
      const sentUserPosts = allUserPosts.filter(
        (p) => p.sent === true && p.reply
      );
      if (isMounted) {
        setSentPosts(sentUserPosts);
      }
      return setIsMounted(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isMounted) {
      getSentPosts();
    }
    return setIsMounted(false);
  }, []);

  return (
    <Grid container style={styles.container}>
      <Grid item xs={11} lg={10}>
        <PageTitle>Inbox</PageTitle>
      </Grid>
      {sentPosts.length ? (
        sentPosts.map((sentPost, index) => (
          <Grid item xs={11} sm={8} key={sentPost._id}>
            <InboxCard
              post={sentPost.post}
              response={sentPost.reply.response}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={11}>
          <Typography style={styles.nothing}>Nothing to show</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Inbox;

const styles = {
  container: {
    background: '#A1D1B6',
    paddingBottom: '60px',
    height: '100%',
    justifyContent: 'center',
  },
  nothing: {
    fontFamily: 'Ruluko',
    marginBottom: '150px',
    padding: '40px',
    fontSize: '24px',
    textAlign: 'center',
  },
};
