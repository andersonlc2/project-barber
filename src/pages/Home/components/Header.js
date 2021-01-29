import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import barba from './barba.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: 'none',
    position: 'fixed',

  },
  logoContainer:{
    backgroundColor: '#ffffff',
    paddingLeft: '20px',
    paddingRight: '40px',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '120px',
  },
  logo: {
    width: '100%',
    height: '100%',
    paddingLeft: '30px',
    objectFit: 'contains',
    maxWidth: '72px',
    maxHeight: '65px',
  },
  txtLogo: {
    color: 'black',
  },
  toolbar: {
    paddingLeft: 0,
    textDecorationLine: 'none',
  },
  divList: {
    marginBottom: 0,
    paddingBottom: '10px',
    borderBottom: '1px solid hsla(0,0%, 100%, 0.1)',
    marginLeft: '100px',

  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  grow: {
    flexGrow: 1,
  }

}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={ classes.root }>
      <Toolbar className={ classes.toolbar }>
        <div className={ classes.logoContainer }>
          <Link href="/" component="button" underline='none' >
            <div>
              <img src={barba} alt="logo" className={ classes.logo }/>
              <Typography variant="body1" component="h1" className={ classes.txtLogo }>
                BarberShop
              </Typography>
            </div>
          </Link>
        </div>
        <div className={ classes.divList}>
          <List className={ classes.list }>
            <ListItem>
              <Typography variant="body2" component="h2">Home</Typography>
            </ListItem>            
            <ListItem>
              <Typography variant="body2" component="h2">Barbers</Typography>
            </ListItem>            
            <ListItem>
              <Typography variant="body2" component="h2">Serviços</Typography>
            </ListItem>            
            <ListItem>
              <Typography variant="body2" component="h2">Blog</Typography>
            </ListItem>            
            <ListItem>
              <Typography variant="body2" component="h2">Cursos</Typography>
            </ListItem>            
            <ListItem>
              <Typography variant="body2" component="h2">Unidades</Typography>
            </ListItem>            
            <ListItem>
              <Typography variant="body2" component="h2">Contato</Typography>
            </ListItem>
          </List>
        </div>
        <div className={ classes.grow }></div>
        <div>
          <Button color="default">Login</Button>
        </div>

      </Toolbar>
    </AppBar>
  )
};

export default Header;