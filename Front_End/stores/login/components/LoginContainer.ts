// import * as React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
// import Login from '../components/FormPage';
// import Reducer from '../reducers/login_reducer';
// import loginActions from '../actions/login';

// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = ReturnType<typeof mapDispatchToProps>;


// type LoginContainerProps = StateProps & DispatchProps;

// class LoginContainer extends React.Component<LoginContainerProps> {

//   public render() {
//     return (
//       <Login
//         value={this.props.value} 
//         />
//         // onIncrease={this.handleIncrease}
//         // onDecrease={this.handleDecrease}
      
//     );
//   }
// }

// const mapStateToProps =  ({ counter }: loginActions.actions) => ({
//     SET_LOGIN_PENDING: 'SET_LOGIN_PENDING',
//     SET_LOGIN_SUCCESS: 'SET_LOGIN_SUCCESS',
//     SET_LOGIN_ERROR: 'SET_LOGIN_ERROR'
// });


// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   CounterActions: bindActionCreators(loginActions, dispatch),
// });

// export default connect<StateProps, DispatchProps, OwnProps>(
//   mapStateToProps,
//   mapDispatchToProps,
// )(LoginContainer);