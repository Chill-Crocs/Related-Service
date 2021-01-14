const faker = require('faker');
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

  while (i < 101) {
    items.push(
      {
        info: {
          tags: generateTags(),
          price: faker.commerce.price(),
          imageUrl: faker.image.image(),
          description: faker.commerce.productDescription(),
          details: generateDetails(),
          availability: Math.random() < 0.5,
        },
        seller: faker.lorem.words(),
        shippingStatus: 'Free shipping eligible',
        favorite: Math.random() < 0.5,
      },
    );

    i += 1;
  }
  return items;
};

const sampleData = generateItems();

const insertSampleData = () => {
  RelatedItem.create(sampleData)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

insertSampleData();
