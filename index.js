const controller = require('./src/controller');

async function startUp() {
    console.log(`Iniciando a aplicação venda_veiculo`);
    try {
            const port = process.env.HTTP_PORT
            controller.server.listen(parseInt(port), function(){
                console.log(`API Iniciada em ${port}`)
            });
    } catch (error) {
      console.log(error)  
    }
    
}
startUp();