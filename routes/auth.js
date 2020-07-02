/** 
 * @module routes/auth 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Auth API routes  
 */

/** Express dependency */
const express = require('express')

/** Route for API */
const route = '/api/authentication'

/** Router dependency */
const router = express.Router()

const authentication = require('../controllers/auth')

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
*   ObjectsArray:
*     type: array   
*     items: 
*       type: object
*/
/**
 * @swagger
 * definitions:
 *   UserLoginObject:
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   ExistsObject:
 *     properties:
 *       exists:
 *         type: boolean
 */
/**
 * @swagger
 * definitions:
 *   APISuccess:
 *     properties:
 *       message:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   UserObject:
 *     properties: 
 *       userId:
 *         type: string
 *       name:
 *         type: string  
 *       email:
 *         type: string
 *       token: 
 *         type: string
 *         format: base64
 */

/**
* @swagger
* /api/authentication/login:
*   post:
*     tags:
*       - Authentication
*     description: Authenticate an USER
*     produces:
*       - application/json
*     parameters:
*       - name: User
*         description: User object
*         in: body
*         required: true
*         schema:
*           $ref: '#/definitions/UserLoginObject'
*     responses:
*       200:
*         description: Successful request
*         schema:
*           $ref: '#/definitions/UserObject'
*       400:
*         description: Bad request
*         schema:
*           $ref: '#/definitions/error'
*       401:
*         description: Unauthorized access
*         schema:
*           $ref: '#/definitions/error'
*       404:
*         description: Resource not found
*         schema:
*           $ref: '#/definitions/error'
*/
router.post(`${route}/login`, authentication.login)
/**
* @swagger
* /api/authentication/login:
*   post:
*     tags:
*       - Authentication
*     description: Authenticate a user
*     produces:
*       - application/json
*     parameters:
*       - name: User
*         description: User object
*         in: body
*         required: true
*         schema:
*           $ref: '#/definitions/UserLoginObject'
*     responses:
*       200:
*         description: Successful request
*         schema:
*           $ref: '#/definitions/UserObject'
*       400:
*         description: Bad request
*         schema:
*           $ref: '#/definitions/error'
*       401:
*         description: Unauthorized access
*         schema:
*           $ref: '#/definitions/error'
*       404:
*         description: Resource not found
*         schema:
*           $ref: '#/definitions/error'
*/
router.post(`${route}/login`, authentication.login)

module.exports = router