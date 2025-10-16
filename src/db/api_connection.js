const { prisma } = require("./prisma.js");


exports.getVenda = async (id) => {
    try {
        const vendas = await prisma.venda_veiculo.findMany({where: { id }});
        
       return vendas;
        
    } catch (error) {
        console.log(`Houve um erro ao buscar dados: ${error.message}`);
        throw error;
    }
}

exports.getVendaPayment = async (idPagamento) => {
    try {
        const vendas = await prisma.venda_veiculo.findMany({where: { idPagamento }});
        
       return vendas;
        
    } catch (error) {
        console.log(`Houve um erro ao buscar dados: ${error.message}`);
        throw error;
    }
}

exports.createVenda = async (dados) => {
    try {
        const {...campos } = dados;
        const createdVenda = await prisma.venda_veiculo.create({
            data: {
                ...campos,
                dataVenda: new Date()
            }
        });
        
       return createdVenda;
        
    } catch (error) {
         console.log(`Houve um erro ao criar: ${error.message}`);
        throw error;
    }
}

exports.updateVenda = async (dados) => {
  try {
    const { id, ...campos } = dados;

    const updatedVenda = await prisma.venda_veiculo.update({
      where: { id },
      data: {
        ...campos
      },
    });

    return updatedVenda;
  } catch (error) {
     console.log(`Houve um erro ao atualizar: ${error.message}`);
    throw error;
  }
};


exports.deleteVenda = async (id) => {
  try {
    
    const deletedVenda = await prisma.venda_veiculo.delete({
      where: { id },
    });

    return deletedVenda;
  } catch (error) {
     console.log(`Houve um ao deletar: ${error.message}`);
    throw error;
  }
};