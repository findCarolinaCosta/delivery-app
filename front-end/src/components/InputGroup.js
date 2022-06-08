import React from 'react';
import PropTypes from 'prop-types';

function InputGroup({ label, type = 'text', name, onChange, dataTestid }) {
  return (
    <label htmlFor={ `${name}-input` }>
      <span>{label}</span>
      <br />
      <input
        type={ type }
        id={ `${name}-input` }
        name={ name }
        onChange={ onChange }
        data-testid={ dataTestid }
      />
    </label>
  );
}

InputGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
}.isRequired;

export default InputGroup;
