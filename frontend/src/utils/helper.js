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

/**
   * Get difficulty text
   * @param {Int} difficulty - component arguments
   * @return {String} difficulty text
   */
function getDifficultyText(difficulty) {
  switch (difficulty) {
  case 1:
    return 'Very easy';
  case 2:
    return 'Easy';
  case 3:
    return 'Medium';
  case 4:
    return 'Hard';
  case 5:
    return 'Very hard';
  default:
    return 'Not specified';
  }
}

const helper = {
  tryParseInt,
  tryParseFloat,
  getDifficultyText,
};

export default helper;
