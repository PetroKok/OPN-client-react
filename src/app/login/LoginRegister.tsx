import  React from 'react';
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";

// import loginStatesConst, { ViewState } from '../../consts/loginViewStates'
// import { bindActionCreators, /*compose*/ } from "redux";
// import { withRouter } from "react-router";
// import { push } from "connected-react-router";
// import { menuOperations } from "../common/menu/duck";
import { pathsConst } from "../../consts";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { ConfigProps } from "redux-form";


interface ILoginProps {
  // initialView: ViewState,
  // pushRouter: any,
  // switchPage: any,
};

interface ILoginState {
  currentView: ViewState,
};



const getInitialState = (props:any):ILoginState => {
  const { match: { path } } = props;
  return {
    currentView: ( path === pathsConst.LOGIN
          ? LOGIN_STATE
          : ( path === pathsConst.REGISTER
              ? REGISTER_STATE
              : DEFAULT_STATE ))
  };
};

const LOGIN_STATE: ViewState = 'sign in';
const REGISTER_STATE: ViewState = 'register';
const DEFAULT_STATE: ViewState = 'default';

export type ViewState = 'sign in' | 'register' | 'default';

class LoginRegister extends React.Component<ILoginProps, ILoginState> {
// class LoginRegister extends React.Component<ConfigProps<ILoginProps, ILoginDispatchProps>, ILoginState> {


  state:ILoginState = getInitialState(this.props);

  switchState = (newState: ViewState) => {
    this.setState(state => ({
      ...state,
      currentView: newState,
    }));
  };

  render() {
    const { currentView } = getInitialState(this.props);
    return (
      <div className="login-register-wrapper">
        <span className="login-register-bread-cramps">{`Home / ${(currentView.toString()[0].toUpperCase() + currentView.toString().slice(1))}`}</span>
        <span className="login-register-title">{ currentView.toString().toUpperCase()}</span>
        <span className="login-register-notice-span-wrapper">
          <span className="login-register-notice-caption">
            Notice
          </span>
          To select a product and make an order, please
          <Link to={pathsConst.LOGIN}>
            <span className="login-register-action-info-text" onClick={() => this.switchState(LOGIN_STATE)}>Log in</span>
          </Link>
          using your
          username and password.
          If you are a new user,
          <Link to={pathsConst.REGISTER}>
            <span className="login-register-action-info-text" onClick={() => this.switchState(REGISTER_STATE)}>Sign up</span>
          </Link> to get authorization data.
        </span>
        {currentView === LOGIN_STATE && <LoginFormContainer />}
        {currentView === REGISTER_STATE && <RegisterFormContainer />}
      </div>
    );
  };
}
//
// interface ILoginDispatchProps {
//   pushRoute: any,
//   switchPage: any,
// }
//
// function mapDispatchToProps(dispatch):ILoginDispatchProps {
//   return bindActionCreators({
//     pushRoute: push,
//     switchPage: menuOperations.switchToPage,
//   }, dispatch);
// }


// const enhance = compose(
//   withRouter,
  // connect(null, mapDispatchToProps),
// );

// export default enhance(LoginRegister);
// export default connect(null, mapDispatchToProps)(LoginRegister);
export default LoginRegister;
