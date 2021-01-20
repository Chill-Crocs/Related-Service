const faker = require('faker');

const generateDetails = () => {
  const details = [];
  let i = 0;
  const max = Math.floor(Math.random() * (4 - 1 + 1) + 1);

  while (i < max) {
    const detail = faker.commerce.productAdjective();
    details.push(detail);
    i += 1;
  }
  return details;
};

const generateFromThisShop = () => {
  const shopItems = [];
  let i = 0;
  let itemNum = 115;
  const max = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  const shopName = faker.company.companyName();

  while (i < max) {
    shopItems.push({
      _id: itemNum,
      name: faker.lorem.words(),
      price: faker.commerce.price(),
      imageUrl: faker.image.image(),
      description: faker.commerce.productDescription(),
      details: generateDetails(),
      availability: Math.random() < 0.5,
      seller: shopName,
      shippingStatus: 'Free shipping eligible',
    });
    i += 1;
    itemNum += 1;
  }
  return shopItems;
};

const generateRelatedItems = () => {
  const relatedItems = [];
  let i = 0;
  let itemNum = 100;
  const max = Math.floor(Math.random() * (10 - 5 + 1) + 5);

  while (i < max) {
    relatedItems.push({
      _id: itemNum,
      name: faker.lorem.words(),
      price: faker.commerce.price(),
      imageUrl: faker.image.image(),
      description: faker.commerce.productDescription(),
      details: generateDetails(),
      availability: Math.random() < 0.5,
      seller: faker.company.companyName(),
      shippingStatus: 'Free shipping eligible',
    });

    i += 1;
    itemNum += 1;
  }
  return relatedItems;
};

module.exports = {
  relatedItems: generateRelatedItems,
  fromShop: generateFromThisShop,
  details: generateDetails,
};
