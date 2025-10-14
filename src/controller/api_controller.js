
exports.getVenda = async function(req, res, next ){
    try {

        
        
        res.send(`Hello World!`);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}