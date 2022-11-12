/**
 * generic functions to generate field error and initial values
 * should have the format of key value
 * fields : [{ name :'', label: "", required: true, type: '', autoFocus: true }] *
 * **/

export const generateFieldsErrorDefault = (formInputFields) => {
  return formInputFields.reduce((prev, field) => {
    const { name } = field;
    return { ...prev, [name]: { isValid: true, errMsg: "Please fill out this field." } };
  }, {});
};

export const generateFormInitialValues = (formInputFields) => {
  return formInputFields.reduce((prev, field) => {
    const { name } = field;
    return { ...prev, [name]: "" };
  }, {});
};