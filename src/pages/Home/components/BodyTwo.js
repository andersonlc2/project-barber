import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  square: {
    maxWidth: 390,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },
  squares: {
    width: '120px',
    height: '120px',
    margin: 30,
    border: '2px solid #ddd',
    borderRadius: '10px',
  },
  img: {
    maxWidth: 390,
    maxHeight: 495,
    border: '6px solid #fff',
    marginTop: 20,
  },
  txt: {
    maxWidth: 390,
    padding: 30,

  }


}));

export default function BodyTow() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Box className={ classes.txt }>
        <Typography variant='h2' component='h3' display='inline' align='center'>
          O
        </Typography>        
        <Typography variant='h4' component='h3' display='inline' align='center'>
          ur History
        </Typography>
        <Typography>
          The Johnson & Johnson vaccine also provided less immunity among trial 
          participants in South Africa, where a set of mutations threatens to 
          accelerate the deadliness of the global pandemic. In that study, the 
          efficacy rate was just 57 percent. The manufacturers of Pfizer-BioNTech 
          and Moderna have reported similar concerns with their vaccines, and 
          are studying different dosing and formulation strategies in the event 
          new variants of the coronavirus outwit their vaccines.
        </Typography>
      </Box>
      <Box className={ classes.square }>
        <Box className={ classes.squares }></Box>
        <Box className={ classes.squares }></Box>
        <Box className={ classes.squares }></Box>
        <Box className={ classes.squares }></Box>
      </Box>
      <Hidden mdDown>
        <div style={{ width: 300 }}></div>
      </Hidden>
      <Hidden lgUp>
        <img className={ classes.img } src="/images/image1.jpg" alt='barber_show'/>
      </Hidden>
      



    </Box>
  );
}