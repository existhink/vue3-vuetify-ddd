import moment from 'moment';

const useFile = () => {
  /**
   * @description Download File
   *
   * @param {File} blob
   * @param {Object} options
   * @return {void}
   */
  const file_download = (blob, options = {}) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    const fileName = `${options?.fileName}-${moment().format('DD-MM-YYYY HHmmss')}-${options?.subFileName ?? ''}.${
      options?.fileFormat
    }`;
    link.href = options?.withoutConvert ? blob : url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
  };

  return {
    file_download,
  };
};

export default useFile;
