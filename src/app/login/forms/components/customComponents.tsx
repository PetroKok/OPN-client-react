import React from 'react';

export const renderInputField = (props) => {
  const { input, type, placeholder, label, meta: { touched, error, warning }} = props;
  return (
    <div className="customFieldWrapper">
      {label && <label className="labelField">{ label }</label>}
      <div className="wrapperField">
        <input className="inputField" { ...input } type={ type } placeholder={ placeholder } novalidate />
        {touched && ((error && <span className="errorField">{ error }</span>)
          || (warning && <span className="warningField">{warning}</span>))}
      </div>
    </div>);
};

export const renderSelectField = (props) => {
  const { input, type, placeholder, children, label, meta: { touched, error, warning }} = props;
  console.log('props');
  console.log(props);
  return (
    <div className="customFieldWrapper">
      {label && <label className="labelField">{ label }</label>}
      <div className="wrapperField">
        <select className="selectField" {...input} type={type} placeholder={placeholder}>
          { children }
        </select>
        {touched && ((error && <span className="errorField">{ error }</span>)
          || (warning && <span className="warningField">{warning}</span>))}
      </div>
    </div>);
};

export default {};