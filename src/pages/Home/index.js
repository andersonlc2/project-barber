import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
}));

function Home() {
  const classes = useStyles();
  
  return(
    <div className={ classes.container }>
      <video 
        style={{ width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover'}}
        src="/videos/video.mp4" 
        autoPlay loop playsInline muted 
        className={ classes.container }>
      </video>
      <Header />
    </div>
  );
}

export default Home;