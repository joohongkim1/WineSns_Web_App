import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import "./TempRanking.css";


// Redux
import { useSelector,  useDispatch} from 'react-redux';
import { rootState } from '../../../stores/login/store';
import { getWineTop10 } from '../../../stores/wine_info/actions/mainRank';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
         
            width : '1200px',
        },

        gridContainer: {
            width: '',
            height: '100%',
            // paddingTop: theme.spacing(6),
            paddingLeft: '15%'
        },

        listFont: {
            fontSize: 28,
        },

        itemFont: {
            fontSize: 28,
        }

    }),
);

export default function Ranking() {
    const classes = useStyles();
    const [wineState, setWineState] = React.useState(false);
    const dispatch = useDispatch();
    //  const [state, setState] = useState(nickname : state.RegistUser.nickname, );
    const { wineTop10, isWinePending,isWineTop10Succeess, isWineError} = useSelector(
      (state: rootState) => state.wineRankReducer
    );



    const loadWineTop10 = async () => {
        console.log("onWineTop10List");
        await dispatch(getWineTop10("VISIT_10"));
      }
    
      if(!isWineTop10Succeess && !wineState) {
        loadWineTop10();
        setWineState(true);
      } else {
    
      }

    return (
        <div>
           
               
                    <h3 className="tit40_line">Today's Wine</h3>
                    <Grid container className={classes.gridContainer} >
                    <div className="bx_new_wine scroll-pane horizontal-only" style={{overflow: "hidden", padding: "0px", width: "1200px"}}>
                        <div className="jspContainer" style={{width: "1200px", height: "375px"}}>
                            <div className="jspPane" style={{padding: "0px", top: "0px", left: "0px", width: "1200px"}}>
                                <div className="monthly_products"> <ul className="clfix" id="monthly-detail-nav">
                                {wineTop10.map(wine => (
                                    <li>
                                    <a href="#">
                                            <div> <div className="img">
                                                <span className="ctype red"> <span className="hide_txt">Red</span> </span>
                                                <img src={`http://i02a303.p.ssafy.io:8090/WineProject/Wine/${wine.nameEng}.gif`} alt="" />
                                                    <span className="shadow"></span> 
                                 </div>
                                                <strong className="tit">{wine.nameKor}</strong> </div> </a>
                                  </li>   ))}
                                  
                                  {/* <li> <a href="#">
                                            <div> <div className="img">
                                                <span className="ctype white"> <span className="hide_txt">White</span> </span>
                                                {/* <img src="https://4.bp.blogspot.com/-yaW1SjkYpBI/TbfMM80ug7I/AAAAAAAAAHA/6SKTqxy3jbw/s1600/lollipop%255B2%255D.jpg" alt="" /> */}
                                                    {/* <span className="shadow"></span> </div> <strong className="tit">산타리타 120 샤도네</strong> </div></a> </li>
                                            <li> <a href="#">
                                                <div> <div className="img"> <span className="ctype red">
                                                    <span className="hide_txt">Red</span> </span>
                                                    {/* <img src="https://4.bp.blogspot.com/-yaW1SjkYpBI/TbfMM80ug7I/AAAAAAAAAHA/6SKTqxy3jbw/s1600/lollipop%255B2%255D.jpg" alt="" /> */}
                                                        {/* <span className="shadow"></span> </div>
                                                    <strong className="tit">산타리타 120 멜로 375</strong> </div> </a></li>
                                                <li> <a href="#"> <div>
                                                    <div className="img"> <span className="ctype white">
                                                        <span className="hide_txt">White</span> </span>
                                                        {/* <img src="https://4.bp.blogspot.com/-yaW1SjkYpBI/TbfMM80ug7I/AAAAAAAAAHA/6SKTqxy3jbw/s1600/lollipop%255B2%255D.jpg" alt="" /> */}
                                                            {/* <span className="shadow"></span> </div>
                                                        <strong className="tit">산타리타 120 샤도네 375 Scap</strong>
                                                    </div></a> 
                                                    </li> */} 


                                                     </ul> 
                                                       </div>
                                                       </div>
                                                  </div>
                                                  </div>
        
                                </Grid>

                            
                        </div>
                        );
}