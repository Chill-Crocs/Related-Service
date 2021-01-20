import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Items from './Items';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forYou: [],
      fromShop: [],
    };

    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  getRelated() {
    const { selectedItem } = this.props;
    axios.get(`/api/relatedItems/${selectedItem}`)
      .then((response) => {
        this.setState({
          forYou: response.data.relatedItems,
          fromShop: response.data.shopItems,
        });
      });
  }

  render() {
    const { forYou, fromShop } = this.state;
    return (
      <div>
        <Header />
        <div className="items" data-testid="itemsHolder"><Items forYou={forYou} fromShop={fromShop} /></div>
      </div>
    );
  }
}

App.propTypes = {
  selectedItem: PropTypes.number,
};

App.defaultProps = {
  selectedItem: 0,
};

export default App;
