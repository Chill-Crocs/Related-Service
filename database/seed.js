const faker = require('faker');
const db = require('./index.js');
const RelatedItem = require('./Item.js');

const generateTags = () => {
  const tags = [];
  let i = 0;
  const max = Math.floor(Math.random() * (15 - 6 + 1) + 6);

  while (i < max) {
    const tag = faker.lorem.words();
    tags.push(tag);
    i += 1;
  }
  return tags;
};

const generateDetails = () => {
  const details = [];
  let i = 0;
  const max = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  while (i < max) {
    const detail = faker.lorem.word();
    details.push(detail);
    i += 1;
  }
  return details;
};

const generateItems = () => {
  const items = [];
  let i = 0;

  while (i < 5) {
    const newTags = generateTags();
    const newPrice = faker.commerce.price();
    const newImageUrl = faker.image.image();
    const newDescription = faker.commerce.productDescription();
    const newDetails = generateDetails();
    const newAvailability = Math.random() < 0.5;
    const newSeller = faker.lorem.words();
    const newShippingStatus = 'Free shipping eligible';
    const newFavorite = Math.random() < 0.5;

    items.push(
      {
        info: {
          tags: newTags,
          price: newPrice,
          imageUrl: newImageUrl,
          description: newDescription,
          details: newDetails,
          availability: newAvailability,
        },
        seller: newSeller,
        shippingStatus: newShippingStatus,
        favorite: newFavorite,
      },
    );

    i += 1;
  }
  return items;
};

const sampleData = generateItems();

const insertSampleData = () => {
  RelatedItem.create(sampleData)
    .then(() => db.disconnect())
    .catch((err) => console.log(err));
};

insertSampleData();
