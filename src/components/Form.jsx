import React from 'react';
import PropTypes from 'prop-types';
import Input from './subcomponents/Input';
import TextArea from './subcomponents/TextArea';
import Select from './subcomponents/Select';
import Checkbox from './subcomponents/Checkbox';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          htmlText="Nome"
          type="text"
          name="card-name"
          dataTestId="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <TextArea
          htmlText="Descrição"
          name="card-description"
          dataTestId="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <Input
          htmlText="Attr1"
          type="number"
          name="card-attr1"
          dataTestId="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          htmlText="Attr2"
          type="number"
          name="card-attr2"
          dataTestId="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <Input
          htmlText="Attr3"
          type="number"
          name="card-attr3"
          dataTestId="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          htmlText="Imagem"
          type="text"
          name="card-image"
          dataTestId="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <Select
          htmlText="Raridade"
          name="card-rarity"
          dataTestId="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        />

        <Checkbox
          htmlText="Super Trybe Trunfo"
          type="checkbox"
          name="card-trunfo"
          dataTestId="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
