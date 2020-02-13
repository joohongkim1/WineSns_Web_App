// created at: 2020-01-21
// created by: JSPark
// about: Review page 중 위쪽 파트, 배경 사진, 프로필 사진, toolbar를 포함하고 있다.

import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import LeftSide from './LeftSide';
import RightSide from './RightSide'
import Feed from './Feed';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mrMainContents: {
      paddingTop: "42px",
      width: "980px",
      margin: "0",
      marginRight: "0",
    },

    mrFeed: {
      // marginLeft: "354px",
      width: "600px",
      display: "inline-block",
    },

  }),
);

export default function Timelinesection() {
  const classes = useStyles();

  return (
    <div id="mrMainContents" className={classes.mrMainContents}>
      <div>
        <LeftSide />
        <div className={classes.mrFeed}>
          
          <Feed />
        </div>
        {/* <RightSide /> */}
      </div>
    </div>
  );
}