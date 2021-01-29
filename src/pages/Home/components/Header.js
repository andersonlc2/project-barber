import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import barba from './barba.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: 'none',
    height: '110px',
  },
  rootActive: {
    background: 'black',
    boxShadow: 'none',
    height: '110px',
  },
  logoContainer:{
    position: 'absolute',
    backgroundColor: '#ffffff',
    paddingLeft: '20px',
    paddingRight: '40px',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    height: '180px',
    width: '120px',
  },
  logo: {
    width: '100%',
    height: '100%',
    paddingLeft: '20px',
    objectFit: 'contains',
    maxWidth: '72px',
    maxHeight: '65px',
  },
  txtLogo: {
    color: 'black',
  },
  toolbar: {
    paddingLeft: 0,
    height: '100%',
    textDecorationLine: 'none',
    borderBottom: '1px solid hsla(0,0%, 100%, 0.1)',
    marginLeft: '200px',
  },
  divList: {
    marginBottom: 0,
    paddingBottom: '10px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  grow: {
    flexGrow: 1,
  },
  menu: {
    marginTop: '20px',
    marginLeft: '10px',
  },

}));

function Header() {
  const classes = useStyles();
  const { y: pageYOffset } = useWindowScroll();
  const [ activeScroll, setActive ] = useState(false);

  // function getScroll() {
  //   const windowTop = window.pageYOffset;
  //   if (windowTop === 0) {
  //     setActive(false)
  //   } else {
  //     setActive(true)
  //   }
  // }
  
  // window.addEventListener('scroll', function() {
  //   getScroll()
  // })

  useEffect(() => {
    if (pageYOffset > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [pageYOffset]);

  return (
    <AppBar position="fixed" className={ activeScroll ? classes.rootActive : classes.root }>
        <div className={ classes.logoContainer }>
          <Link href="/" underline='none' >
            <div>
              <img src={barba} alt="logo" className={ classes.logo }/>
              <Typography variant="body1" component="h1" className={ classes.txtLogo }>
                BarberShop
              </Typography>
              <Box className={ classes.menu }>
                <div className={ classes.grow }></div>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </Box>
            </div>
          </Link>
        </div>
      <Toolbar className={ classes.toolbar }>
        <Hidden smDown>
          <div className={ classes.divList}>
            <List className={ classes.list }>
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Home</Link>
              </ListItem>  
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Barbers</Link>
              </ListItem>  
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Serviços</Link>
              </ListItem>  
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Blog</Link>
              </ListItem>  
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Cursos</Link>
              </ListItem>  
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Unidades</Link>
              </ListItem>  
              <ListItem>
                <Link component="button" variant="body2" color="inherit">Contato</Link>
              </ListItem>
            </List>
          </div>
        </Hidden>
        <div className={ classes.grow }></div>
        <div>
          <Button color="default">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default Header;