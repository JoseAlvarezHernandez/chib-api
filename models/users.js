/**
 * @module models/User
 * @author Jose de Jesus Alvarez Hernandez
 * @desc API users model
 */

/** Mongoose connections */
const connections = require('../connections');
/** Mongoose dependency */
const mongoose = require('mongoose');
/** Mongoose schema object */
let Schema = mongoose.Schema;

const User = {
  name: {type: String, required: true },
  email: {type: String, unique: true, required: true },
  password: {type: String, required: true},
  birthDate: { type: Date, required: true},
  phone: {type: Number, required: true},
  type: { type: String, enum: ['contractor', 'employee'], required: true},
  occupation: {type: String, default: ''},
  jobDescription: {type: String, default: ''},
  price: {type: Number, default: 0},
  createdBy: String,
  updatedBy: String,
  deleted: {type: Boolean, default: false}
};

/** Additional configurations */
const configs = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

/** User schema object*/
const userSchema = new Schema(User, configs);

/** User model instance */
module.exports = connections.usersConnectionChain.model('User', userSchema, 'users');