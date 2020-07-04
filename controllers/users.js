/**
 * @module controllers/users
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Users Controllers
 */
const messages = require('./../message')
const APIusersCRUD = require('./../models/users')
const authUtil = require('./../utils/auth')

const fields = ['name', 'email', 'created_at', 'updated_at', 'phone', 'birthDate', 'type', 'jobDescription', 'occupation', 'price']

const users = {
    getAll,
    getUser,
    addUser,
    updateUser
}
async function updateUser(request, response, next){
    if (!request.header('Authorization')) {
        response.status(400).send({ message: messages.badRequestError })
    } else {
        const authToken = request.header('Authorization')
        const userValidation = authUtil.tokenValidation(authToken)
        if (!userValidation) {
            response.status(401).send({ message: messages.expiredTokenError })
        } else {
            const user = await APIusersCRUD.findOne({email: userValidation.user.email}, fields)
            if(user){
                await APIusersCRUD.updateOne({ email: userValidation.user.email}, { 
                    $set:{
                        occupation: request.body.occupation,
                        jobDescription: request.body.jobDescription,
                        price: request.body.price
                    }})
                response.status(201).send({ success: messages.successUpdate })
            }else
                response.status(403).send({message: messages.notFoundUser})
            
        }
    }
}

async function getAll(request, response, next) {
    const users = await APIusersCRUD.find({ type:'employee'}, fields)
    //const convertion = await authUtil.USDcurrency()
    const newUsers = users.map(user => {
        return ({ ...user._doc}) //(user.price * convertion).toFixed(2) })
    })
    response.status(200).send(newUsers)
}

async function getUser(request, response, next) {
    if (!request.header('Authorization')) {
        response.status(400).send({ message: messages.badRequestError })
    } else {
        const authToken = request.header('Authorization')
        const userValidation = authUtil.tokenValidation(authToken)
        if (!userValidation) {
            response.status(401).send({ message: messages.expiredTokenError, code: 1010 })
        } else {
            const conditions = { deleted: { $ne: true }, email: userValidation.user.email }
            const user = await APIusersCRUD.findOne(conditions, fields)
            if (user)
                response.status(200).send(user)
            else
            response.status(400).send({ message: messages.notFoundUser })
        }
}
}

async function addUser(request, response, next) {
    try {
        const isUser = await APIusersCRUD.findOne({email: request.body.email})
        if(!isUser){
            const newUser = new APIusersCRUD({...request.body, password: authUtil.hashCode(request.body.password)})
            const success = await newUser.save()
            response.status(201).send({ success: messages.successAccount })
        }else
            response.status(403).send( { message: messages.userExists })
        
    } catch (error) {
        response.status(409).send( { message: error.message })
    }
}

module.exports = users