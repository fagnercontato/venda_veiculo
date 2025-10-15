const { prisma } = require("./prisma.js");


exports.getVenda = async () => {
    try {
        const vendas = await prisma.venda_veiculo.findMany();
        
       return vendas;
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}