import  React from 'react';
import { Dispatch } from "redux";
import RegisterForm, { IDispatchProps, IRegisterFormData, IRegisterOwnProps } from "../forms/RegisterForm";
import { ConfigProps } from "redux-form";
import { connect } from "react-redux";
// import { StyledFeedbackFormWrapper } from "../styled";
import { formNamesConst, pathsConst } from "../../../consts";
import { register } from "../../../api/actions/user";
import { push } from "connected-react-router";
import { menuOperations } from "../../common/menu/duck";
// import { registerUser } from "../../../backend/actions/user";


// interface DummyFormContainerProps {} extends Pick<InjectedFormProps, "initialValues">;

const submitForm = (formValues, dispatch, formProps) => {
  // alert(formValues);
  // registerUser({ ...formValues });
  register(formValues)(dispatch)
    .then(function (response) {
      // @ts-ignore
      dispatch(menuOperations.switchToPage('Main'));
      dispatch(push(pathsConst.MAIN));
    })
    .catch(function (error) {
      const { error_message } = error.data;
      // works
      dispatch({
        type: "@@redux-form/UPDATE_SYNC_ERRORS",
        payload: {
          error: true,
          syncErrors: {
            password: error_message,
            _error: 'Register failed!'
          }
        },
        meta: { form: formNamesConst.REGISTER_FORM }
      });
    });
};

const FeedbackFormContainer: React.FC<ConfigProps<IRegisterFormData, IRegisterOwnProps>> = props => {
  return (
    /*foo={value}*/
    //{/*<StyledFeedbackFormWrapper>*/}
      <RegisterForm initialValues={props.initialValues}
        onSubmit={submitForm}
      />
    // </StyledFeedbackFormWrapper>
  );
};

function mapStateToProps(state: any, props: IRegisterOwnProps): ConfigProps<IRegisterFormData, IRegisterOwnProps> {
  return {
    form: formNamesConst.REGISTER_FORM, // Form will be handled by Redux Form using this key
    initialValues: {
      // userId: state.somethere.userId // Can also be calculated using props
    },
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): IDispatchProps {
  return {
    onSubmit: (formData: IRegisterFormData, dispatch: Dispatch<any>, props: IRegisterOwnProps) => {
      console.log(formData);
      console.log(props);
    },
  };
};

export default connect<ConfigProps<IRegisterFormData, IRegisterOwnProps>>(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackFormContainer);