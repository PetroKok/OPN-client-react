import { connect } from 'react-redux';
import { submit } from 'redux-form';
import React from "react";
import CommonFlatBtn from "../../common/CommonFlatBtn";


const RemoteSubmitButton = ({dispatch, submitting, label, formName}) => (
  <CommonFlatBtn className="login-form-button"
                       type="button"
                       disabled={submitting}
                       onClick={()=> dispatch(submit(formName))}
                        >{label}</CommonFlatBtn>
);

export default connect()(RemoteSubmitButton)
