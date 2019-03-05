import  React from 'react';

import { connect } from "react-redux";
import { loginSelectors } from "../../login/duck";

function UserPanel(props) {
    const { companyName } = props;
    return (
        <div className="login-wrapper">
          <label className="logined-label-wrapper">Your company:</label>
          <label className="logined-user-label-wrapper" >{companyName}</label>
        </div>
    );
}

function mapStateToProps(state) {
  return {
    companyName: loginSelectors.getCompanyName(state.login),
  };
}


export default connect(mapStateToProps, null)(UserPanel);