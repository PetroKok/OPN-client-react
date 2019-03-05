
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export default values => {
  console.log("validation fires here!");
  const errors = {};

  if (!values || !values.email) {
    errors["email"] = 'Email field is required';
  } else {
    const validEmail = email(values.email);
    if (validEmail)
      errors["email"] = validEmail;
  }

  if (!values || !values.password) {
    errors["password"] = 'Password field is required';
  }

  return errors;
};
