const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Express API',
        description: 'API documentation for the Express API',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);