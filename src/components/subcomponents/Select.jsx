import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { htmlText, name, dataTestId, onChange, value } = this.props;

    return (
      <div>
        <label htmlFor={ name }>{ htmlText }</label>
        <select
          name={ name }
          data-testid={ dataTestId }
          onChange={ onChange }
          value={ value }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  htmlText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
