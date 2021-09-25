import { useState } from 'react';

/**
 * hook for input field.
 * @param {String} type - type of input field
 * @param {Any} defaultValue - default value
 * @return {Object} object of input field hook
 */
function useField(type, defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
    setValue,
  };
}

export default useField;
