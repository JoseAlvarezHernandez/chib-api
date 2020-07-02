 
/**
 * @module connections
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Mongoose connections module
 */

/** Mongoose dependency */
const mongoose = require('mongoose');
/** Environment configurations */

/** MongoDB Users connection chain  */
const usersConnectionChain = process.env.DBCONNECTION;

/** Mongoose promises configuration  */
mongoose.Promise = global.Promise;

module.exports = {
  usersConnectionChain: mongoose.createConnection(usersConnectionChain, { useNewUrlParser: true, autoIndex: false, useUnifiedTopology:true })
};