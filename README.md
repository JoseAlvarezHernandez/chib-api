![API version](https://img.shields.io/badge/version-1.0-brightgreen.svg)
# CHIB API
Welcome to Chib API v1

You can use my hosted api at 

```
https://chib-api.herokuapp.com/api-docs
```

## Getting Started

Assuming you already have installed Node and mongodb follow the next steps if not you can find information about how to install them base on your OS 

[Mongo DB](https://docs.mongodb.com/manual/installation/)

[Node JS](https://nodejs.org/en/download/current/)

1.	Installation process
Run `npm install` to get API dependencies.

2. Set up your environment variables, You will have to create a `.env` file at root directory with the variables needed
    
    * PORT
    * API_URL
    * DBCONNECTION
    * CURRENCY_URL

    for the currency url you can use 
    ```
        https://free.currconv.com/api/v7/convert?q=MXN_USD&compact=ultra&apiKey=525ded03e627e09dbdc3
    ```

    An example of the db environment variable structure you have to set is: 
    `mongodb://user:password@sub.mlab.com:15370/dbname`

3. To Run your API you should execute 
    ```
    npm start
    ```

    or 

    ```
    npm run start:dev
    ```

3.	API Developer documentation
    Go to `/api-docs/` to access code documentation for this API.

You are all set up!!
good luck