import  React from 'react';
import { Dispatch } from "redux";
import FeedbackForm, { IDispatchProps, IFormData, IOwnProps } from "../forms/FeedbackForm";
import { ConfigProps } from "redux-form";
import { connect } from "react-redux";
import { formNamesConst } from "../../../../consts";


// interface DummyFormContainerProps {} extends Pick<InjectedFormProps, "initialValues">;

const submitForm = (formValues: object) => {
  // alert(formValues);
};

const FeedbackFormContainer: React.FC<ConfigProps<IFormData, IOwnProps>> = props => {
  return (
    /*foo={value}*/
    <div className="footer-feedback-form-wrapper">
      <FeedbackForm initialValues={props.initialValues}
        onSubmit={submitForm}
      />
    </div>
  );
};

function mapStateToProps(state: any, props: IOwnProps): ConfigProps<IFormData, IOwnProps> {
  return {
    form: formNamesConst.FEEDBACK_FORM, // Form will be handled by Redux Form using this key
    initialValues: {
      // userId: state.somethere.userId // Can also be calculated using props
    },
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): IDispatchProps {
  return {
    onSubmit: (formData: IFormData, dispatch: Dispatch<any>, props: IOwnProps) => {
      console.log(formData);
      console.log(props);
    },
  };
};

export default connect<ConfigProps<IFormData, IOwnProps>>(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackFormContainer);