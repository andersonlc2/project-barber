import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 400,

  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Box className={ classes.icons }>
        <IconButton> <FacebookIcon /> </IconButton>
        <IconButton> <PinterestIcon /> </IconButton>
        <IconButton> <InstagramIcon /> </IconButton>
      </Box>
      <Typography>
        Aqui é o footer!
      </Typography>
    </Box>
  )
}

export default Footer;