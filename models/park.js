const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
  {
    image: { type: String, required: false },
    name: { type: String, required: true },
    location: { type: String, required: false },
    dateOpened: {type: String, required: true},
    dateClosed: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Park', Park)
