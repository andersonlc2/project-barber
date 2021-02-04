import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/image-login.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  avatar: {
    backgroundColor: theme.palette.text,
    marginBottom: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(1),
  },
  box: {
    width: '100%',
    marginTop: theme.spacing(8),
  },
  form: {
    margin: theme.spacing(2, 4)
  }

}))


function SignIn(props) {
  const classes = useStyles();

  async function handleSignIn() {
    
    const response = await axios.get('https://barbsc.herokuapp.com/api/barb/client/',
      { email: 'amin@admin.com' });
      console.log(response.data)
  }

  return (
    <Grid container className={ classes.root }>
      
      <Grid 
        item 
        container
        direction='column' // flexDirection
        justify='center' // justifyContent
        alignItems='center' // alignItems
        md={7}
        className={ classes.image }
      >
        <Typography style={{ color: '#fff', fontSize: 30, lineHeight: '45px'}}>
          
        </Typography>
        <Typography variant='body2' style={{ color: 'rgb(255, 250, 250, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
          
        </Typography>
      </Grid>

      <Grid 
        item 
        md={5} 
      >
        <Box 
          display='flex'
          flexDirection='column'
          alignItems='center'
          className={ classes.box }
        >
          <Avatar  className={ classes.avatar }>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h6'>Login</Typography>

          <form className={ classes.form }>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='E-mail'
              autoComplete='email'
              autoFocus
              // onChange={  }
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
              // onChange={  }
            />
            <Button 
              variant='contained' 
              color='primary'
              fullWidth
              className={ classes.btn }
              onClick={ handleSignIn }
            >
              ENTRAR
            </Button>

            <Grid container direction='row'>
              <Link>Esqueceu sua senha?</Link>
              <Link>Não tem uma conta? Registre-se</Link>
            </Grid>
          </form>

        </Box>
      </Grid>

    </Grid>

  )
};

export default SignIn;