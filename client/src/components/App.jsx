import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Items from './Items';
import Header from './Header';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forYou: [],
      fromShop: [],
      show: false,
      currentItemId: null,
      currentItemLoc: '',
    };

    this.getRelated = this.getRelated.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  closeModal() {
    this.setState({
      show: false,
    });
  }

  openModal(id, loc) {
    this.setState({
      show: true,
      currentItemId: Number(id),
      currentItemLoc: loc,
    });
  }

  render() {
    const {
      forYou, fromShop, show, currentItemId, currentItemLoc,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="items" data-testid="itemsHolder"><Items forYou={forYou} fromShop={fromShop} openModal={this.openModal} /></div>
        <div data-testid="modalHolder"><Modal show={show} closeModal={this.closeModal} item={currentItemLoc === 'shop' ? fromShop.filter((item) => item._id === currentItemId) : forYou.filter((item) => item._id === currentItemId)} /></div>
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
