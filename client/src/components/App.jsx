import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Items from './Items';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentId: null,
      related: [],
      fromShop: [],
    };

    this.getRelated = this.getRelated.bind(this);
    // this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  getRelated() {
    const { selectedItem } = this.props;
    axios.get(`/api/relatedItems/${selectedItem}`)
      .then((response) => {
        this.setState({
          parentId: response.data._id,
          related: response.data.relatedItems,
          fromShop: response.data.shopItems,
        });
      });
  }

  // toggleFavorite(favoriteId, currentState) {
  //   const { parentId } = this.state;
  //   axios.patch(`/api/relatedItems/${parentId}/${favoriteId}`)
  //     .then((response) => {
  //       console.log(`this is a test: ${response}`);
  //     });
  // }

  render() {
    const { related, fromShop, toggleFavorite } = this.state;
    return (
      <div>
        <Header />
        <div className="items"><Items related={related} fromShop={fromShop} /></div>
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
