import React from 'react';
import PropTypes from 'prop-types';
import IndividualItem from './IndividualItem';

const Items = ({ forYou, fromShop }) => (
  <div className="related-allItems">
    <div className="related-fromShopHeaderBar">
      <h3 className="related-fromShopHeader">More from this shop</h3>
      <button type="button" className="related-showMore">See more</button>
    </div>
    <div className="related-fromShop">
      {fromShop.slice(0, 4).map((item) => (
        <div className="related-hoverCard" key={`shop_${item._id}`}>
          <div className="related-shopIndividualItem">
            <IndividualItem
              item={item}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="related-HeaderBar">
      <h3 className="related-relatedHeader">You may also like</h3>
      <button type="button" className="related-showMore">See more</button>
    </div>
    <div className="related-items">
      {forYou.slice(0, 4).map((item) => (
        <div className="related-hoverCard" key={`related_${item._id}`}>
          <div className="related-relatedIndividualItem">
            <IndividualItem
              item={item}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

Items.propTypes = {
  forYou: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    seller: PropTypes.string,
    shippingStatus: PropTypes.string,
  })),
  fromShop: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    seller: PropTypes.string,
    shippingStatus: PropTypes.string,
  })),
};

Items.defaultProps = {
  forYou: [
    {
      tags: [''],
      price: null,
      imageUrl: '',
      description: '',
      details: [''],
      seller: '',
      shippingStatus: '',
    },
  ],
  fromShop: [
    {
      tags: [''],
      price: null,
      imageUrl: '',
      description: '',
      details: [''],
      seller: '',
      shippingStatus: '',
    },
  ],
};

export default Items;
