import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./login_style.css";

import { login, SNSLogin } from "../actions/login";
import { logout } from "../actions/login";
// import KakaoLogin from 'react-kakao-login';
import K from "react-kakao-login";
const KakaoLogin: any = K;

import GoogleLogin from "react-google-login";


interface IProps {
  isLoginPending: boolean;
  isLoginSuccess: boolean;
  loginError: string;
  login?(email: string, password: string): void;
  dispatch: Function;
}

class FormPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    console.log("this is props");
    console.log(props);
    console.log("this is login state");

    this.state = {
      id: "",
      provider: "",
      email: "",
      password: "",
      nickname: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

    constructor(props: IProps) {
        super(props);
        console.log("this is props");
        console.log(props);
        console.log("this is login state");
        
        this.state = {id : '', provider : '', email: '', password: '', nickname : ''};
      
        this.onSubmit = this.onSubmit.bind(this);
      }

      // Google Login
      responseGoogle = async (res : any) =>
      {
          console.log("success")
          console.log(res);
         
          console.log(res.googleId);
          this.setState({
              id: res.googleId,
              nickname : 'temp',
              provider: 'GOOGLE'
          })

          await this.props.dispatch(SNSLogin(this.state.id, this.state.nickname, this.state.provider));
       
      }
      // Kakao Login
      responseKakao = async (res : any) => {
          console.log(res);
          console.log(res.profile.id);
          console.log(res.profile.properties.nickname);
          this.setState({
              id: res.profile.id,
              nickname : res.profile.properties.nickname,
              provider: 'KAKAO'
          })


          await this.props.dispatch(SNSLogin(this.state.id, this.state.nickname, this.state.provider));
   
      }

    

      // Login Fail
      responseFail = (err : any) => {
          console.log("hey");
          console.log(err);
          console.error(err);
      }
      
     
      render() {
    
        
        let { email, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;

        if(!isLoginSuccess) {  
          console.log(sessionStorage.getItem("userInfo"));
       
  return (
    <div>
    <form name="form" onSubmit={this.onSubmit} className="login-form">
        <h1>Login</h1>

        <div className="txtb">
          <input type="email" disabled={isLoginPending} className="form-control" name="email" onChange={e => this.setState({ email: e.target.value })} value={email}></input>
          <span data-placeholder="Email"></span>
        </div>
        <div className="txtb">
          <input type="password" disabled={isLoginPending} className="form-control" name="password" onChange={e => this.setState({ password: e.target.value })} value={password}></input>
          <span data-placeholder="Password"></span>
        </div>

        <input type="submit" className="logbtn" value="Login" />

        <br />
        <div className="message">
            {isLoginPending && <div>Please wait...</div>}
    
              {
                (function() {
                  if (loginError=="login error") {
                    return (
                      <span>email 과 password를 확인해주세요.</span>
                    );
                  } 
              
                })()
              }
          </div>
          <div className="bottom-text">
        <a href="#">Forgot Password?</a>
        <a href="/signUp">Sign up</a>
        </div>
      );
    } else {
      return (
        // // const history = createBrowserHistory();
        // // history.push('/ranking');
        // //   //<h1>{sessionStorage.getItem("userInfo")}</h1>

     
    return ( 
// // const history = createBrowserHistory();
// // history.push('/ranking');
// //   //<h1>{sessionStorage.getItem("userInfo")}</h1>

      
    <div><pre></pre>Welcome To Dionysos</div>
  
    
    )

}

}

  async onSubmit(e : React.FormEvent<HTMLFormElement> ) {
     
        e.preventDefault();
        let { email, password } = this.state;
        console.log("start");
        await this.props.dispatch(login(email, password));
        console.log("end");
        console.log(this.props);
    }
    
}

  async onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let { email, password } = this.state;
    console.log("start");
    await this.props.dispatch(login(email, password));
    console.log("end");
    console.log(this.props);
  }
}


 
export default connect(mapStateToProps)(FormPage);