const helper = require('./seedHelpers.js');
const RelatedItem = require('./Item.js');

const generateItems = () => {
  const items = [];
  let i = 0;

  while (i < 100) {
    items.push({
      _id: i,
      relatedItems: helper.relatedItems(),
      shopItems: helper.fromShop(),
    });
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
