
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

import '../../index.css';


interface ReviewInfo {
    fid : number; 
    nameEng : string;
    content: string;
    rating : number;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // width: '100%',
    // maxHeight: 'auto',
    width:'70px',
    //paddingTop: '56.25%', // 16:9
    position: 'relative',
    marginLeft : '40%',
    height: '230px',
  },
  cardContent: {
    flexGrow: 1,
  },
  typography: {
    fontFamily: 'Cafe24Shiningstar',
  },                                                                                                                                 
}),
);

function WineInfo(review: ReviewInfo) {
  const classes = useStyles();

  const [checked] = React.useState(true);
  

    return (
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit >
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    
                    className={classes.cardMedia}
                    image={`http://i02a303.p.ssafy.io:8090/WineProject/Wine/${review.nameEng}.gif`}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                 
      <Typography>
                        {review.content.substring(0,80)}...
      </Typography>
                </CardContent>
               
                <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={review.rating} readOnly />
      </Box>
    
              
            </Card>
        </Grid>
        </Slide>
    );
}

export default WineInfo;
