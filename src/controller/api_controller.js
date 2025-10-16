const connection = require('../db/api_connection');
const util = require('./api_utils');
const testePay = require('../mercadoPago/api_payment');
const { updateVeiculo } = require('../Veiculo/integration');

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

        const envioPayment = await testePay.testePay(vendas)

        const updatedVenda = await connection.updateVenda({id: vendas.id, pagamentoLink: envioPayment.init_point, idPagamento: envioPayment.id});
        
        
        res.status(200).json(updatedVenda);
        
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

exports.successPayment = async function(req, res, next ){
    try {

        const vendaVeiculo = await connection.getVendaPayment(req.query["preference-id"]);
        const updateVenda = await connection.updateVenda({id: vendaVeiculo[0].id, pagamentoProcessado: true});
        const atualizaVendaVeiculo = await updateVeiculo({id: Number(vendaVeiculo[0].idTAbelaVeiculo), vendido: true});
        res.status(200).json(atualizaVendaVeiculo);
        
    } catch (error) {
        res.status(500).json([{msg: `Houve um erro: ${error.message}`}])
    }
}

exports.failurePayment = async function(req, res, next ){
    try {

        const vendaVeiculo = await connection.getVendaPayment(req.query["preference-id"]);
        const updateVenda = await connection.updateVenda({id: vendaVeiculo[0].id, pagamentoProcessado: false});
        const atualizaVendaVeiculo = await updateVeiculo({id: Number(vendaVeiculo[0].idTAbelaVeiculo), vendido: false});
        res.status(200).json(atualizaVendaVeiculo);
        
    } catch (error) {
        res.status(500).json([{msg: `Houve um erro: ${error.message}`}])
    }
}