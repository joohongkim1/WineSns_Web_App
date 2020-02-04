import React from "react";
import { connect } from 'react-redux';
import "./login_style.css";

import { login } from '../actions/login'
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';


interface IProps {
    isLoginPending: boolean;
    isLoginSuccess: boolean;
    loginError: string;
    login?(email: string, password: string): void;
    dispatch: Function;
  }
  
  interface IState {
    id : string;
    provider: string;
    email: string;
    password: string;
  }



class FormPage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
    
        super(props);
        this.state = {id : '', provider : '', email: '', password: ''};
        this.onSubmit = this.onSubmit.bind(this);
      }


      
      // Google Login
      responseGoogle = (res : any) =>
      {
          console.log(res);
          console.log(res.googleId);
          this.setState({
              id: res.googleId,
              provider: 'google'
          })
      }
      // Kakao Login
      responseKakao = (res : any) => {
          console.log(res.profile.id);
          this.setState({
              id: res.profile.id,
              provider: 'kakao'
          })
      }
      // Login Fail
      responseFail = (err : any) => {
          console.error(err);
      }
      
      render() {

        
        let { email, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
       

        if(!sessionStorage.getItem("userInfo") && !isLoginSuccess) {  
        
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
        <GoogleLogin
                    clientId="605769507433-205lj47uj46v02ucrpvbgpck6n2mmed6.apps.googleusercontent.com"
                    render={(props) => <a className="login100-social-item bg3" onClick={props.onClick}><i className="fa fa-google"></i></a>}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
               
              {/* <KakaoLogin
                    jsKey="d507ecdb10512afbd7bfbf2d5a9f788a"
                    render={(props : any) => <div onClick={props.onClick}>Kakao Login</div>}
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    throughTalk={true} // If true, Open Kakao Talk instead of new browser tab
                    getProfile={true}
                /> */}
      </form>
    
      </div>



  );
    } else {


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
        
        await this.props.dispatch(login(email, password));

    }
}

const mapStateToProps = (state : IProps ) => {
    return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
    };
}

export default connect(mapStateToProps)(FormPage);