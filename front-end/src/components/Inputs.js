import PropTypes from 'prop-types';
import React from 'react';

function Inputs(props) {
  const { data, value, handler } = props;

  return (
    <label htmlFor={ data.id }>
      { data.role }
      <input
        id={ data.id }
        placeholder={ data.placeholder }
        data-testid={ data.testId }
        value={ value }
        onChange={ (event) => handler(event) }
      />
    </label>
  );
}

Inputs.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    placeholder: PropTypes.string,
    role: PropTypes.string,
    testId: PropTypes.string,
  }).isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Inputs;
