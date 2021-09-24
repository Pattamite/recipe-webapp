import { useState } from 'react';

/**
 * hook for input field.
 * @param {String} type - type of input field
 * @return {Object} object of input field hook
 */
function useField(type) {
  const [value, setValue] = useState('');

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
