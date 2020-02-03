import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import PostList from './Posts/PostList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // itemContainer: {
    //   width: "331px",
    //   boxSizing: "border-box",
    //   background: "#fff",
    //   borderRadius: "3px",
    //   border: "solid 1px #ddd",
    //   marginTop: "15px",
    //   padding: "15px",
    //   fontSize: "12px",
    //   marginRight: "15px",
    // },

  }),
);

export default function Feed() {
  const classes = useStyles();
  return (
    
    <div>
      <Button
        variant="contained"
        color="primary">
        {/* 게시글 작성 modal 띄우기 */}
        게시글 작성
      </Button>
      {/* 작성된 Post를 전부 모아두는 곳 */}
      <PostList />
    </div>
  );
}
