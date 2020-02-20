import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Followers from './Followers';
import Followings from './Followings';
import Container from "@material-ui/core/Container";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../stores/login/store';
import { UnfollowUserByUID, getUserFollowList, setUserFollowPending } from '../../../../stores/my_sns/actions/follow';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mrFriendsContainer: {
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
    },
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
    }, divider: {
      backgroundColor: "#36342f",
      marginBottom: "80px"
    },
  })
);


export default function MyFriends() {
  const classes = useStyles();

  const dispatch = useDispatch();
  //  const [state, setState] = useState(nickname : state.RegistUser.nickname, );
  const { follow, follower, isUserFollowError, isUserFollowSucceess, isUserFoolowPending } = useSelector(
    (state: rootState) => state.FollowReducer
  );

  const [followState, setFollowState] = React.useState(false);

  const loadFollowList = async () => {
    console.log("onReviewList");
    await dispatch(getUserFollowList());
  };

  const unfollow = async (uid: number) => {
    await dispatch(UnfollowUserByUID(uid));
    loadFollowList();
  };

  if (!followState) {
    loadFollowList();
    setFollowState(true);
  } else {

  }

  return (
    <div>
      <Container>
        <div className={classes.mrFriendsContainer}>
          <div style={{ fontWeight: "bold", fontSize: "36px" }}>My Friends</div>
          <Divider variant="middle" className={classes.divider} />
          <div className={classes.mrFriends}>
            {(function () {

              if (follower.length > 0) {
                return (
                  <ul className={classes.ulCommon}>

                    <h1 className={classes.mrFriendsHeader}>Followers</h1>
                    {follower.map(follower => (<Followers
                      key={follower.uid}
                      uid={follower.uid}
                      email={follower.email}
                      nickName={follower.nickName}
                    />))}
                  </ul>
                );
              } else {
                return (
                  <ul>
                    <h1 className={classes.mrFriendsHeader}>Followers</h1>
                    <div>팔로우한 유저가 없습니다.</div>
                  </ul>
                );
              }
            })()}
          </div>
          <div className={classes.mrFriends}>
            {(function () {

              if (follow.length > 0) {
                return (
                  <ul className={classes.ulCommon}>
                    <h1 className={classes.mrFriendsHeader}>Followings</h1>
                    {follow.map(following => (
                      <div key={following.uid}>
                        <li key={following.uid} className={classes.liContainer}>
                          <Link
                            to={`/friend/${following.uid}`}
                            style={{ textDecoration: "none" }}
                          >  {following.nickName}</Link>


                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.follow} onClick={() => unfollow(following.uid)}
                          >
                            팔로우취소
                           </Button>

                        </li>
                      </div>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <ul>
                    <h1 className={classes.mrFriendsHeader}>Followers</h1>
                    <div>팔로잉한 유저가 없습니다.</div>
                  </ul>
                );
              }
            })()}
          </div>
        </div>
      </Container>
    </div>
  );
}