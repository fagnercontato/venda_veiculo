
const axios = require('axios');

exports.updateVeiculo = async (dados) => {
    try {
        const link = `http://localhost:3000/veiculo`
        const updatedVeiculo = await axios.put(link,dados, {
        headers: {
            'Content-Type': 'application/json'
        }
});

        
       return updatedVeiculo.data;
        
    } catch (error) {
         console.log(`Houve um erro ao deletar: ${error.message}`);
        throw error;
    }
}