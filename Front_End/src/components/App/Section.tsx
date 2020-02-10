import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import { getWineListByType } from "../../../stores/wine_info/actions/wineInfo";
// Redux
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarSecondary: {
      // justifyContent: "center",
      position: "relative",
      marginLeft: 120
    },
    toolbarLink: {
      fontSize: 24,
      color: "#ffffff",
      padding: theme.spacing(4),
      flexShrink: 0
    }
  })
);

const sections = [
  { title: "랭킹", url: "ranking" },
  { title: "와인 리스트", url: "list" },
  { title: "와인 리뷰", url: "#" },
  { title: "My SNS", url: "myreview" }
];

export default function Section() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onWineList = async () => {
    console.log("onWineList");
    await dispatch(getWineListByType("KOR_UP"));
  };
  return (
    <div className="container">
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            // onClick={onWineList}
            className={classes.toolbarLink}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
}
