const connection = require('../db/api_connection');
const util = require('./api_utils');

exports.getVenda = async function(req, res, next ){
    try {

        const vendas = await connection.getVenda(req.query["id"]);
        
        res.status(200).json(vendas);
        
    } catch (error) {
        res.status(500).json([{msg: `Houve um erro: ${error.message}`}])
    }

}
exports.createVenda = async function(req, res, next ){
    try {
        const dados = req.body
        const msg = util.validacaoDadosEntrada(dados)
        if(msg != ``){
            res.status(400).json([{msg: msg}])
            return
        }

        const vendas = await connection.createVenda(dados);
        res.status(200).json(vendas);
        
    } catch (error) {
        res.status(500).json([{msg: `Houve um erro: ${error.message}`}])
    }
}

exports.updateVenda = async function(req, res, next ){
    try {
        const dados = req.body
        const vendas = await connection.updateVenda(dados);
        res.status(200).json(vendas);
        
    } catch (error) {
        res.status(500).json([{msg: `Houve um erro: ${error.message}`}])
    }
}

exports.deleteVenda = async function(req, res, next ){
    try {
        const {id} = req.body
        const vendas = await connection.deleteVenda(id);
        res.status(200).json(vendas);
        
    } catch (error) {
        res.status(500).json([{msg: `Houve um erro: ${error.message}`}])
    }
}