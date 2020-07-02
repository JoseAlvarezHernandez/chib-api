/** 
 * @module routes/users 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Auth API routes  
 */

/** Express dependency */
const express = require('express')

/** Router dependency */
const router = express.Router()

/** Route for API */
const route = '/api/users'

const users = require('../controllers/users')

/**
 * @swagger
 * definitions:
 *   Users:
 *     type: array   
 *     items: 
 *       $ref: '#/definitions/APIUser'
 *   error:
 *     properties:
 *       code:
 *         type: integer
 *       message:
 *         type: string
 *   APIUserNextStep:
 *     properties:
 *       occupation:
 *         type: string
 *       jobDescription:
 *         type: string
 *       price:
 *          type: number
 *   APIUser:
 *     properties: 
 *       name:
 *         type: string  
 *       email:
 *         type: string 
 *       password:
 *         type: string 
 *       homePage:
 *         type: string
 *       phone:
 *         type: number
 *       birthDate:
 *         type: string
 *         format: date
 *       type:
 *         type: string
 *         enum: 
 *            - employee
 *            - contractor
 */
/**
 * @swagger
 * /api/users/{email}:
 *   get:
 *     tags:
 *       - Users
 *     description: Get users
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Bearer authorization string
 *         in: header
 *         required: true
 *         type: string
 *       - name: email
 *         description: users emails
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/Users'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */

router.get(`${route}/:email`, users.getUser)

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     description: Saves User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/APIUser'
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/APIUser'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
*/

router.post(route, users.addUser)

/**
 * @swagger
 * /api/users:
 *   put:
 *     tags:
 *       - Users
 *     description: Saves User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Authorization token
 *         in: header
 *         required: true
 *       - name: User
 *         description: Users next step registration
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/APIUserNextStep'
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/APIUser'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
*/

router.put(route, users.updateUser)

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Get users
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/Users'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */

router.get(route, users.getAll)

module.exports = router