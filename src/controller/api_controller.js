const connection = require('../db/api_connection');

exports.getVenda = async function(req, res, next ){
    try {

        const vendas = await connection.getVenda();
        
        res.send(vendas);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}