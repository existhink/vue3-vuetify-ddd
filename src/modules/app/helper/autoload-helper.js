/**
 *
 * @param replacements
 * @example url/{id} => "string".params({ id: 1 })
 * @returns {string}
 */
String.prototype.params = function (replacements = {}) {
  return this.replace(
    /{\w+}/g,
    placeholder => replacements[placeholder.substring(1, placeholder.length - 1)] || placeholder,
  );
};
