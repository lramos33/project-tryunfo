import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { htmlText, type, name, dataTestId, onChange, checked } = this.props;

    return (
      <div>
        <label htmlFor={ name }>{ htmlText }</label>
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          onChange={ onChange }
          checked={ checked }
        />
      </div>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  htmlText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
