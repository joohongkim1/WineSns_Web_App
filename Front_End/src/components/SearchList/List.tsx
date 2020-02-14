import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ReviewModal from "./ReviewModal";
import OutlinedButtons from "./ViewMore";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
​
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../stores/login/store';
import { getSmartSearch, getSmartSearchByName } from '../../../stores/smartSearch/actions/wineInfo';
//antDesign
import 'antd/dist/antd.css';
import { Checkbox, Row, Col } from 'antd';
import { render } from "react-dom";
​
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    heroContent: {
      padding: theme.spacing(15, 0, 20),
      backgroundImage:
        "url(https://cdn.pixabay.com/photo/2015/11/05/19/54/rose-1024710_1280.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff"
    },
    card: {
      maxWidth: 300,
      height: "100%",
      flexDirection: "column",
      marginLeft: 20,
      marginRight: 20
    },
    media: {
      width: '70px',
      //paddingTop: '56.25%', // 16:9
      position: 'relative',
      marginLeft: '40%',
      height: '230px',
    },
​    cardGrid: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(12)
    },
    divider: {
      backgroundColor: "#36342f",
      marginBottom: "80px"
    },
    divider2: {
      backgroundColor: "#36342f",
      marginTop: "100px",
      position: "relative",
      zIndex: 6
    },
    btn: {
      fontSize: "25px",
      paddingLeft: "50px",
      paddingRight: "50px"
    },
    btnGroup: {
      display: "flex",
      justifyContent: "center",
      zIndex: 5,
      position: "relative"
      // marginTop: "20px",
    },
    total: {
      display: "inline-block",
      marginLeft: "15px"
    },
    search: {
      display: "flex",
      justifycontent: "right"
    },
    home: {
      display: "inline-block flex",
      float: "right",
      marginRight: "20px"
    },
    more: {
      "& > *": {
        margin: theme.spacing(1, 8)
      }
    }
  })
);
​
export default function List(props : any) {

  const { taste } = props.location.state
  const {name} = props.location.state

  

  const [btnNum, setBtnNum] = useState(0);
  const classes = useStyles();
  const [wineState, setWineState] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30);
  const dispatch = useDispatch();
  //  const [state, setState] = useState(nickname : state.RegistUser.nickname, );
  const { searchList, isSmartSearchPending, isSmartSearchSucceess, isSmartSearchError } = useSelector(
    (state: rootState) => state.SmartSearchReducer
  );
​
  let start: number = 0;
  let end: number = 0;
  const loadWineList = async () => {
    console.log("on Smart Search List");
    console.log(taste);
    await dispatch(getSmartSearch(taste.alcohol, taste.country, taste.sparkling, taste.sweet, taste.type));
  }

  const loadWineListByName = async () => {
    console.log("on Smart Search List By Name");
    console.log(taste);
    await dispatch(getSmartSearchByName(name));
  }


  const numEachPage: number = 30;
​
  const handleChange = (value: number) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue((value) * numEachPage);
    // setState({
    //   minValue: (value - 1) * numEachPage,
    //   maxValue: value * numEachPage
    // });
  };


  if (!isSmartSearchSucceess && !wineState && taste!=null) {
    loadWineList();
    setWineState(true);
    console.log("taste is not null")
  } else if(!isSmartSearchSucceess && !wineState && taste==null) {
    console.log("taste is null")
    loadWineListByName();
    setWineState(true);
  } else {
    
  }
  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container>
          <Typography component="h1" variant="h1" align="center">
            Smart Search List
          </Typography>
        </Container>
      </div>
​
      {/* <ReviewModal /> */}
      <div>
        <Link
          to={"/ranking"}
          className={classes.home}
          style={{ textDecoration: "none" }}
        >
          <Typography>Home > 와인 list</Typography>
        </Link>
      </div>
      <div className={classes.divider2}>
        <Divider variant="middle" />
      </div>
      <div className={classes.btnGroup}>
          <h2>Smart Search</h2>
      </div>
  
      <Container className={classes.cardGrid}>
        <Typography className={classes.total}>Total {searchList.length}</Typography>
        <Divider variant="middle" className={classes.divider} />
        <Grid container spacing={10}>
          {searchList.slice(minValue, maxValue).map(wine => (
​
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={wine.nameKor}
                  subheader={wine.nameEng}
                />
                {/* <Link to={`/detail/${wine.wid}`} style={{ textDecoration: "none" }}> */}
                <CardMedia
                  className={classes.media}
                  image={`http://i02a303.p.ssafy.io:8090/WineProject/Wine/${wine.nameEng}.gif`}
                  title={wine.nameEng}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {wine.info.slice(0, 50)}...
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="secondary" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <div className={classes.more}>
                    <Link to={`/detail/${wine.wid}`} style={{ textDecoration: "none" }}>
                      <Button variant="outlined">View More</Button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
​
        </Grid>
        <div>
          <Pagination
            total={searchList.length}
            // showTotal={total => `Total ${total} items`}
            onChange={handleChange}
            pageSize={numEachPage}
            defaultCurrent={1}
          /></div>
        {/* <ReviewModal /> */}
      </Container>
    </React.Fragment >
  );
}