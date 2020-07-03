/**
 * @module server
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Node JS server.js
 */
/** Environment vairables */
require('dotenv').config()

/** Express instance */
const express = require('express')

/** Path instance */
const path = require('path')

/** URL instance */
const url = require('url')

/** bodyParser instance */
const bodyParser = require('body-parser')

/** Express Router instance */
const router = express.Router()

/** Swagger JSDoc instance */
const swaggerJSDoc = require('swagger-jsdoc')

/** Express object */
const app = express()

/** Node app port */
const port = process.env.PORT || 3978

/** URL host */
const urlHost = url.parse(process.env.API_URL).host

/** Swagger definition object */
const swaggerDefinition = {
    info: {
      title: 'API',
      version: '1.1.0',
      description: 'RESTFUL API Documentation'
    },
    host: urlHost,
    basePath: '/',
    tags: [
      { name: 'API' }
    ]
}

/** Swagger options object */
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js']
}

/** Swagger specification */
const swaggerSpec = swaggerJSDoc(options)

/** App Access Control configurations */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, FETCH')
    next()
});

app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 5,
    type: 'application/x-www-form-urlencoding'
}));

app.use(bodyParser.json({
    limit: 1024 * 1024,
    type: 'application/json'
}));

app.use(express.static(path.join(__dirname, 'public')));
/************************************************
* Import routes
************************************************/

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

// Init get
router.get('/', (req, res) => res.status(200).send({ status: 'up' }));

// serve swagger
router.get('/api/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/************************************************
* Use routes
************************************************/

app.use(router);
app.use(authRoute)
app.use(userRoute)
app.use((req, res, next) => res.status(403).send({ error: 'Method Not Allowed' }));

/************************************************
* Run server
************************************************/


app.listen(port, () => {
    console.log(`Your server is running in port ${port}`)
})