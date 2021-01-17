import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Items from './Items';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          related: response.data.relatedItems,
          fromShop: response.data.shopItems,
        });
      });
  }

  render() {
    const { related, fromShop } = this.state;
    return (
      <div className="items"><Items related={related} fromShop={fromShop} /></div>
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
