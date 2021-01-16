import React from 'react';
import PropTypes from 'prop-types';
import IndividualItem from './IndividualItem';

const Items = (props) => {
  const { related, fromShop } = props;

  return (
    <div className="related-allItems">
      <h4 className="related-fromShopHeader">More from this shop</h4>
      <div className="related-fromShopParent">
        <div className="related-fromShop">
          {fromShop.slice(0, 4).map((item, index) => (
            <div key={`shop${item._id}`} className="related-shopIndividualItem" id={`fromShop${index}`}>
              <IndividualItem
                item={item}
              />
            </div>
          ))}
        </div>
      </div>
      <h4 className="related-relatedHeader">Other items for you</h4>
      <div className="related-items">
        {related.slice(0, 4).map((item, index) => (
          <div key={`related${item._id}`} className="related-relatedIndividualItem" id={index}>
            <IndividualItem
              item={item}
            />
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
};

export default Items;
