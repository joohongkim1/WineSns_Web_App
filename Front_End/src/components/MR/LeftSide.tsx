import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import Profile from './Profile/Profile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mrSide: {
    bottom: "auto",
    left: "auto",
    // zIndex: "0",
    position: "absolute",
    // position: "relative",
    top: "400px", // need to change
    width: "323px",
    fontSize: "14px",
    // fontWeight: "300",
    padding: "6px 0px",
    boxSizing: "border-box",
    marginLeft: "12px",
    marginRight: "12px",
    listStyle: "none",
    },
  }),
);

export default function LeftSide() {
  const classes = useStyles();
  return (
    <div className={classes.mrSide}>
      <Profile />
    </div>
  );
}
