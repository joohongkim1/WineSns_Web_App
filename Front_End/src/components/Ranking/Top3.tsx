import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import WineInfo from "../Interface/Wine";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../../stores/login/store";
import { getWineTop3 } from "../../../stores/wine_info/actions/mainRank";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroContent: {
      // marginBottom: theme.spacing(4),
      // backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "cover"
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1
    },
    root: {
      height: 180
    }
  })
);

//const wines = [1, 2, 3]; // 표시할 카드 개수

const wines = [
  {
    nameKor: "까스텔로 반피, 라 로사",
    nameEng: "Castello Banfi, La Rosa",
    info: "장미빛의 은은한 레드를 띠며 스트로베리, 라즈베리 열매향을 지니며...",
    type: "Red",
    rating: 5
  },
  {
    nameKor: "아포틱 레드",
    nameEng: "Apothic Red",
    info:
      "진한 자주빛의 붉은색을 띠며 블랙 베리와 잘 익은 체리의 과실향을 느낄 수...",
    type: "Red",
    rating: 5
  },
  {
    nameKor: "조닌, 아스티",
    nameEng: "Zonin, Asti",
    info:
      "복숭아, 꿀 등의 향긋한 아로마를 느낄 수 있다. 모스카토 품종 특유의...",
    type: "White",
    rating: 4
  }
];

export default function TempTop3() {
  const classes = useStyles();
  const [value] = React.useState(4); // for Rati$ng : value 는 rating 점수
  const [wineState, setWineState] = React.useState(false);
  const dispatch = useDispatch();
  //  const [state, setState] = useState(nickname : state.RegistUser.nickname, );
  const {
    wineTop3,
    isWinePending,
    isWineTop3Success,
    isWineError
  } = useSelector((state: rootState) => state.wineRankReducer);

  const loadWineTop3 = async () => {
    console.log("onWineTop3List");
    await dispatch(getWineTop3("VISIT_3"));
  };

  if (!isWineTop3Success && !wineState) {
    loadWineTop3();
    setWineState(true);
  } else {
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <img
        style={{width:'100%', height:'380px'}}
           src="https://images.squarespace-cdn.com/content/v1/537389d2e4b07f58912b984c/1526416085429-D2H95FD5WEM6NZQGIO7W/ke17ZwdGBToddI8pDm48kIdjNHBVPtCPmDHS5OrNq_pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIQzMTntcupKyj55gjnAg9F4yZODDO3HH_T7LbRYIUQtA/anniv.gif?format=1500w"
          // src="https://media.giphy.com/media/jNdw5Qmy5MOpq/giphy.gif"
          className={classes.heroContent}
        >
          ​
        </img>
     
        <Container className={classes.cardGrid} maxWidth="md">
        <h3 className="tit40_line">Top3 Wine</h3>
          <Grid container spacing={4}>
            {wineTop3.map(wine => (
              <WineInfo
                wid={wine.wid}
                nameKor={wine.nameKor}
                nameEng={wine.nameEng}
                info={wine.info}
                type={wine.type}
              />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}​{/* End footer */}
    </React.Fragment>
  );
}
