import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IndividualItem = ({ item, loc, openModal }) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = (id) => {
    setFavorite({ ...favorite, [id]: !favorite[id] });
  };

  const handleClick = (e) => {
    const { location } = e.target.dataset;
    const { id } = e.target.dataset;
    openModal(id, location);
  };

  return (
    <div className="related-IndividualItemDisp">
      <div className="related-imageButton">
        <span
          role="button"
          data-id={item._id}
          data-location={loc}
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={handleClick}
          data-testid="openModal"
          style={{ outline: 'none' }}
        >
          <img
            id="related-images"
            src={item.imageUrl[0]}
            alt="product"
            data-id={item._id}
            data-location={loc}
          />
        </span>
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
      <div
        className="related-modalClick"
        role="button"
        data-id={item._id}
        data-location={loc}
        onClick={handleClick}
        tabIndex={0}
        onKeyDown={handleClick}
      >
        <h3
          className="related-itemCaption"
          data-id={item._id}
          data-location={loc}
        >
          {item.name}
        </h3>
        <div
          className="related-seller"
          data-id={item._id}
          data-location={loc}
        >
          {item.seller}
        </div>
        <div
          className="related-price"
          data-id={item._id}
          data-location={loc}
        >
          {`$${(item.price / 50).toFixed(2)}`}
        </div>
        <div
          className="related-shippingStatus"
          data-id={item._id}
          data-location={loc}
        >
          {item.shippingStatus}
        </div>
      </div>
    </div>
  );
};

IndividualItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    seller: PropTypes.string,
    shippingStatus: PropTypes.string,
  }),
  loc: PropTypes.string,
  openModal: PropTypes.func,
};

IndividualItem.defaultProps = {
  item: {
    _id: null,
    name: '',
    price: null,
    imageUrl: [''],
    description: '',
    details: [''],
    seller: '',
    shippingStatus: '',
  },
  loc: '',
  openModal: () => {},
};

export default IndividualItem;
