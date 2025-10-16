const dotenv = require('dotenv');
dotenv.config({override: true});

const controller = require('./api_controller');

const express = require('express');
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('../../swagger.json');


async function startServer() {
    
    server.use(cors());
    server.use(express.json());
    server.use(fileUpload());

    server.use(`/documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    server.get(`/venda`, controller.getVenda);
    server.post(`/venda`, controller.createVenda);
    server.put(`/venda`, controller.updateVenda);
    server.delete(`/venda`, controller.deleteVenda);
    server.get(`/venda/sucess`, controller.successPayment);
    server.get(`/venda/failure`, controller.failurePayment);
}

startServer()
exports.server = server;