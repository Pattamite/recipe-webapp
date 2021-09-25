/** Try parsing string to int, return defaultValue if failed
 * @param {String} string - string to parse
 * @param {Int} defaultValue - default value if parsing failed
 * @return {Int} parsed value
*/
function tryParseInt(string, defaultValue) {
  let parsedValue = parseInt(string);
  if (isNaN(parsedValue)) {
    parsedValue = defaultValue;
  }

  return parsedValue;
}

/** Try parsing string to float, return defaultValue if failed
 * @param {String} string - string to parse
 * @param {Float} defaultValue - default value if parsing failed
 * @return {Float} parsed value
*/
function tryParseFloat(string, defaultValue) {
  let parsedValue = parseFloat(string);
  if (isNaN(parsedValue)) {
    parsedValue = defaultValue;
  }

  return parsedValue;
}

const helper = {
  tryParseInt,
  tryParseFloat,
};

export default helper;
