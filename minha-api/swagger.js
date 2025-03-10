const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuração do Swagger
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Minha API",
            version: "1.0.0",
            description: "API de exemplo documentada com Swagger",
        },
    },
    apis: ["./server.js"], // Arquivos onde as rotas estão definidas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
