import React from "react";
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

export default function ReviewDetail() {
  const classes = useStyles();

  return (
    <Container fixed style={{ height: 1000 }}>
      <div style={{ height: 100 }}></div>
      <Box color="text.primary">
        <Link
          to="/reviewList"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <Typography className={classes.back}>&lt; ReviewList</Typography>
        </Link>
        <Typography className={classes.title}>제목 부분</Typography>
        <span>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-photo/beautiful-face-young-caucasian-woman-260nw-1550451308.jpg"
          />
        </span>
        <span style={{ fontSize: 24 }}>[ID(User)]</span>
        <br />
        <span style={{ fontSize: 24 }}>[작성 시간]</span>
        <span>
          <Typography className={classes.visit}>[방문자수]</Typography>
          <Typography className={classes.visit}>[좋아요수]</Typography>
          <FavoriteRoundedIcon className={classes.heart} />
          <Button
            variant="contained"
            color="primary"
            className={classes.follow}
          >
            팔로우
          </Button>
        </span>
        <Divider component="li" />
        <Box component="span" m={1}>
          <Typography className={classes.wine}>
            와인명 <Star></Star>
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
              내용 표시 부분
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
          <Typography
            className={classes.dividerFullWidth}
            color="initial"
            display="block"
            variant="caption"
          >
            댓글 표시 부분
          </Typography>
        </CardContent>
      </Card>
      <TextField style={{ width: "100%", marginTop: 20 }}>
        댓글 작성 창
      </TextField>

      <Button style={{ display: "inline-block", float: "right" }}>
        댓글 작성
      </Button>
    </Container>
  );
}
