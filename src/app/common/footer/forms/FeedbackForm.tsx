import  React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Dispatch } from "redux";
import { formNamesConst } from "../../../../consts";
import CommonBtn from "../../CommonBtn";


export interface IFormData {
  contactName: string;
  companyName: string;
  email: string;
  message: string;
}

export interface IOwnProps {
  // foo: string;
}

export interface IDispatchProps {
  onSubmit: (data: IFormData, dispatch: Dispatch<any>, props: IOwnProps) => void;
}

type AllSampleFormProps = IOwnProps & IDispatchProps & InjectedFormProps<IFormData, IOwnProps>;


let FeedbackForm: React.FC<AllSampleFormProps> = props => {
  const { pristine, submitting/*, reset*/, handleSubmit } = props;
  return (
      <form onSubmit={handleSubmit}>
        <div className="footer-feedback-sub-form-wrapper">
          <div className="footer-feedback-form-field-wrapper">
            <label className="footer-feedback-form-field-label" htmlFor="contactName">Name</label>
            <Field name="contactName" component="input" type="text" />
          </div>
          <div className="footer-feedback-form-field-wrapper">
            <label className="footer-feedback-form-field-label" htmlFor="companyName">Company</label>
            <Field name="companyName" component="input" type="text" />
          </div>
          <div className="footer-feedback-form-field-wrapper">
            <label className="footer-feedback-form-field-label" htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
        </div>
        <div className="footer-feedback-sub-form-wrapper">
          <div className="footer-feedback-form-field-wrapper">
            <Field name="message" placeholder="message" component="textarea" type="text"/>
          </div>
          <CommonBtn className="feedback-form-button" type="submit" disabled={pristine || submitting}>SEND</CommonBtn>
        </div>
      </form>
    );
};

export default reduxForm<IFormData, IOwnProps>({form: formNamesConst.FEEDBACK_FORM })(FeedbackForm);