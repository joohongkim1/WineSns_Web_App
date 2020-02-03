import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TimelineSection from './MR/TimelineSection';
import MainContent from './MR/MainContent'

// import CssBaseline from '@material-ui/core/CssBaseline';
// import { Container } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

export default function MyReview() {
  const classes = useStyles();

  return (
    <div id="globalContainer">
      <div>
      {/* 프로필 사진 단 */}
        <TimelineSection />

      {/* main contents 단 */}
        <MainContent />
      </div>
    </div>
  );
}