import React from "react";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  fade,
  Theme,
  makeStyles
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center"
    },
    search: {
      position: "relative",
      display: "inline-block",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      },
      float: "right",
      marginRight: 430
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "relative",
      pointerEvents: "none",
      display: "inline",
      top: "50%"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  })
);

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
}
