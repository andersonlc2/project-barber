import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    background: 'black',
    width: '100%',
    height: '300px',
    paddingTop: '60px',
  },
  img: {
    marginTop: 40,
    maxWidth: 440,
    maxHeight: 575,
    border: '6px solid #fff'
  },
  history: {
    width: 550,
    height: 600,
  },
  text: {
  }
}));

function BodyOne() {
  const classes = useStyles();

  return (
    <>
      <Box className={ classes.root }>
        <Hidden smDown>
          <Typography variant='h2' component='h2' color="textPrimary"  >
            <Fade left cascade>Master the art of barbering</Fade>
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant='h4' component='h2' color="textPrimary" >
            <Fade left cascade ssrFadeout>Master the art of</Fade>
            <Fade left cascade ssrFadeout>barbering</Fade>
          </Typography>
        </Hidden>
        <Pulse>
          <img className={ classes.img } src="/images/image1.jpg" alt='barber_show'/>
        </Pulse>
      </Box>
    </>
  );
}

export default BodyOne;