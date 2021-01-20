import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IndividualItem = ({ item }) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = (id) => {
    setFavorite({ ...favorite, [id]: !favorite[id] });
  };

  return (
    <div className="related-IndividualItemDisp">
      <div className="related-imageButton">
        <img src={item.imageUrl} alt="product" />
        <div className="related-favoriteContainer" role="button">
          {favorite[item._id] ? (
            <button
              type="button"
              className="related-favorited"
              data-testid="favoriteButton"
              id="favoriteButton"
              onClick={(e) => { toggleFavorite(e.target.dataset.id); }}
            >
              <i className="fa fa-heart" data-id={item._id} />
            </button>
          )
            : (
              <button
                type="button"
                className="related-nonFavorite"
                data-testid="notFavoriteButton"
                onClick={(e) => { toggleFavorite(e.target.dataset.id); }}
              >
                <i
                  className="far fa-heart"
                  data-id={item._id}
                />
              </button>
            )}
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
  }),
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
  },
};

export default IndividualItem;
