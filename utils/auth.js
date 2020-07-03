const jwt = require('jsonwebtoken')
const APIUserCRUD = require('./../models/users')
const crypto = require('crypto')
const axios = require('axios')

function tokenGeneration(source) {
  const token = jwt.sign(
    {
      user: source,
    }, process.env.hash || 'shh', {
      expiresIn: '2h',
    }
  )
  return token
}

function tokenValidation(authBearerString) {
  if (authBearerString.indexOf('Bearer') == -1)
    return false

  const token = authBearerString.replace('Bearer ', '')
  try {
    result = jwt.verify(token, process.env.hash || 'shh')
    const fields = ['email']
    const credentials = {
      email: result.user.email,
      password: result.user.password
    }
    APIUserCRUD.find(credentials, fields)
      .then((user) => {
        if (user !== null) {
          result = true
        } else {
          result = false
        }
      })
  } catch (error) {
    result = false
  }
  return result
}

function hashCode(str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

async function USDcurrency(){
  let result = await axios.get(process.env.CURRENCY_URL)
  return result.data.MXN_USD
}

module.exports = { tokenGeneration, tokenValidation, hashCode, USDcurrency }