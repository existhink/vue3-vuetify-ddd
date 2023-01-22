// Import localization

export const useBindStateForm = placeholder => {
  return {
    solo: true,
    flat: true,
    placeholder,
    class: 'custom-textfield font-weight-bold font-inter',
    hideDetails: 'auto',
    autocomplete: 'new-password',
  };
};

export const useListenerForm = (validations, formName) => {
  return {
    input: validations[formName].$touch,
    blur: validations[formName].$touch,
  };
};
