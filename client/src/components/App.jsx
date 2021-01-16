import React from 'react';
import Items from './Items';
import sampleData from './sampleData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: sampleData._id,
      related: sampleData.relatedItems,
      fromShop: sampleData.shopItems,
    };
  }

  render() {
    const { related, fromShop } = this.state;
    return (
      <div><Items fromShop={fromShop} related={related} /></div>
    );
  }
}

export default App;
