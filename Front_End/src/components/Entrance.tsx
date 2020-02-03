import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WineInfo from "./Wine";
import Section from "./Section";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import purple from '@material-ui/core/colors/deepPurple';
import brown from '@material-ui/core/colors/brown';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    content: {
      position : 'fixed',
      // display : 'flex',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundImage: 'url(https://learn.winecoolerdirect.com/wp-content/uploads/2017/09/tuscany-wine.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },

    cardGrid: {
      position : 'absolute',
      // marginTop : 240,
      width : '600px',
      height : '400px',
      top : '30%',
      left : '20%',
      backgroundColor: brown[700],
  

    },
    card: {
      backgroundColor: 'transparent',
      boxShadow: 'none',

      width: 230,
      height: 100,
      display: 'text-align: center;flex',
      
      marginRight : theme.spacing(2),
      padding: theme.spacing(1),
    },

    cardContent: {
      
      flexGrow: 1,
    },

    media: {
      height: 140,
    },

    first : {
      marginLeft: theme.spacing(9),
    }


  }),
);

//const wines = [1, 2, 3]; // 표시할 카드 개수



export default function Entrance() {

  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.content} style={{ width: "100%", height: "100vh" }}>
        
          {/* End hero unit */}
          <Grid container className={classes.cardGrid}>
         
 
          <Typography variant="h3" component="h2" align="center" style={{color : "#fce4ec" , marginLeft : 230, marginTop : 50 , fontWeight:"bold"}} >
              Dionysos
          </Typography>
    
<Typography variant="h5" component="h2" align="center" style={{color : "#fce4ec" , marginLeft : 180, marginTop : 20, fontWeight:"bold"}} >
마음을 움직이는 한잔의 감동,<br/>
당신을 위한 와인의 모든 것!
          </Typography>
          <Typography variant="h6" component="h2" align="center" style={{color : "#fce4ec" , marginLeft : 160, marginTop : 10}} >
            만 19세 이상 음주 가능한 연령 입니까?
          </Typography>
      <Card className={`${classes.card} ${classes.first}`}>
      <CardActionArea component="a" href="/ranking">
      {/* <CardMedia
          className={classes.media}
          image="https://static.vinepair.com/wp-content/uploads/2018/06/Rose_Mobile.jpg"
          title="Contemplative Reptile"
        /> */}
              <Typography gutterBottom variant="h3" component="h2" align="center" style={{color : "#fce4ec"}}>
                  YES
          </Typography>

            </CardActionArea >
            </Card>
           

        
       
            <Card className={classes.card}>
            <CardActionArea component="a" href="#">
  
            {/* <CardMedia
          className={classes.media}
          image="http://2.bp.blogspot.com/-xjKs-BsTCHE/U6Ym8H6uaNI/AAAAAAAAEjs/V6yj1qYOYOw/s1600/no_wine.png"
          title="Contemplative Reptile"
        /> */}
         
         <Typography gutterBottom variant="h3" component="h2" align="center" style={{color : "#fce4ec"}}>
              NO
          </Typography>

            </CardActionArea>
            </Card>
            </Grid>

        </div>
      </main>
      {/* Footer */ }

  {/* End footer */ }
    </React.Fragment >
  );






}