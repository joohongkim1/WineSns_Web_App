import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
      flex: 1
    },
    toolbarSecondary: {
      justifyContent: "center",
      overflowX: "auto"
    },
    toolbarLink: {
      fontSize: 32,
      color: brown["900"],
      padding: theme.spacing(2),
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
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
            style={{ textDecoration: "none" }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
}
