import { ref } from 'vue';

const useAppDialog = () => {
  const dialog = ref({
    show: false,
    type: 'success',
    title: '',
    desc: '',
    onOk: undefined, // Optional, better directly from component
    onCancel: undefined, // Optional, better directly from component
  });

  const dialog_setValue = (key, value) => {
    dialog.value[key] = value;
  };

  const dialog_setValues = (options = {}) => {
    dialog.value = {
      ...dialog.value,
      ...options,
    };
  };

  const dialog_showDialog = (options = {}) => {
    dialog_setValues({
      ...options,
      show: true,
    });
  };

  const dialog_closeDialog = (options = {}) => {
    dialog_setValues({
      ...options,
      show: false,
    });
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
