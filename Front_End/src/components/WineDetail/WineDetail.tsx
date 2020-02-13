import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./wineDetail.css";
import ReviewInfo from "../Interface/Review";
import ReviewPost from "../Review_Page/ReviewPost";
import { withRouter, RouteComponentProps } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../../stores/login/store";
import { getWineDetail } from "../../../stores/wine_info/actions/wineDetail";
import { getFeedListByWID } from "../../../stores/feed/actions/feedInfo";

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
  }
}));

const wines = [
  {
    wid: 1,
    nameKor: "와인의 최고봉",
    nameEng: "Good Good",
    info: "너무너무 맛있어요...",
    type: "Red",
    rating: 5
  },
  {
    wid: 2,
    nameKor: "이 와인 추천 합니다.",
    nameEng: "Recommend",
    info: "과일향이 너무 좋아요...",
    type: "Red",
    rating: 4
  },
  {
    wid: 3,
    nameKor: "요새 마신 와인 중 최고",
    nameEng: "Best",
    info: "요새 마신 와인들 중에 제일 맛있었습니다....",
    type: "White",
    rating: 5
  }
];

interface RouterProps {
  // type for `match.params`
  wid: string; // must be type `string` since value comes from the URL
}

interface MyComponentProps extends RouteComponentProps<RouterProps> {
  wid: number;
}
function WineDetail(props: MyComponentProps) {
  // wid url parameter로 넘어옴
  const classes = useStyles();
  console.log(props);
  const wid = +props.match.params.wid;
  console.log(wid);

  const [wineState, setWineState] = React.useState(false);
  const dispatch = useDispatch();
  const {
    wine,
    isWineDetailPending,
    isWineDetailSucceess,
    WineDetailError
  } = useSelector((state: rootState) => state.wineDetailReducer);

  const { feedList, isFeedPending, isFeedSucceess, isFeedError } = useSelector(
    (state: rootState) => state.feedReducer
  );

  // console.log("wine initialState");
  // console.log(wine);

  const loadWineDetail = async () => {
    // console.log("onWine");
    await dispatch(getWineDetail(wid));
    await dispatch(getFeedListByWID(3, "REVIEW"));
    console.log("this is wine State");
    console.log(wine);
  };

  if (!isWineDetailSucceess && !wineState) {
    loadWineDetail();
    setWineState(true);
  } else {
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
                  <span>
                    {" "}
                    <img
                      src={`http://i02a303.p.ssafy.io:8090/WineProject/Wine/${wine.nameEng}.gif`}
                      alt={wine.nameKor}
                      className="sz619"
                      id="wineMainImage"
                    />
                  </span>
                </div>
              </div>

              <div className="bxr">
                <h1 className="tit">
                  {wine.nameEng}
                  <span id="wineKorName">{wine.nameKor}</span>{" "}
                </h1>
                <p id="wineContent">{wine.info}</p>
                <div className="hashtag">
                  #{wine.type} #{wine.country} #{wine.winery}
                </div>
                <div className="more_info clfix">
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <img src="/images/common/img_wine_alcohol.png" alt="" />
                      <strong>
                        알코올 <span>{wine.alcohol}</span>{" "}
                      </strong>{" "}
                    </li>
                    <li>
                      {" "}
                      <img src="/images/common/img_wine_volume.png" alt="" />
                      <strong>
                        용량 <span>750ml</span>{" "}
                      </strong>{" "}
                    </li>
                    <li>
                      {" "}
                      <img src="/images/common/img_wine_kind.png" alt="" />
                      <strong>
                        와인 종류 <span>White</span>{" "}
                      </strong>{" "}
                    </li>
                    <li>
                      {" "}
                      <img src="/images/common/img_wine_sparkling.png" alt="" />
                      <strong>
                        탄산 분류
                        {(function() {
                          if (wine.sparkling) {
                            return <span>Sparkling</span>;
                          } else {
                            return <span>Still</span>;
                          }
                        })()}{" "}
                      </strong>{" "}
                    </li>
                    <li>
                      {" "}
                      <img src="/images/common/img_wine_sugar.png" alt="" />
                      <strong>
                        당도
                        {(function() {
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
                      </strong>{" "}
                    </li>
                    <li>
                      {" "}
                      <img src="/images/common/img_wine_sugar.png" alt="" />
                      <strong>
                        바디
                        {(function() {
                          if (wine.body >= 4) {
                            return <span>Full Bodied</span>;
                          } else if (wine.body >= 2) {
                            return <span>Medium Bodied</span>;
                          } else {
                            return <span>Light Bodied</span>;
                          }
                        })()}
                      </strong>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ReviewPost />
            {/* Wiine 제품 정보 */}
            <h2 className="tit_h2">와인 제품 정보</h2>
            <div className="product_info clfix">
              {" "}
              <div>
                {" "}
                <dl>
                  {" "}
                  <dt>포도 품종</dt>{" "}
                  <dd>
                    {" "}
                    <span>
                      <img src="/images/common/img_pro_info01.jpg" alt="" />
                    </span>
                    {wine.grape}{" "}
                  </dd>{" "}
                </dl>{" "}
                <dl>
                  {" "}
                  <dt>제조사</dt>{" "}
                  <dd>
                    {" "}
                    <span>
                      <img src="/images/common/img_pro_info02.jpg" alt="" />
                    </span>
                    {wine.winery}
                  </dd>{" "}
                </dl>{" "}
              </div>
              <div>
                {" "}
                <dl>
                  {" "}
                  <dt>원산지</dt>{" "}
                  <dd>
                    {" "}
                    <span>
                      <img src="/images/common/img_pro_info03.jpg" alt="" />
                    </span>{" "}
                    {wine.country}, {wine.countrySub}{" "}
                  </dd>{" "}
                </dl>
                <dl>
                  {" "}
                  <dt>Grade</dt>{" "}
                  <dd>
                    {" "}
                    <span>
                      <img src="/images/common/img_pro_info04.jpg" alt="" />
                    </span>{" "}
                    {wine.grade}
                  </dd>{" "}
                </dl>{" "}
              </div>
              <div>
                {" "}
                <dl>
                  {" "}
                  <dt>Wine Use</dt>{" "}
                  <dd>
                    {" "}
                    <span>
                      <img src="/images/common/img_pro_info05.jpg" alt="" />
                    </span>{" "}
                    {wine.whenUse}
                  </dd>{" "}
                </dl>
                <dl>
                  {" "}
                  <dt>Food matching</dt>{" "}
                  <dd>
                    {" "}
                    <span>
                      <img src="/images/common/img_pro_info06.jpg" alt="" />
                    </span>{" "}
                    {wine.foodMatch}{" "}
                  </dd>{" "}
                </dl>{" "}
              </div>
              {/* <div> <dl> <dt>Flavor</dt> <dd> <span><img src="/images/common/img_pro_info07.jpg" alt="" /></span> 샴페인에 뒤지지 않는 세밀한 기포가 뛰어나며 풍부한 열대과일 아로마가 주는 크리미 한 느낌이 좋은 식전주, 메인 요리, 식후주 그 어떤 코스 요리의 순서와도 잘 어울린다. </dd> </dl> 
                                  <dl> <dt>Awards / Selling Point</dt> <dd> <span><img src="/images/common/img_pro_info08.jpg" alt="" /></span> 코도르뉴’ 와이너리는 카탈루냐 3대 건축가가 설계한 주요 건물과 세계에서 가장 큰 지하 와인 저장고의 가치를 인정받아 스페인 국가문화유산으로 지정됐다. </dd> </dl> </div>  */}
            </div>{" "}
            <div className="btn_area right">
              <a href="#" className="btns btn_list">
                목록 <span className="ico"></span>{" "}
              </a>{" "}
            </div>
            {/* Wiine Top 5 리뷰 */}
            <h2 className="tit_h2">Top 3 Review</h2>
            <div className="product_info clfix">
              <Container className={classes.cardGrid} maxWidth="md">
                ​ ​{/* End hero unit */}​ ​
                <Grid container spacing={4}>
                  {feedList.map(feed => (
                    <ReviewInfo
                      fid={feed.fid}
                      nameEng={feed.wine.nameEng}
                      content={feed.content}
                      rating={feed.rating}
                    />
                  ))}
                </Grid>
              </Container>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default withRouter(WineDetail);
