import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Followers from './Followers';
import Followings from './Followings';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mrFriendsContainer:{
      display: "flex",
      paddingTop: "5px",
      // paddingLeft: "24px",
      paddingRight: "24px",
      paddingBottom: "96px",
      marginLeft: "100px",
      
    },
    mrFriends: {
      width: "365px",
      marginRight: "150px",
      // borderRadius: "5px",
      // width: "331px",
      // boxSizing: "border-box",
      // background: "#fff",
      // borderRadius: "3px",
      // border: "solid 1px #ddd",
      fontSize: "12px",
    },
    mrFriendsHeader: {
      
      marginBottom: "0px",
      textAlign: "center",

    },
    ulCommon: {
      borderRadius: "5px",
      // width: "331px",
      boxSizing: "border-box",
      background: "#fff",
      // borderRadius: "3px",
      border: "solid 1px #ddd",
      fontSize: "15px",
      listStyle: "none",
      paddingLeft: "0px"
    }
  })
);


let followers =
  [
    {
      "uid": 3,
      "kakaotalkId": null,
      "naverId": null,
      "googleId": null,
      "facebookId": null,
      "email": "sysh5656@naver.com",
      "nickName": "JS"
    },
    {
      "uid": 3,
      "kakaotalkId": null,
      "naverId": null,
      "googleId": null,
      "facebookId": null,
      "email": "sysh5656@naver.com",
      "nickName": "JS"
    },
  ]

let followings =
  [
    {
      "uid": 3,
      "kakaotalkId": null,
      "naverId": null,
      "googleId": null,
      "facebookId": null,
      "email": "sysh5656@naver.com",
      "nickName": "JS"
    },
    {
      "uid": 3,
      "kakaotalkId": null,
      "naverId": null,
      "googleId": null,
      "facebookId": null,
      "email": "sysh5656@naver.com",
      "nickName": "JS"
    },
  ]

export default function MyFriends() {
  const classes = useStyles();
  return (
    <div className={classes.mrFriendsContainer}>
      <div className={classes.mrFriends}>
        
        <ul className={classes.ulCommon}>
        <h1 className={classes.mrFriendsHeader}>Followers</h1>
          {followers.map(follower => <Followers
            uid={follower.uid}
            kakaotalkId={follower.kakaotalkId}
            naverId={follower.naverId}
            googleId={follower.googleId}
            facebookId={follower.facebookId}
            email={follower.email}
            nickName={follower.nickName}
          />)}
        </ul>
      </div>
      <div className={classes.mrFriends}>
        <ul className={classes.ulCommon}>
        <h1 className={classes.mrFriendsHeader}>Followings</h1>
          {followings.map(following => <Followings
            uid={following.uid}
            kakaotalkId={following.kakaotalkId}
            naverId={following.naverId}
            googleId={following.googleId}
            facebookId={following.facebookId}
            email={following.email}
            nickName={following.nickName}
          />)}
        </ul>
      </div>
    </div>
  );
}