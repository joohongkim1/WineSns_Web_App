import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

interface IProps {
    isLoginPending: boolean;
    isLoginSuccess: boolean;
    loginError: string;
    login?(email: string, password: string): void;
    dispatch: Function;

  }
  
interface IState {
    nickName : string;
    email: string;
    password: string;
    errors : {
        name : string;
        nickName: string;
        email: string;
        password: string;
    }
    
  }

  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const validateForm = (errors : any) => {
    let valid = true;
    Object.values(errors).forEach(
      (val : any) => val.length > 0 && (valid = false)
    );
    return valid;
  }



class SignUp  extends  React.Component<IProps, IState> {
  constructor(props : IProps) {
    super(props);
    this.state = {
      nickName: '',
      email: '',
      password: '',
      errors: {
        name : '',
        nickName: '',
        email: '',
        password: '',
      }
    };
  }

  

  handleChange = (event : any) => {
    // event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'nickName': 
        errors.nickName = 
          value.length < 5
            ? 'Nickname must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

   // this.setState({errors, [name] : value});
  }

  handleSubmit = (event : any) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'> 
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='nickName'>
              <label htmlFor="nickName">Nickname</label>
              <input type='text' name='nickName' onChange={this.handleChange} />     {/* noValidate 삭제 */}
              {errors.nickName.length > 0 && 
                <span className='error'>{errors.nickName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange}  />     {/* noValidate 삭제 */}
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} /> {/* noValidate 삭제 */}
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state : IProps ) => {
    return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }

export default connect(mapStateToProps)(SignUp);