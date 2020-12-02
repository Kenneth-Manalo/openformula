# OpenFormula API

## Overview
This is a simple application that expose the APIs of the existing formula parser library

```
const openFormula = require('./app')

openFormula()
    .then(app => app.listen(3005))
    .then(() => {
        console.log('Server started')
    })
    .catch(err => {
        console.error('caught error', err)
    })
```    

## Getting Started
This instructions aims you to get a local copy of the project that you can deploy in your local machine.

Clone:

```
git@git.cwp.pnp-hcl.com:Innovation-General/openformula.git
```

Install dependencies:
```
$ npm install
```

Start the server:
```
$ cd src/
$ nodemon index.js

Access http://localhost:3005/api-docs/