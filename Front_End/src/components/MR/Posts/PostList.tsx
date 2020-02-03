import React, { Component } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Post from './Post';

let posts = [
  {
      "pk": 1,
      "userId": "sysh5656@naver.com",
      "date": 20200127,
      "contents": "aaa",
      "w_Id": 1,
      "picture": "",
      "score": 8,
      "comments": [
          {
              "pk": 1,
              "userId": "sysh5656@naver.com",
              "feedId": 1,
              "contents": "aaaa"
          },
          {
              "pk": 2,
              "userId": "sysh5656@naver.com",
              "feedId": 1,
              "contents": "aaaaaa"
          }
      ]
  },
  {
      "pk": 2,
      "userId": "sysh5656@naver.com",
      "date": 20200128,
      "contents": "aaa",
      "w_Id": 16,
      "picture": "",
      "score": 9,
      "comments": [
          {
              "pk": 3,
              "userId": "sysh5656@naver.com",
              "feedId": 2,
              "contents": "aaaa"
          },
          {
              "pk": 4,
              "userId": "sysh5656@naver.com",
              "feedId": 2,
              "contents": "aaaaaa"
          }
      ]
  },
  {
      "pk": 3,
      "userId": "sysh5656@naver.com",
      "date": 20200129,
      "contents": "aaa",
      "w_Id": 123,
      "picture": "",
      "score": 4,
      "comments": [
          {
              "pk": 5,
              "userId": "sysh5656@naver.com",
              "feedId": 3,
              "contents": "aaaa"
          },
          {
              "pk": 6,
              "userId": "sysh5656@naver.com",
              "feedId": 3,
              "contents": "aaaaaa"
          }
      ]
  },
  {
      "pk": 4,
      "userId": "bikim@gamil.com",
      "date": 20200129,
      "contents": "aaa",
      "w_Id": 87,
      "picture": "",
      "score": 4,
      "comments": [
          {
              "pk": 7,
              "userId": "sysh5656@naver.com",
              "feedId": 4,
              "contents": "aaaa"
          },
          {
              "pk": 8,
              "userId": "sysh5656@naver.com",
              "feedId": 4,
              "contents": "aaaaaa"
          }
      ]
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainerPost: {
      width: "600px",
      borderRadius: "5px",
      // width: "331px",
      boxSizing: "border-box",
      background: "#fff",
      // borderRadius: "3px",
      border: "solid 1px #ddd",
      marginTop: "15px",
      padding: "15px",
      fontSize: "12px",
      marginRight: "15px",
    },
    itemList: {
      padding: "0px 0px 0px 0px"
    }
  })
);


export default function PostList() {
  const classes = useStyles();

  return (

    // 
    <div className={classes.itemContainerPost}>

      <ul className={classes.itemList}>
        {posts.map(post => <Post 
        key={post.pk} 
        userId={post.userId} 
        date={post.date} 
        contents={post.contents} 
        w_Id={post.w_Id} 
        picture={post.picture}
        score={post.score}
        comments={post.comments} />)}
      </ul>
    </div>
  );

}