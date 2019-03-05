import  React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Dispatch } from "redux";
import { formNamesConst } from "../../../consts";
// import { StyledCommonFlatBtn } from "../../common/styled";
import { loginValidators } from "../validators";
import { renderInputField } from "./components/customComponents";
import CommonFlatBtn from "../../common/CommonFlatBtn";

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginOwnProps {
  // foo: string;
}

export interface IDispatchProps {
  onSubmit: (data: ILoginFormData, dispatch: Dispatch<any>, props: ILoginOwnProps) => void;
  // loginUser: (user: object) => {type: string, request: { url:string, props?:any }}
}

type AllSampleFormProps = ILoginOwnProps & IDispatchProps & InjectedFormProps<ILoginFormData, ILoginOwnProps>;


let LoginForm: React.FC<AllSampleFormProps> = props => {
  const { /*pristine,*/submitting,/* reset, */ handleSubmit } = props;
  return (
      <form onSubmit={ handleSubmit }>
        {/*<Field name="email" placeholder="Email" component="input" type="email" />*/}
        <Field name="email" placeholder="Email" component={renderInputField} type="email" />
        {/*<Field name="password" placeholder="Password" component="input" type="password" />*/}
        <Field name="password" placeholder="Password" component={renderInputField} type="password" />
        <a>Forgot your password?</a>
        {/*{<StyledCommonFlatBtn style={{ width: 200, height: 30 }}*/}
        {<CommonFlatBtn className="login-form-button"
                             type="submit"
                             disabled={submitting}>Login</CommonFlatBtn>}
        {/*disabled={pristine || submitting}>Login</StyledCommonFlatBtn>*/}
      </form>
    );
};

export default reduxForm<ILoginFormData, ILoginOwnProps>({
  form: formNamesConst.LOGIN_FORM,
  validate: loginValidators,
})(LoginForm);