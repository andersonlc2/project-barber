import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    zIndex: theme.zIndex.appBar -1,
  },
  txt: {
    marginTop: '165px',
    marginLeft: '180px',
  },
  txtHidden: {
    marginTop: '255px',
    marginLeft: '40px',
  },
  icons: {
    color: '#fff'
  },
  boxIcons: {
    marginTop: '100px',
  },

}));

function AreaVideo() {
  const classes = useStyles();

  return (
    <Box className={ classes.root }>
      <Box>
        <Hidden smDown>
          <Box className={ classes.txt }>
            <Typography component="h2" variant="h6" style={{ marginBottom: '50px'}}>EXPERIENCE THE MASTER BARBER</Typography>
            <Typography component="h2" variant="h1">Ciriaco</Typography>
            <Typography component="h2" variant="h1">BarberShop</Typography>
          </Box>
        </Hidden>
      </Box>
      <Hidden mdUp>
          <Box className={ classes.txtHidden }>
            <Typography component="h2" variant="body2" style={{ marginBottom: '20px'}}>EXPERIENCE THE MASTER BARBER</Typography>
            <Typography component="h2" variant="h3">Ciriaco</Typography>
            <Typography component="h2" variant="h3">BarberShop</Typography>
          </Box>
      </Hidden>
      <div style={{ flexGrow: 1 }}></div>
      <Hidden smDown>
        <Box d-flex className={ classes.boxIcons }>
          <List>
            <ListItem>
              <IconButton><FacebookIcon className={ classes.icons} /></IconButton>
            </ListItem>
            <ListItem>
              <IconButton><PinterestIcon className={ classes.icons}/></IconButton>
            </ListItem>
            <ListItem>
              <IconButton><InstagramIcon className={ classes.icons}/></IconButton>
            </ListItem>
          </List>
        </Box>
      </Hidden>
    </Box>
  );
}

export default AreaVideo;