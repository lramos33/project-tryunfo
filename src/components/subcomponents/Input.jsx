import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { htmlText, type, name, dataTestId, onChange, value } = this.props;

    return (
      <div>
        <label htmlFor={ name }>{ htmlText }</label>
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          onChange={ onChange }
          value={ value }
        />
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  htmlText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
