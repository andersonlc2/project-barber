import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  blog: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  txt: {
    color: 'black',
  },
  txtBlog: {
    color: '#fff',
    maxWidth: 400,
    marginRight: 80,
    marginLeft: 80,
    marginTop: 40,
  },
  media: {
    height: 140,
  },
  card: {
    maxWidth: 350,
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 30,
  },
}));

function BodyTree() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={ classes.root }>
        <div style={{ color: 'black', width: 160, margin: '40px 0' }}><hr /></div>
        <Typography component="h5" variant="h5" align='center' className={ classes.txt }>
          CADASTRE E AGENDE SEU HORÁRIO
        </Typography>
        <Button style={{ margin: '40px' }} variant='contained' color="default" >CADASTRE-SE</Button>
      </Box>
      <Box className={ classes.blog }>
        <Box className={ classes.txtBlog }>
          <Typography variant='h2' component='h3' display='inline'>
            B
          </Typography>        
          <Typography variant='h4' component='h3' display='inline'>
            log
          </Typography>
          <br />
          <Typography variant='h2' component='h3' display='inline' >
            C
          </Typography>        
          <Typography variant='h4' component='h3' display='inline'>
            iriacoBarber
          </Typography>
        </Box>
        <Box className={ classes.cards }>
          <Card className={ classes.card }>
            <CardActionArea>
              <CardMedia className={ classes.media } image="/images/image2.jpg" title="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of reptiles, with over 6,000 species, raging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">Lear More</Button>
            </CardActions>
          </Card>
          <Card className={ classes.card }>
            <CardActionArea>
              <CardMedia className={ classes.media } image="/images/image3.jpg" title="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of reptiles, with over 6,000 species, raging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">Lear More</Button>
            </CardActions>
          </Card>
          <Card className={ classes.card }>
            <CardActionArea>
              <CardMedia className={ classes.media } image="/images/image5.jpg" title="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of reptiles, with over 6,000 species, raging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">Lear More</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default BodyTree;