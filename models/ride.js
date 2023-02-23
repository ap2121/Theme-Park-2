const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
  {
    parkId: { type: Schema.Types.ObjectId, ref: 'Park' },
    image: { type: String, required: false },
    name: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Ride', Ride)
