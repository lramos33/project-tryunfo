import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validateNumberInputs = this.validateNumberInputs.bind(this);
    this.validateTextInputs = this.validateTextInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkTrunfo = this.checkTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  checkTrunfo = () => {
    const { deck } = this.state;
    const arrayToCheckTrunfo = deck.map((card) => card.cardTrunfo);
    if (arrayToCheckTrunfo.includes(true)) {
      this.setState({ hasTrunfo: true });
    }
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deck,
    } = this.state;

    const currentCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    deck.push(currentCard);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });

    this.checkTrunfo();
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // Motivo para a arrow function: https://pt-br.reactjs.org/docs/faq-state.html e https://stackoverflow.com/questions/34687091/can-i-execute-a-function-after-setstate-is-finished-updating
    this.setState({
      [name]: value,
    }, () => this.verifyButton());
  }

  validateTextInputs = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const minLength = 0;

    if (cardName.length <= minLength
      || cardDescription.length <= minLength
      || cardImage.length <= minLength
      || cardRare.length <= minLength
    ) {
      return false;
    }
    return true;
  }

  validateNumberInputs = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    const maxSumAttrValue = 210;
    const maxAttrValue = 90;
    const minAttrValue = 0;

    if (cardAttr1 > maxAttrValue
      || cardAttr2 > maxAttrValue
      || cardAttr3 > maxAttrValue) {
      return false;
    } if (cardAttr1 < minAttrValue
      || cardAttr2 < minAttrValue
      || cardAttr3 < minAttrValue) {
      return false;
    } if (cardAttr1 + cardAttr2 + cardAttr3 > maxSumAttrValue) {
      return false;
    }
    return true;
  }

  verifyButton = () => {
    const activeButton = this.validateNumberInputs() && this.validateTextInputs();
    this.setState({ isSaveButtonDisabled: !activeButton });
  }

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
      hasTrunfo,
      deck,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <hr />
        <h3>Carta Preview</h3>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <hr />
        <h3>Lista de cartas</h3>
        <div>
          { deck.map((card, index) => (
            <div key={ index }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </div>
          )) }
        </div>

      </div>
    );
  }
}

export default App;
