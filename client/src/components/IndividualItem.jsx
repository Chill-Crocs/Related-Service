import React from 'react';
import PropTypes from 'prop-types';

const IndividualItem = (props) => {
  const { item, shop, toggleFavorite } = props;

  return (
    <div className="related-IndividualItemDisp">
      <div className="related-imageButton">
        <img src={item.imageUrl} alt={item._id} />
        <div className="related-favoriteContainer">
          {item.favorite ? <button type="button" className="related-favorited"><i className="fa fa-heart" /></button>
            : <button type="button" className="related-nonFavorite" data-id={item._id} onClick={(e) => { e.preventDefault(), console.log(props.item.favorite); }}><i className="far fa-heart" /></button>}
        </div>
      </div>
      <h3 className="related-itemCaption">{`${item.tags[0]} | ${item.tags[1]} | ${item.tags[2]}`}</h3>
      <div className="related-seller">{item.seller}</div>
      <div className="related-price">{`$${(item.price / 50).toFixed(2)}`}</div>
      <div className="related-shippingStatus">{item.shippingStatus}</div>
    </div>
  );
};

IndividualItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    seller: PropTypes.string,
    shippingStatus: PropTypes.string,
    favorite: PropTypes.bool,
  }),
  toggleFavorite: PropTypes.func,
};

IndividualItem.defaultProps = {
  item: {
    _id: null,
    tags: [''],
    price: null,
    imageUrl: '',
    description: '',
    details: [''],
    seller: '',
    shippingStatus: '',
    favorite: false,
  },
  toggleFavorite: () => {},
};

export default IndividualItem;
