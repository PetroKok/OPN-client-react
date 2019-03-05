// Front
// {
//
// }

// Back
// {
//
// }

export default class User {
  // static fromAPI(data) {
  //   const model = { ...data };
  //   return model;
  // }
  //
  static toAPI(formName, formStructure) {
    const data = {
      Title: formName,
      FormDetails: { FormBody: JSON.stringify(formStructure.toJS()) },
    };
    return data;
  }
}
