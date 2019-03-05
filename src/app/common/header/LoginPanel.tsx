import  React from 'react';

import { LoginIcon, SignUpIcon } from '../../../consts/icons';
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { menuOperations } from "../menu/duck";
import { pathsConst } from "../../../consts";
import { Link } from "react-router-dom";

function LoginPanel(props) {
    return (
        <div className="login-wrapper">
            <LoginControl label="login" src={ LoginIcon } page={ pathsConst.LOGIN } { ...props } />
            <LoginControl label="sign up" src={ SignUpIcon } page={ pathsConst.REGISTER } { ...props } />
        </div>
    );
}

function LoginControl(props:any) {
  const { /*switchPage, pushRoute,*/ page, label, src } = props;
  return (
    <Link replace to={{
      pathname: page,
      state: { viewState: page },
    }}> <div className="login-btn-wrapper">
          { src() }
        <button className="login-btn">{label}</button>
      </div> </Link>);
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    pushRoute: push,
    switchPage: menuOperations.switchToPage,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPanel);