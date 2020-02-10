import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
            key={section.title}
            to={section.url}
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
