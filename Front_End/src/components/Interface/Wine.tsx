
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


interface WineInfo {
    nameKor: string;
    nameEng : string;
    type : string;
    info: string;
    rating: number;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: '100%',
    maxHeight: 'auto',
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  typography: {
    fontFamily: 'Cafe24Shiningstar',
  },                                                                                                                                 
}),
);

function WineInfo(wine: WineInfo) {
  const classes = useStyles();

  const [checked] = React.useState(true);
  let num: number = wine.rating;
  const [value] = React.useState(num);
    return (
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit >
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    
                    className={classes.cardMedia}
                    image="https://crwine.com/wp-content/uploads/2016/09/cedar-ridge-falcon-hill-wine.jpg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.typography} >
                     {wine.nameKor}
      </Typography>
      <Typography className={classes.typography}>
                     {wine.nameEng}
      </Typography>
                    <Typography>
                        {wine.type}
      </Typography>
      <Typography>
                        {wine.info}
      </Typography>
                </CardContent>
               
                    {/* <Button size="small" color="primary">
                        View
      </Button> */}
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
              
            </Card>
        </Grid>
        </Slide>
    );
}

export default WineInfo;
