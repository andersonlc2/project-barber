import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import AreaVideo from './components/AreaVideo';
import BodyOne from './components/BodyOne';
import BodyTow from './components/BodyTwo';
import BodyTree from './components/BodyTree';
import Footer from './components/Footer';


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  box: {
    height: '100vh', // *
    display: 'flex',
    flexDirection: 'column',
  },
  deg: {
    position: 'absolute',
    width: '100%', 
    height: '100%',
    background: 'linear-gradient(360deg, rgba(0, 0, 0, 1) 2%, rgba(255, 255, 255, 0) 90%)',
    zIndex: theme.zIndex.appBar -1,
  },
}));

function Home() {
  const classes = useStyles();
  
  return(
    <div>
      <div className={ classes.box }>
        <div className={ classes.container }>
          <div className={ classes.deg }></div>
          <video 
            style={{ width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover'}}
            src="/videos/video.mp4" 
            autoPlay loop muted 
            >
          </video>
        </div>
        <Header />
        <AreaVideo />
      </div>
      <BodyOne />
      <BodyTow />
      <BodyTree />
      <Footer />
    </div>
  );
}

export default Home;