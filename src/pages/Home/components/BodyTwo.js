import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  square: {
    width: 550,
    height: 550,
    display: 'flex',
    flexWrap: 'wrap',
    background: 'red',
  },
  squares: {
    width: '50%',
    height: '50%',
    border: '2px solid #000',
  },
  txt: {

  },


}));

export default function BodyTow() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Box className={ classes.txt }>
        <Typography>
          OUR HISTORY
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
        <Typography>
          The new vaccine candidate is expected to be reviewed for emergency use 
          authorization by U.S. Food and Drug Administration as soon as next week. 
          If approved, experts say the Johnson & Johnson single-dose vaccine could 
          streamline a national COVID-19 vaccination administration campaign 
          that has to date been criticized as scattered and lethargic. Currently, 
          the Pfizer-BioNTech and Moderna versions must be given in two doses 
          several weeks apart.
        </Typography>
      </Box>
      <Box className={ classes.square }>
        <Box className={ classes.squares }></Box>
        <Box className={ classes.squares }></Box>
        <Box className={ classes.squares }></Box>
        <Box className={ classes.squares }></Box>
    
      </Box>
    </Box>
  );
}