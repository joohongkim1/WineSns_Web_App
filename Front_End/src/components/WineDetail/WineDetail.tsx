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
import WineInfo from "../Interface/Wine";

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


const wines = [{wid : 1, nameKor : "와인의 최고봉", nameEng : "Good Good", 
info : "너무너무 맛있어요...", type: "Red", rating : 5},
{wid : 2, nameKor : "이 와인 추천 합니다.", nameEng : "Recommend", 
info : "과일향이 너무 좋아요...", type: "Red", rating : 4},
{wid : 3, nameKor : "요새 마신 와인 중 최고", nameEng : "Best", 
info : "요새 마신 와인들 중에 제일 맛있었습니다....", type: "White", rating : 5 }

]; 


export default function WineList() {
  const classes = useStyles();

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
              <span> <img src="http://m.wine.co.kr/upload/products/wineList/spain/CavaClassicoDO.png"
               alt="안나 드 코도르뉴 블랑 드 블랑" className="sz619" id="wineMainImage" /> 
               </span>
                </div>
                 </div>   
               
                <div className="bxr"> 


            
               <h1 className="tit">Anna de Codorniu 
               <span id="wineKorName">안나 드 코도르뉴 블랑 드 블랑</span> </h1>
                <p id="wineContent">스페인 최초의 샤도네 주 품종의 카바 와인이며 코도르뉴 가문의 마지막 상속녀 ‘안나’의 이름으로 그녀의 남편이 사랑하는 마음을 담아 만든 와인. 웨딩드레스를 연상시키는 순백의 디자인으로 그녀에 대한 남편의 사랑을 느낄수 있다. 일생을 와이너리에 헌신한 ‘안나’는 스페인 현지인으로부터 ‘신 여성’의 이미지가 부각되어 해마다 크리스마스에 지성과 미모를 갖춘 ‘올해의 미스 안나 선발대회’가 열리고 있다.</p> 
                <div className="hashtag"> #유럽와인 #스페인 #White #Medium Dry</div> 
                <div className="more_info clfix">
                     <ul> <li> <img src="/images/common/img_wine_alcohol.png" alt="" />
                          <strong>알코올 <span>11.5%</span> </strong> </li> 
                          <li> <img src="/images/common/img_wine_volume.png" alt=""/> 
                          <strong>용량 <span>750ml</span> </strong> </li>
                           <li> <img src="/images/common/img_wine_kind.png" alt=""/> 
                           <strong>와인 종류 <span>White</span> </strong> </li> 
                           <li> <img src="/images/common/img_wine_sparkling.png" alt=""/> <
                               strong>탄산 분류 <span>Sparkling</span> </strong> </li> 
                               <li> <img src="/images/common/img_wine_sugar.png" alt=""/> 
                               <strong>당도 <span>Medium Dry</span> </strong> </li> 
                               </ul> 
                </div> 
                </div>
            
                </div>



                <div className="btn_area right"> 
                <button className="btns btn_line_type blue"> 
                <span className="ico fb"></span>리뷰작성</button>


                {/* Wiine 제품 정보 */}

                 </div> 
                 
                 <h2 className="tit_h2">와인 제품 정보</h2>
                       <div className="product_info clfix"> <div> <dl> <dt>포도 품종</dt> <dd> <span>
                           <img src="/images/common/img_pro_info01.jpg" alt="" /></span> 샤도네이 </dd> </dl> <dl> <dt>제조사</dt> <dd> <span>
                               <img src="/images/common/img_pro_info02.jpg" alt="" /></span> 코도르뉴 </dd> </dl> </div> 
                               <div> <dl> <dt>원산지</dt> <dd> <span><img src="/images/common/img_pro_info03.jpg" alt="" /></span> 스페인, 페네데스 </dd> </dl>
                                <dl> <dt>Color</dt> <dd> <span><img src="/images/common/img_pro_info04.jpg" alt="" /></span> 밝은 볕짚색 </dd> </dl> </div>
                                  <div> <dl> <dt>Aroma</dt> <dd> <span><img src="/images/common/img_pro_info05.jpg" alt="" /></span> 열대 과일, 시트러스 </dd> </dl> 
                                  <dl> <dt>Food matching</dt> <dd> <span><img src="/images/common/img_pro_info06.jpg" alt="" /></span> 구운야채, 생선 요리, 각종 해산물, 치킨요리 </dd> </dl> </div> 
                                  <div> <dl> <dt>Flavor</dt> <dd> <span><img src="/images/common/img_pro_info07.jpg" alt="" /></span> 샴페인에 뒤지지 않는 세밀한 기포가 뛰어나며 풍부한 열대과일 아로마가 주는 크리미 한 느낌이 좋은 식전주, 메인 요리, 식후주 그 어떤 코스 요리의 순서와도 잘 어울린다. </dd> </dl> 
                                  <dl> <dt>Awards / Selling Point</dt> <dd> <span><img src="/images/common/img_pro_info08.jpg" alt="" /></span> 코도르뉴’ 와이너리는 카탈루냐 3대 건축가가 설계한 주요 건물과 세계에서 가장 큰 지하 와인 저장고의 가치를 인정받아 스페인 국가문화유산으로 지정됐다. </dd> </dl> </div> 
                                  </div> <div className="btn_area right"> 
                 <a href="#" className="btns btn_list" >목록 <span className="ico"></span> </a> </div>
  
        
  {/* Wiine Top 5 리뷰 */}


  <h2 className="tit_h2">Top 3 Review</h2>
    <div className="product_info clfix">
  
    <Container className={classes.cardGrid} maxWidth="md">
            ​ ​{/* End hero unit */}​ ​
            <Grid container spacing={4}>
              {wines.map(wine => (
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
    </div>
    
    </section>
    </div>
      </main>
    </React.Fragment>
  );
}
