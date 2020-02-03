import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

const useStyles =  makeStyles((theme: Theme) =>
createStyles({
  mrProfile: {
    borderRadius: "5px",
    // width: "331px",
    boxSizing: "border-box",
    background: "#fff",
    // borderRadius: "3px",
    border: "solid 1px #ddd",
    fontSize: "12px",
    listStyle: "none",
    paddingLeft: "0px"
  }
})
);

export default function Profile() {
  const classes = useStyles();
  return (
    <ul className={classes.mrProfile}>
      <li>
        ...
      </li>
      <li>
        ...
      </li>
    </ul>
  );
}