import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      width: "100%",
      height: "100%",
      // backgroundColor: theme.palette.background.paper,
      // paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },

    gridContainer: {
      width: "100%",
      height: "100%",
      paddingTop: theme.spacing(6),
      paddingLeft: "20.25%;"
    },

    listFont: {
      fontSize: 28
    },

    itemFont: {
      fontSize: 28
    }
  })
);

export default function Ranking() {
  const classes = useStyles();

  function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={10}>
        <Grid item xs={12} sm={6} md={5}>
          <List
            component="nav"
            aria-label="view list"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.listFont}
              >
                오늘의 와인
              </ListSubheader>
            }
          >
            <ListItemLink href="#simple-list">
              <ListItemText primary="1" className={classes.listFont} />
              <ListItemText
                primary="까스텔로 반피, 라 로사"
                className={classes.listFont}
              />
            </ListItemLink>
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="2" className={classes.listFont} />
              <ListItemText
                primary="아포틱 레드"
                className={classes.listFont}
              />
            </ListItemLink>
          </List>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="3" className={classes.listFont} />
            <ListItemText primary="조닌, 아스티" className={classes.listFont} />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="4" className={classes.listFont} />
            <ListItemText
              primary="비냐 란자 화이트"
              className={classes.listFont}
            />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="5" className={classes.listFont} />
            <ListItemText primary="샤또 뿌제" className={classes.listFont} />
          </ListItemLink>{" "}
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="6" className={classes.listFont} />
            <ListItemText
              primary="샤또 크로와제 바쥐"
              className={classes.listFont}
            />
          </ListItemLink>{" "}
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="7" className={classes.listFont} />
            <ListItemText
              primary="액커만, 레미 파니에르 로제 당주"
              className={classes.listFont}
            />
          </ListItemLink>{" "}
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="8" className={classes.listFont} />
            <ListItemText
              primary="울프베르제, 방당주 타르디브 피노 그리"
              className={classes.listFont}
            />
          </ListItemLink>{" "}
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="9" className={classes.listFont} />
            <ListItemText
              primary="조르쥐 뒤뵈프, 보졸레 빌라쥐"
              className={classes.listFont}
            />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="10" className={classes.listFont} />
            <ListItemText
              primary="비달 플뢰리, 꼬뜨 뒤 론 빌라쥐"
              className={classes.listFont}
            />
          </ListItemLink>
          <List />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <List
            component="nav"
            aria-label="view list"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.listFont}
              >
                오늘의 리뷰
              </ListSubheader>
            }
          >
            <ListItemLink href="#simple-list">
              <ListItemText primary="1" className={classes.listFont} />
              <ListItemText
                primary="주간 1위는 다르네요"
                className={classes.listFont}
              />
            </ListItemLink>
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="2" className={classes.listFont} />
              <ListItemText
                primary="화이트 와인은 조닌, 아스티"
                className={classes.listFont}
              />
            </ListItemLink>
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="3" className={classes.listFont} />
              <ListItemText
                primary="상큼한 Castello Banfi, La Rosa"
                className={classes.listFont}
              />
            </ListItemLink>
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="4" className={classes.listFont} />
              <ListItemText
                primary="샤또는 뿌제가 제일!"
                className={classes.listFont}
              />
            </ListItemLink>{" "}
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="5" className={classes.listFont} />
              <ListItemText
                primary="다들 액커만 꼭 마셔보세요!"
                className={classes.listFont}
              />
            </ListItemLink>{" "}
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="6" className={classes.listFont} />
              <ListItemText
                primary="샤또 뿌제 리뷰"
                className={classes.listFont}
              />
            </ListItemLink>{" "}
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="7" className={classes.listFont} />
              <ListItemText
                primary="비냐 란자 화이트 vs 조니, 아스티"
                className={classes.listFont}
              />
            </ListItemLink>{" "}
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="8" className={classes.listFont} />
              <ListItemText
                primary="레드 와인 추천"
                className={classes.listFont}
              />
            </ListItemLink>{" "}
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="9" className={classes.listFont} />
              <ListItemText
                primary="아포틱 레드 리뷰"
                className={classes.listFont}
              />
            </ListItemLink>
            <Divider />
            <ListItemLink href="#simple-list">
              <ListItemText primary="10" className={classes.listFont} />
              <ListItemText
                primary="이 주의 와인, 라 로사"
                className={classes.listFont}
              />
            </ListItemLink>
            <List />
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
