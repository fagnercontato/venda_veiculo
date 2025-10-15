 const swaggerAutogen = require("swagger-autogen");

 const outputFile = "./swagger.json"
 const endPontFiles =  require("./src/controller/api_server.js")

 const doc = {
    info: {
        title: "Api Venda Veículos",
        description: "Esta aplicação permite gerenciar a aplicação de vendas de veículos.",
        
    },
    host: "http://localhost:4000",
    schemes: ["http"]
 }

 swaggerAutogen()(outputFile, endPontFiles, doc);