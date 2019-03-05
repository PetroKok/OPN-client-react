import  React from 'react';

import logo from '../assets/img/logo_opn.png';
import LoginPanel from "./LoginPanel";
import { loginSelectors } from "../../login/duck";
import { connect } from "react-redux";
import LogoutPanel from "./LogoutPanel";
import UserPanel from "./UserPanel";

function Header(props) {
    const { loginStatus } = props;
    return (
        <div className="header">
            <div className="title-wrapper">
                <img className="logo" src={logo} />
                <span className="title">The Best World Packaging Exchange Marketplace</span>
            </div>
          {!loginStatus && <LoginPanel />}
          {loginStatus && (<div className="header-panel-wrapper"> <UserPanel /> <LogoutPanel /> </div>)}
        </div>
    );
};


function mapStateToProps(state) {

  return {
    loginStatus: loginSelectors.getLoginStatus(state.login),
  };
}

export default connect(mapStateToProps, null)(Header);