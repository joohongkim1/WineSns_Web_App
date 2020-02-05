import React from "react";
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
      height: 0,
      paddingTop: "90%" // 16:9
    },

    cardGrid: {
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
    }
  })
);

const wines = [
  {
    nameKor: "까스텔로 반 피",
    nameEng: "Castello Banfi, La Rosa",
    country: "프랑스",
    info: "장미빛의 은은한 레드를 띠며 스트로베리, 라즈베리 열매향을 지니며...",
    type: "Red",
    rating: 5,
    image:
      "data:image/jpeg;base64,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"
  },
  {
    nameKor: "아포틱 레드",
    nameEng: "Apothic Red",
    country: "한국",
    info:
      "진한 자주빛의 붉은색을 띠며 블랙 베리와 잘 익은 체리의 과실향을 느낄 수...",
    type: "Red",
    rating: 5,
    image:
      "https://webtong.kr/data/editor/1810/23e927e52e8bad28674036c028b8b15a_1539662421_3026.jpg"
  },
  {
    nameKor: "조닌 아스티",
    nameEng: "Zonin, Asti",
    country: "미국",
    info:
      "복숭아, 꿀 등의 향긋한 아로마를 느낄 수 있다. 모스카토 품종 특유의...",
    type: "White",
    rating: 4,
    image:
      "http://wtop.com/wp-content/uploads/2016/12/Even-Smaller-Champagne1-622x485.jpg"
  }
];

export default function List() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container>
          <Typography component="h1" variant="h1" align="center">
            Wine List
          </Typography>
        </Container>
      </div>

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
        <ButtonGroup
          size="large"
          aria-label="large outlined primary button group"
        >
          <Button className={classes.btn}>유럽 와인</Button>
          <Button className={classes.btn}>신대륙 와인</Button>
          <Button className={classes.btn}>한국 와인</Button>
        </ButtonGroup>
      </div>

      <Container className={classes.cardGrid}>
        <Typography className={classes.total}>Total </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Grid container spacing={10}>
          {wines.map(wine => (
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
                <Link to={"/detail"} style={{ textDecoration: "none" }}>
                  <CardMedia
                    className={classes.media}
                    image={wine.image}
                    title={wine.nameEng}
                  />
                </Link>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {wine.info}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="secondary" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <OutlinedButtons />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <ReviewModal /> */}
      </Container>
    </React.Fragment>
  );
}
