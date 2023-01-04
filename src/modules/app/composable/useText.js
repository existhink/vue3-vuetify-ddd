import { defaultCurrencyOptions } from '../constants/useText.constant';

/**
 * @description Handle Capitalize Text
 * @param {String} keywords
 * @return {String}
 */
export const useCapitalize = keywords => {
  let capitalized = [];

  keywords.split(' ').forEach(word => {
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });

  return capitalized.join(' ');
};

/**
 * @description Handle Format Currency
 * @param {Number} value
 * @param {Object} options
 * @return {String}
 */
export const useCurrencyFormat = (data, options = defaultCurrencyOptions) => {
  return new Intl.NumberFormat('id-ID', options).format(data);
};

/**
 * @description Handle Parse String HTML to Text
 * @param {String} keywords
 * @return {String}
 */
export const parseStringHtmlToText = keywords => {
  return new DOMParser().parseFromString(keywords, 'text/html').body.textContent || '';
};

/**
 * @description Handle Remove Special Character
 * @param {String} keywords
 * @return {String}
 */
export const removeSpecialCharacter = keywords => {
  return keywords.replace(/[^a-zA-Z0-9 ]/g, '');
};

/**
 * @description Handle Remove Space
 * @param {String} keywords
 * @return {String}
 */
export const removeSpace = keywords => {
  return keywords.replace(/\s/g, '');
};
