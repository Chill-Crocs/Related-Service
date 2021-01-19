import React from 'react';
import PropTypes from 'prop-types';
import IndividualItem from './IndividualItem';

const Items = (props) => {
  const { related, fromShop, toggleFavorite } = props;

  return (
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
                toggleFavorite={toggleFavorite}
                shop="shopItems"
                itemFavorite={false}
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
        {related.slice(0, 4).map((item) => (
          <div className="related-hoverCard" key={`related_${item._id}`}>
            <div className="related-relatedIndividualItem">
              <IndividualItem
                item={item}
                toggleFavorite={toggleFavorite}
                shop="relatedItems"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Items.propTypes = {
  related: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    seller: PropTypes.string,
    shippingStatus: PropTypes.string,
    favorite: PropTypes.bool,
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
    favorite: PropTypes.bool,
  })),
  toggleFavorite: PropTypes.func,
};

Items.defaultProps = {
  related: [
    {
      tags: [''],
      price: null,
      imageUrl: '',
      description: '',
      details: [''],
      seller: '',
      shippingStatus: '',
      favorite: false,
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
      favorite: false,
    },
  ],
  toggleFavorite: () => {},
};

export default Items;
