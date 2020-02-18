import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

const useStyles =  makeStyles((theme: Theme) =>
createStyles({
  listContainer: {
    margin: "20px",
  },
  liContainer: {
    padding: "10px",
    borderTop: "solid 1px #ddd",
  },
  follow: {
    display: "inline-block",
    float: "right",
  },
})
);

interface Followings {
  uid: number,
  kakaotalkId: null,
  naverId: null,
  googleId: null,
  facebookId: null,
  email: string,
  nickName: string
}

export default function Followings(followings: Followings) {
  const classes = useStyles();
  const [followState, setFollowState] = React.useState(true);
  const follow = async () => {
    
  };

  const unfollow = async () => {
    
  };
  return (
    <div>
      <li className={classes.liContainer}>
        <Link>{followings.nickName}</Link>
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
      </li>
    </div>
  )
}