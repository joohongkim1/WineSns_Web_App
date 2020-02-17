import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import './wineDetail.css';
import ReviewInfo from "../Interface/Review";
import { withRouter, RouteComponentProps } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../stores/login/store';
import { getWineDetail, createWineLike, deleteWineLike } from '../../../stores/wine_info/actions/wineDetail';
import { getFeedListByWID } from '../../../stores/feed/actions/feedInfo';



import 'antd/dist/antd.css';
import { Pagination } from 'antd';


const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(15, 0, 20),
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/11/05/19/54/rose-1024710_1280.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff"
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },


}));




interface RouterProps { // type for `match.params`
  wid: string; // must be type `string` since value comes from the URL
}

interface MyComponentProps extends RouteComponentProps<RouterProps> {
  wid: number;
}
function WineDetail(props: MyComponentProps) { // wid url parameter로 넘어옴
  const classes = useStyles();
  console.log(props);
  const wid = +(props.match.params.wid);
  console.log(wid);

  const [wineState, setWineState] = React.useState(false);
  const [likeState, setLikeState] = React.useState(false);
  const dispatch = useDispatch();

  const { wine, isWineDetailPending, isWineDetailSucceess, WineDetailError } = useSelector(
    (state: rootState) => state.wineDetailReducer
  );

  const { feedList, isFeedPending, isFeedSucceess, isFeedError } = useSelector(
    (state: rootState) => state.feedReducer
  );

  // console.log("wine initialState");
  // console.log(wine);

  const loadWineDetail = async () => {

    let userLike = JSON.parse(sessionStorage.getItem('userLike') || '{}');


    for (var i = 0; i < userLike.length; i++) {
      if (userLike[i].wid == wid) {
        setLikeState(true)
        break
      }
    }



    // console.log("onWine");
    await dispatch(getWineDetail(wid));
    await dispatch(getFeedListByWID(wid, "REVIEW"));
    console.log("this is wine State");
    console.log(wine);
  };

  const likeThis = async () => {
    await dispatch(createWineLike(wid));
    setLikeState(true);
  };

  const hateThis = async () => {
    await dispatch(deleteWineLike(wid));
    setLikeState(false);
  };

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(30);

  const numEachPage: number = 30;
  const handleChange = (value: number) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue((value) * numEachPage);

  };


  if (!wineState) {
    loadWineDetail();
    setWineState(true);
  }
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h1" variant="h1" align="center">
              Wine List
            </Typography>
          </Container>
        </div>



        {/* Wiine 제품 이미지 및 정보 */}
        <div id="wrap" className="wrap">
          <section className="detail_wine">
            <div className="product_wine clfix">
              <div className="bxl">
                <div className="img">
                  <span>  <img src={`http://i02a303.p.ssafy.io:8090/WineProject/Wine/${wine.nameEng}.gif`} alt={wine.nameKor} className="sz619" id="wineMainImage" />

                  </span>
                </div>
              </div>

              <div className="bxr">



                <h1 className="tit">{wine.nameEng}
                  <span id="wineKorName">{wine.nameKor}</span> </h1>
                <p id="wineContent">{wine.info}</p>
                <div className="hashtag">#{wine.type} #{wine.country} #{wine.winery}</div>
                <div className="more_info clfix">
                  <ul> <li> <img className="imgWineAlcohol" />
                    <strong>알코올 <span>{wine.alcohol}</span> </strong> </li>
                    <li> <img className="imgWineKind" />
                      <strong>와인 종류 <span>White</span> </strong> </li>
                    <li> <img className="imgWineSparkling" />
                      <strong>탄산 분류
                             {(function () {
                          if (wine.sparkling) {
                            return <span>Sparkling</span>;
                          } else {
                            return <span>Still</span>;
                          }
                        })()}
                      </strong>
                    </li>
                    <li><img className="imgWineSugar" />
                      <strong>당도
                               {(function () {
                          if (wine.sweet == 5) {
                            return <span>Sweet</span>;
                          } else if (wine.sweet == 4) {
                            return <span>Medium Sweet</span>;
                          } else if (wine.sweet <= 3 && wine.sweet >= 2) {
                            return <span>Medium Dry</span>;
                          } else if (wine.sweet == 1) {
                            return <span>Dry</span>;
                          } else {
                            return <span>준비중</span>;
                          }
                        })()}
                      </strong> </li>
                    <li> <img className="imgWineBody" />
                      <strong>바디
                               {(function () {
                          if (wine.body >= 4) {
                            return <span>Full Bodied</span>;
                          } else if (wine.body >= 2) {
                            return <span>Medium Bodied</span>;
                          } else {
                            return <span>Light Bodied</span>;
                          }
                        })()}
                      </strong> </li>
                  </ul>
                </div>
              </div>

            </div>



            <div className="btn_area right">
              {(function () {

                if (likeState) {

                  return (
                    <IconButton aria-label="add to favorites" onClick={hateThis}>
                      <FavoriteIcon color="secondary" />

                    </IconButton>
                  )
                } else {
                  return (

                    <IconButton aria-label="add to favorites" onClick={likeThis}>
                      <FavoriteIcon color="inherit" />
                    </IconButton>
                  );
                }
              })()}

              <button className="btns btn_line_type blue">
                리뷰작성</button>


              {/* Wiine 제품 정보 */}

            </div>
            <div className="product_wine clfix">
            <div className="wineInfo">
            <h2 className="tit_h2">와인 제품 정보</h2>
            <div className="product_info clfix"> <div>
              <dl>
                <dt>포도 품종</dt>
                <dd>
                  <span className="info01Img"></span>
                  {wine.grape}
                </dd>
              </dl>
              <dl>
                <dt>제조사</dt>
                <dd>
                  <span className="info02Img"></span>
                  {wine.winery}</dd>
              </dl>
            </div>
              <div> <dl> <dt>원산지</dt>
                <dd>
                  <span className="info03Img"></span> {wine.country}, {wine.countrySub} </dd> </dl>
                <dl> <dt>Grade</dt> <dd>
                  <span className="info04Img"></span> {wine.grade}</dd> </dl> </div>
              <div> <dl> <dt>Wine Use</dt> <dd>
                <span className="info05Img"></span> {wine.whenUse}</dd> </dl>
                <dl> <dt>Food matching</dt> <dd>
                  <span className="info06Img"></span> {wine.foodMatch} </dd> </dl> </div>
              {/* <div> <dl> <dt>Flavor</dt> <dd> <span><img src="/images/common/img_pro_info07.jpg" alt="" /></span> 샴페인에 뒤지지 않는 세밀한 기포가 뛰어나며 풍부한 열대과일 아로마가 주는 크리미 한 느낌이 좋은 식전주, 메인 요리, 식후주 그 어떤 코스 요리의 순서와도 잘 어울린다. </dd> </dl> 
                                  <dl> <dt>Awards / Selling Point</dt> <dd> <span><img src="/images/common/img_pro_info08.jpg" alt="" /></span> 코도르뉴’ 와이너리는 카탈루냐 3대 건축가가 설계한 주요 건물과 세계에서 가장 큰 지하 와인 저장고의 가치를 인정받아 스페인 국가문화유산으로 지정됐다. </dd> </dl> </div>  */}
            </div> </div></div>
            
            <a href="/list" className="btns btn_line_type blue" style={{marginLeft: '97%'}}><button className="btns btn_line_type blue" >
              <span style={{fontSize : '20px'}}>목록</span></button></a>


            {/* Wiine Top 5 리뷰 */}


            <h2 className="tit_h2">{wine.nameKor} Review</h2>
            <div className="product_info clfix">

              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {feedList.slice(minValue, maxValue).map(feed => (
                    <ReviewInfo
                      fid={feed.fid}
                      title={feed.title}
                      nameEng={feed.wine.nameEng}
                      content={feed.content}
                      rating={feed.rating}

                    />
                  ))}
                </Grid>
              </Container>
            </div>
            <div>
          <Pagination
            total={feedList.length}
            // showTotal={total => `Total ${total} items`}
            onChange={handleChange}
            pageSize={numEachPage}
            defaultCurrent={1}
          /></div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );

}


export default withRouter(WineDetail);