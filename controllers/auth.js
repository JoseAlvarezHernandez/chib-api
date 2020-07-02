/**
 * @module controllers/authentication
 * @author Jose de Jesus Alvarez Hernandez
 * @desc authentication Controllers
 */

const messages = require('./../message')
const APIusersCRUD = require('./../models/users')
const authUtil = require('./../utils/auth')
const fields = ['name', 'email', 'created_at', 'updated_at', 'phone', 'birthDate', 'type', 'jobDescription', 'occupation', 'price']

const authentication = {
  login
}

function login(request, response, next) {
  if (!request.body || request.body.email === undefined || request.body.password === undefined) {
    response.status(400).send({ message: messages.badrequestuestError })
  } else {
    try {
      const credentials = {
        email: request.body.email,
        password: authUtil.hashCode(request.body.password),
      }
      authenticate(credentials, fields).then((user) => {
        if (user !== null) {
          const token = authUtil.tokenGeneration(credentials)
          const userresponseponse = { ...user._doc, token }
          response.status(200).send(userresponseponse)
        } else {
          response.status(401).send({ message: messages.wrongUserCredentials })
        }
      })
    } catch (error) {
      response.status(400).send({ error })
    }
  }
}

function authenticate(credentials, fields) {
  try {
    const query = APIusersCRUD
      .findOne(credentials)
    query.select(fields.join(' '))
    return query.exec().then(successCB, errorCB)
  } catch (err) {
    return err
  }
}

function successCB(regs) {
  return (regs)
}

function errorCB(reason) {
  return ({ error: reason })
}

module.exports = authentication