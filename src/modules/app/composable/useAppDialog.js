import { reactive } from 'vue';

const useAppDialog = () => {
  const dialog = reactive({
    options: {
      show: false,
      type: 'success',
      title: 'Dialog Title',
      desc: '',
      onOk: undefined,
      onCancel: undefined,
    },
  });

  const dialog_showDialog = (options = {}) => {
    dialog.options = {
      ...dialog.options,
      ...options,
      show: true,
    };
  };

  const dialog_closeDialog = (options = {}) => {
    dialog.options = {
      ...dialog.options,
      ...options,
      show: false,
    };
  };

  const dialog_setValue = (key, value) => {
    dialog.options[key] = value;
  };

  const dialog_setValues = (options = {}) => {
    dialog.options = {
      ...dialog.options,
      ...options,
    };
  };

  return {
    dialog,
    dialog_showDialog,
    dialog_closeDialog,
    dialog_setValue,
    dialog_setValues,
  };
};

export default useAppDialog;
