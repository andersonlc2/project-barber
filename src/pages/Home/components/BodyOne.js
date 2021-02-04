import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    background: 'black',
    width: '100%',
    height: '300px',
    // paddingTop: '60px', 
  },
  img: {
    marginTop: 40,
    maxWidth: 370,
    maxHeight: 495,
    border: '4px solid #fff'
  },
  history: {
    width: 550,
    height: 600,
  },
  text: {
    paddingBottom: 50,
  }
}));

function BodyOne() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Hidden smDown>
        <Typography variant='h2' component='h2' color="textPrimary" align='center' className={ classes.text} >
          Master the art of barbering
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant='h4' component='h2' color="textPrimary" align='center' >
          Master the art of
          barbering
        </Typography>
      </Hidden>
      <Hidden mdDown>
        <img className={ classes.img } src="/images/image1.jpg" alt='barber_show'/>
      </Hidden>
    </Box>

  );
}

export default BodyOne;