// 실질적인 Review를 보여주는 component
// li tag 내에 구현


import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Comment from './Comment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postBox: {
      borderBottom: "solid 1px #dddfe2",
      marginBottom: "20px",
    },
    post: {
      position: "relative",
      listStyle: "none",

    },
    postHeader: {
      display: "flex",
      height: "80px",
      borderBottom: "solid 1px #dddfe2"
    },
    postProfileImg: {
      backgroundSize: "contain",
      borderRadius: "100%",
      height: "40px",
      width: "40px",
      marginRight: "10px",
      cursor: "pointer",
      color: "#ffffff",
    },
    postProfileAuthor: {
      fontSize: "14px",
      // fontWeight: "500",
      color: "#315796",
      cursor: "pointer",
    },
    postBody: {
      fontSize: "14px",
      height: "50px",
    },
    postDate: {
      fontSize: "12px",
      color: "#606778",
    }

  })
);

interface CommentList {
  pk: number,
  userId: string,
  feedId: number,
  contents: string,
}

interface Posts {
  key: number,
  userId: string,
  date: number,
  contents: string,
  w_Id: number,
  picture: string,
  score: number,
  comments: Array<CommentList>,
}

const url = 'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_653/v1523046075/no_face.png'

export default function Post(post: Posts) {
  const classes = useStyles();
  return (
    <div className={classes.postBox}>
      <li className={classes.post}>
        <div className={classes.postHeader}>

          <div
            style={{

              backgroundImage: `url("${url}")`
            }}
            className={classes.postProfileImg}
          />
          <div>
            <h3 className={classes.postProfileAuthor}>
              {post.userId}
            </h3>
            <p className={classes.postDate}>
              {new Date(post.date).toDateString()}
            </p>
          </div>
        </div>
        <p className={classes.postBody}>
          {post.contents}
        </p>
        <Comment />
      </li>
    </div>
  );
}