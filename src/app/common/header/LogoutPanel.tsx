import  React from 'react';

import {  LogoutIcon } from "../../../consts/icons";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { menuOperations } from "../menu/duck";
import { pathsConst } from "../../../consts";
import { loginOperations } from "../../login/duck";

function LogoutPanel(props) {
    return (
        <div className="login-wrapper">
            <LogoutControl label="log out" src={ LogoutIcon } page={ pathsConst.MAIN } { ...props } />
        </div>
    );
}

function LogoutControl(props:any) {
  const { switchPage, pushRoute, logout, page, label, src } = props;
  return (
    <div className="login-btn-wrapper" onClick={() => { logout(), switchPage(page), pushRoute(page) }}>
        <button className="logout-btn">{label}</button>
          { src() }
    </div>);
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    pushRoute: push,
    logout: loginOperations.userLogout,
    switchPage: menuOperations.switchToPage,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogoutPanel);