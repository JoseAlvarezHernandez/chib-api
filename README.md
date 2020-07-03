![API version](https://img.shields.io/badge/version-1.0-brightgreen.svg)
# CHIB API
Welcome to Chib API v1

You can use my hosted api at 

```
https://chib-api.herokuapp.com/api-docs
```

## Getting Started

1.	Installation process
Run `npm install` to get API dependencies.

2. Set up your environment variables

You will have to create a `.env` file at root directory with the variables needed
    
* PORT
* API_URL
* DBCONNECTION
* CURRENCY_URL

for the currency url you can use 
```
https://free.currconv.com/api/v7/convert?q=MXN_USD&compact=ultra&apiKey=525ded03e627e09dbdc3
```

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
