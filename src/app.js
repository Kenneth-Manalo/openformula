const express = require("express");
const SwaggerParser = require("swagger-parser");
const { connector } = require("swagger-routes-express");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');

const bodyParser = require("body-parser");
const api = require("./api");


const openFormula = async () => {
    const parser = new SwaggerParser()
    const apiDescription = await parser.validate('./src/open-formula-api.yml')
    const swaggerSpec = YAML.load('./src/open-formula-api.yml');

    const connect = connector(api, apiDescription)

    const app = express()

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use(bodyParser());

    connect(app)

    return app
}

module.exports = openFormula