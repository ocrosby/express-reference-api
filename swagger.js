const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const doc = {
    info: {
        title: 'Express Reference API',
        description: 'API documentation for the Express Reference API',
    },
    host: `${host}:${port}`,
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);