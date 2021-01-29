import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'black',
    width: '100%',
    height: '400px',
    justifyContent: 'center',
    paddingTop: '60px',
  },
  text: {

  },
}));

function BodyOne() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Hidden smDown>
        <Typography variant='h2' component='h2' color="textPrimary" className={ classes.text }>
          Master the art of barbering
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant='h4' component='h2' color="textPrimary" className={ classes.text }>
          Master the art of barbering
        </Typography>
      </Hidden>
    </Box>
  );
}

export default BodyOne;