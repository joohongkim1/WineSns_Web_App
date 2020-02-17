import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Typography, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Star from "../Star";
import CommentIcon from "@material-ui/icons/Comment";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { withRouter, RouteComponentProps } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import FavoriteIcon from "@material-ui/icons/Favorite";
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../stores/login/store';
import { getFeedDetailByFID, postComment, followUserByUID, UnfollowUserByUID, createFeedLike, deleteFeedLike } from '../../../../stores/feed/actions/feedDetail';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },

    back: {
      fontSize: 24
    },
    title: {
      fontSize: 48,
      padding: 48,
      textAlign: "center"
    },
    dividerFullWidth: {
      fontSize: 24,
      marginTop: 50
    },
    avatar: {
      display: "inline-block"
    },
    follow: {
      display: "inline-block",
      float: "right"
    },
    visit: {
      display: "inline-block",
      float: "right",
      marginLeft: 30
    },
    wine: {
      fontSize: 24,
      marginTop: 32,
      marginBottom: 32
    },
    star: {
      position: "relative",
      display: "inline",
      float: "right"
    },
    divider: {
      width: 400
    },
    commentIcon: {
      display: "inline-block",
      marginTop: 40
    },
    heart: {
      display: "inline-block",
      float: "right"
    }
  })
);

interface RouterProps { // type for `match.params`
  fid: string; // must be type `string` since value comes from the URL
}
interface MyComponentProps extends RouteComponentProps<RouterProps> {
  fid: number;
}
export default function ReviewDetail(props: MyComponentProps) {
  const classes = useStyles();
  const fid = +(props.match.params.fid);

  const [feedState, setFeedState] = React.useState(false);
  const { feedDetail, isFeedDetailError, commentList, isFeedDetailSucceess, isFeedDetailPending} = useSelector(
    (state: rootState) => state.FeedDetailReducer
  );

  const [likeState, setLikeState] = React.useState(false);
  const [followState, setFollowState] = React.useState(false);

  const[comment, setComment] = useState('');

  const dispatch = useDispatch();

  const userComment = async () => {
    await dispatch(postComment(comment, fid));
  };

  const follow = async () => {
    await dispatch(followUserByUID(feedDetail.user.uid));
    setFollowState(true);
  };

  const unfollow = async () => {
    await dispatch(UnfollowUserByUID(feedDetail.user.uid));
    setFollowState(false);
  };

  const likeThis = async () => {
     await dispatch(createFeedLike(fid));
    setLikeState(true);
  };

  const hateThis = async () => {
   await dispatch(deleteFeedLike(fid));
    setLikeState(false);
  };



  if (!feedState) {
    dispatch(getFeedDetailByFID(fid));
    setFeedState(true);

    
    let userLikeFeed = JSON.parse(sessionStorage.getItem('userLikeFeed') || '{}');


    for (var i = 0; i < userLikeFeed.length; i++) {
      if (userLikeFeed[i].fid == fid) {
        setLikeState(true)
        break
      }
    }
  } else {
    console.log("코멘트들")
    console.log(feedDetail);
  }
  return (

    <Container fixed style={{ height: 1000 }}>
      <div style={{ height: 100 }}></div>
      <Box color="text.primary">
        <Link
          to="/wineReview"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <Typography className={classes.back}>&lt; ReviewList</Typography>
        </Link>
        <Typography className={classes.title}>{feedDetail.title}</Typography>
        <span>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-photo/beautiful-face-young-caucasian-woman-260nw-1550451308.jpg"
          />
        </span>
  <span style={{ fontSize: 24 }}>작성자 {feedDetail.user.nickName}</span>
        <br />
        {/* <span style={{ fontSize: 24 }}>[작성 시간]</span> */}
        <span>
          <Typography className={classes.visit}>[방문자수] {feedDetail.visit}</Typography>
          <Typography className={classes.visit}>[좋아요수] {feedDetail.likeNum}</Typography>
          {(function () {

if (likeState) {

  return (
    <IconButton aria-label="add to favorites" onClick={hateThis}>
      <FavoriteIcon color="secondary" />

    </IconButton>
  )
} else {
  return (

    <IconButton aria-label="add to favorites" onClick={likeThis}>
      <FavoriteIcon color="inherit" />
    </IconButton>
  );
}
})()}
          {(function() {
                if (!followState) {
                  return(
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.follow} onClick={follow}
                  >
                    팔로우
                  </Button>
                  );
                } else {
                  return(
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.follow} onClick={unfollow}
                  >
                    팔로우취소
                  </Button>
                  );
                }
              })()}
         
        </span>
        <Divider component="li" />
        <Box component="span" m={1}>
          <Typography className={classes.wine}>
            {feedDetail.wine.nameKor} <Star></Star>
          </Typography>
          {/* <span className={classes.star}>별점:</span> */}
        </Box>
        <Divider className={classes.divider} />

        <Card variant="outlined">
          <CardContent>
            <Typography
              className={classes.dividerFullWidth}
              color="initial"
              display="block"
              variant="caption"
            >
              {feedDetail.content}
            </Typography>
          </CardContent>
        </Card>
        <CommentIcon className={classes.commentIcon} />
        <Typography className={classes.commentIcon}>
          {" "}
          댓글 [댓글 숫자 표시]
        </Typography>
    

      </Box>
      <Divider component="li" />
      <Card variant="outlined" style={{ marginTop: 40 }}>
        <CardContent>
        {commentList.map((comment: any) => (
   
          <Typography
            className={classes.dividerFullWidth}
            color="initial"
            display="block"
            variant="caption"
          >
            {comment.content} 작성자 : {comment.user.nickName} : {comment.createdTimeAt}
          </Typography>
          ))}
        </CardContent>
      </Card>

      <TextField style={{ width: "100%", marginTop: 20 }}onChange={e =>
                                                                    setComment(e.target.value)
                                                                  }
                                                                  value={comment}>
        댓글 작성 창
      </TextField>

      <Button style={{ display: "inline-block", float: "right" }} onClick={userComment}>
        댓글 작성
      </Button>

    </Container>
  );
}
