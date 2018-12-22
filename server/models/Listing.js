const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true, max: [120, 'Title too long. Maximum 120 characters.'] },
  description: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  rate: { type: Number, required: true },
  method: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date }
});

module.exports = mongoose.model('Listing', listingSchema)
