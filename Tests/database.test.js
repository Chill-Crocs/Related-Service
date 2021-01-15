// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const databaseName = 'Related';

describe ('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        // connection = await MongoClient.connect('mongodb://localhost/Related', { useNewUrlParser: true, useUnifiedTopology: true });
        // db = await connection.db();
        const url = `mongodb://localhost/${databaseName}`;
        await mongoose.connect(url, { useNewUrlParser: true })

    });

    afterAll(async () => {
        // await connection.close();
        // await db.close();
        await mongoose.connection.close();
    });

    it('should return count of doc in collection', async () => {
        const items = db.collection('relateditems');
        const dbCount = await items.count();

        expect(dbCount).toEqual(217);
    })

})
