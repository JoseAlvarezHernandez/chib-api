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
 *   error:
 *     properties:
 *       code:
 *         type: integer
 *       message:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   UserStatus:
 *     properties: 
 *       status:
 *         type: number
 */
/**
 * @swagger
 * definitions:
 *   UserUpdate:
 *     properties: 
 *       name:
 *         type: string
 *       homePage:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   APIUser:
 *     properties: 
 *       name:
 *         type: string  
 *       username:
 *         type: string 
 *       password:
 *         type: string 
 *       homePage:
 *         type: string
 *       phone:
 *         type: number
 */
/**
 * @swagger
 * definitions:
 *   APIUserSaved:
 *     properties: 
 *       name:
 *         type: string  
 *       username:
 *         type: string 
 *       password:
 *         type: string 
 *       homePage:
 *         type: string
 *       phone:
 *         type: number
 */
/**
 * @swagger
 * definitions:
 *   UserDeleteObject:
 *     properties: 
 *       username:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   APIUserAddress:
 *     properties: 
 *       street:
 *         type: string  
 *       number:
 *         type: number 
 *       city:
 *         type: string
 *       state:
 *         type: string
 *       zipcode:
 *         type: number
 *       country:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   APIUserFavorites:
 *     properties: 
 *       account:
 *         type: number  
 *       alias:
 *         type: string 
 *       email:
 *         type: string
 *       max_amount:
 *         type: number
 *       bank:
 *         type: string
 *       name:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   UserGet:
 *     properties: 
 *       name:
 *         type: string  
 *       username:
 *         type: string 
 *       created_at:
 *         type: string
 *         format: date
 *       phone:
 *         type: number
 */
/**
* @swagger
* definitions:
*   Users:
*     type: array   
*     items: 
*       $ref: '#/definitions/UserGet'
*/
/**
* @swagger
* definitions:
*   Favorites:
*     type: array   
*     items: 
*       $ref: '#/definitions/APIUserFavorites'
*/
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
 *     parameters:
 *       - name: Authorization
 *         description: Bearer authorization string
 *         in: header
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

router.get(route, users.getUser)

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
 *           $ref: '#/definitions/APIUserSaved'
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