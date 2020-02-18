import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { connect } from "react-redux";
import {
  register,
  emailCheck,
  SNSRegister
} from "../../../stores/register/actions/register";
import K from "react-kakao-login";
const KakaoLogin: any = K;

import GoogleLogin from "react-google-login";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../../stores/login/store";

import { bindActionCreators, Dispatch } from "redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.grey[900]
          : theme.palette.grey[50],
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    check: {
      marginLeft: "38%",
      margin: theme.spacing(3, 0, 2)
    },
    font: {
      color: "black"
    }
  })
);



function MyAccount() {
  const classes = useStyles();

  const dispatch = useDispatch();
  //  const [state, setState] = useState(nickname : state.RegistUser.nickname, );
  // const {
  //   isRegisterPending,
  //   isRegisterSuccess,
  //   registerError,
  //   emailState
  // } = useSelector((state: rootState) => state.registerReducer);

  const [state, setState] = useState( { email : '', password : '', provider : '', id : ''});
  const {
    isRegisterPending,
    isRegisterSuccess,
    registerError,
    emailState
  } = useSelector((state: rootState) => state.registerReducer);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { email, password } = state;

    console.log("hey");
    // await dispatch(register(state.email, state.password));

    console.log();
  };

  
  // Login Fail
  const responseFail = (err: any) => {
    console.log("hey");
    console.log(err);
    console.error(err);
  };

  const onEmailCheck = async () => {
    console.log("email");
    console.log(state.email);
    await dispatch(emailCheck(state.email));

    console.log("email State");

  };

  
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              My Account
            </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nickname"
                label="nickname"
                name="nickname"
                autoComplete="nickname"
                autoFocus
                value= {sessionStorage.getItem('userInfo')}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e =>
                  setState({
                    email: e.target.value,
                    password: state.password,
                    id: "",
                    provider: ""
                  })
                }
                value={state.email}
              />
              <Button
                variant="outlined"
                color="primary"
                className={classes.check}
                onClick={onEmailCheck}
              >
                Email 중복 체크
              </Button>
              {(function() {
                if (emailState != "not yet") {
                  return (
                    <Typography style={{ fontSize : '18px', display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'}}>{emailState}
                    </Typography>
                  );
                }
              })()}
              <TextField
                variant="outlined"
                required
                fullWidth
                className={classes.font}
                name="비밀번호"
                label="비밀번호"
                type="password"
                id="password"
                // value={password}
                // onChange={handlePassword}
                onChange={e =>
                  setState({
                    email: state.email,
                    password: e.target.value,
                    id: "",
                    provider: ""
                  })
                }
                value={state.password}
                placeholder="영어 대/소문자, 숫자, @ 조합 6~20자"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="message">
            {/* {isRegisterPending && <div>Please wait...</div>}

            {function() {
              if (registerError == "register error") {
                return <span>입력하신 정보로 수정 하실 수 없습니다.</span>;
              }

              if (isRegisterSuccess) {
                return (
                  <div>
                    <span>정보 수정 완료</span>;
                  </div>
                );
              } */}
            
          </div>
        </Grid>
      </Grid>
    );
  // } else {
  //   // 회원가입이 성공했을 때!!
  //   // return <Redirect to="/ranking" />;
  //   // 여기서 /ranking 으로 바로 넘어가게 만들어주세요!
  // }
}




export default MyAccount;

