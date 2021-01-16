import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Items from './Items';
// import sampleData from './sampleData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      related: [],
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
          id: response.data._id,
          related: response.data.relatedItems.slice(0, 4),
          fromShop: response.data.shopItems.slice(0, 4),
        });
      });
  }

  render() {
    const { related, fromShop } = this.state;
    return (
      <div className="items"><Items fromShop={fromShop} related={related} /></div>
    );
  }
}

App.propTypes = {
  selectedItem: PropTypes.number,
};
export default App;
