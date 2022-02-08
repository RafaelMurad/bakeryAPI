const { createConnection } = require("../data/connection/mongodb");
const dbConfig = require("../config/db");

async function findOne(collection, data) {
  const db = await createConnection(dbConfig);
  const _collection = db.collection(collection);
  const result = await _collection.findOne(data);
  return result;
}

async function findMany(collection, data) {
  const db = await createConnection(dbConfig);
  const _collection = db.collection(collection);
  const result = await _collection.find({ data }).toArray();
  return result;
}

async function insertOne(collection, data) {
  const db = await createConnection(dbConfig);
  const _collection = db.collection(collection);
  const result = await _collection.insertOne(data);
  const inserted = await findOne(collection, { _id: result.insertedId });
  return inserted;
}

async function updateOne(collection, data) {
  const db = await createConnection(dbConfig);
  const _collection = db.collection(collection);
  await _collection.updateOne(data.query, data.update);
  const updated = await findOne(collection, data.query);
  return updated;
}

module.exports = {
  findOne,
  findMany,
  insertOne,
  updateOne,
};
