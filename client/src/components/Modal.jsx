import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, closeModal, item }) => {
  const [index, setIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleImageChange = (e) => {
    const newIndex = Number(e.target.dataset.id);
    setIndex(newIndex);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIndex(0);
    closeModal();
  };

  const separateDetails = () => {
    let detailsString = '';
    for (let i = 0; i < item[0].details.length; i += 1) {
      detailsString += `${item[0].details[i]} | `;
    }
    return detailsString.slice(0, -2);
  };

  if (!show) {
    return null;
  }
  return (
    <div className="related-modalContainer">
      <div className="related-modalButtonClose">
        <div
          role="button"
          onClick={handleClose}
          tabIndex={0}
          onKeyDown={handleClose}
          data-testid="closeButton"
          style={{ outline: 'none' }}
        >
          <span className="related-modalSvgHolder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="related-modalAllInformation">
        <div className="related-modalTextInformation">
          <div className="related-modalNamePrice">
            <div className="related-modalItemName">{item[0].name}</div>
            <div id="related-modalPrice">{`$${(item[0].price / 50).toFixed(2)}`}</div>
          </div>
          <div className="related-modalSeller">
            <span className="related-modalInformationHeader">Seller</span>
            <span>{item[0].seller}</span>
          </div>
          <div>
            <div
              className="related-modalInformationHeader"
              id="related-modalDetails"
            >
              Highlights
            </div>
            <div>{separateDetails()}</div>
          </div>
          <div>
            <div className="related-modalInformationHeader">
              Description
            </div>
            <div id="related-modalDescription">{item[0].description}</div>
          </div>
          <div className="related-modalShipping">
            <div className="related-modalTruck">
              <i className="fas fa-truck" />
            </div>
            <div>{item[0].shippingStatus}</div>
          </div>
          <div className="related-modalAddToCart">
            <button type="button" id="related-modalAddToCartButton">Add to cart</button>
          </div>
        </div>
        <div className="related-modalMainImage">
          <img src={item[0].imageUrl[index]} alt="product-main" id="related-images" />
          {favorite ? (
            <button
              type="button"
              className="related-modalFavorite"
              data-testid="favoriteFilledButton"
              onClick={() => { setFavorite(!favorite); }}
            >
              <i className="fa fa-heart" />
            </button>
          )
            : (
              <button
                type="button"
                className="related-modalNonFavorited"
                data-testid="favoriteUnfilledButton"
                onClick={() => { setFavorite(!favorite); }}
              >
                <i className="far fa-heart" />
              </button>
            )}
        </div>
        <div className="realted-modalImages">
          <div
            id="related-smallImg1"
            role="button"
            tabIndex={0}
            onKeyDown={handleImageChange}
            onClick={handleImageChange}
            data-testid="imageChange"
          >
            <img
              data-id="0"
              src={item[0].imageUrl[0]}
              alt="product"
              id="related-images"
            />
          </div>
          <div
            id="related-smallImg2"
            role="button"
            tabIndex={0}
            onKeyDown={handleImageChange}
            onClick={handleImageChange}
          >
            <img
              data-id="1"
              src={item[0].imageUrl[1]}
              alt="product"
              id="related-images"
            />
          </div>
          <div
            id="related-smallImg3"
            role="button"
            tabIndex={0}
            onKeyDown={handleImageChange}
            onClick={handleImageChange}
          >
            <img
              data-id="2"
              src={item[0].imageUrl[2]}
              alt="product"
              id="related-images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  show: PropTypes.bool,
  item: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    seller: PropTypes.string,
    shippingStatus: PropTypes.string,
  })),
};

Modal.defaultProps = {
  closeModal: () => {},
  show: false,
  item: [
    {
      name: '',
      price: null,
      imageUrl: [''],
      description: '',
      details: [''],
      seller: '',
      shippingStatus: '',
    },
  ],
};

export default Modal;
