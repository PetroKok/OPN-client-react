import  React from 'react';
import { Dispatch } from "redux";
import LoginForm, { IDispatchProps, ILoginFormData, ILoginOwnProps } from "../forms/LoginForm";
import { ConfigProps,   /*stopSubmit,*/ /*SubmissionError*/ } from "redux-form";
import { connect } from "react-redux";
// import { StyledFeedbackFormWrapper } from "../styled";
import { formNamesConst, pathsConst } from "../../../consts";
import { login } from '../../../api/actions/user';
import { push } from "connected-react-router";
import { menuOperations } from "../../common/menu/duck";
// import { loginOperations } from "../../login/duck";
// import RemoteSubmitButton from "./RemoteSubmitButton";
// import formNames from "../../../consts/formNames";
// import { postDataAction } from "../../../api/axios";
// import axios from 'axios';
// interface DummyFormContainerProps {} extends Pick<InjectedFormProps, "initialValues">;

const submitForm = (formValues, dispatch, formProps) => {
  console.log(formValues);
  return login(formValues)(dispatch)
  .then((response) => {
    // @ts-ignore
    dispatch(menuOperations.switchToPage('Main'));
    dispatch(push(pathsConst.MAIN));
  })
  .catch((error) => {
    if (!error || !error.data) return;
    const { error_message } = error.data;

    // dispatch(stopSubmit(formNamesConst.LOGIN_FORM,{
    // // @ts-ignore
    //     "password": error_message,
    // }));

    // works
    dispatch({
      type: "@@redux-form/UPDATE_SYNC_ERRORS",
      payload: {
        error: true,
        syncErrors: {
          password: error_message,
          _error: 'Login failed!'
        }
       },
      meta: { form: formNamesConst.LOGIN_FORM }
    });
  });
};

const LoginFormContainer:React.FC<ConfigProps<ILoginFormData, ILoginOwnProps>> = props => {
  return (
    /*foo={value}*/
    <LoginForm initialValues={props.initialValues}
           onSubmit={submitForm}
    />
    // <RemoteSubmitButton label="Login" formName={formNames.LoginForm} />
  );
};

function mapStateToProps(state: any, props: ILoginOwnProps): ConfigProps<ILoginFormData, ILoginOwnProps> {
  return {
    form: formNamesConst.LOGIN_FORM, // Form will be handled by Redux Form using this key
    initialValues: {
      // userId: state.somethere.userId // Can also be calculated using props
    },
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): IDispatchProps {
  return {
    onSubmit: (formData: ILoginFormData, dispatch: Dispatch<any>, props: ILoginOwnProps) => {
      console.log(formData);
      console.log(props);
    },

  };
};

export default connect<ConfigProps<ILoginFormData, ILoginOwnProps>>(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);