import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

const useStyles =  makeStyles((theme: Theme) =>
createStyles({
  mrFriends: {
    borderRadius: "5px",
    // width: "331px",
    boxSizing: "border-box",
    background: "#fff",
    // borderRadius: "3px",
    border: "solid 1px #ddd",
    fontSize: "12px",
  }
})
);



export default function Friends() {
  const classes = useStyles();
  return (
    <ul className={classes.mrFriends}>
      <li>
        ...
      </li>
      <li>
        ...
      </li>
    </ul>
  );
}