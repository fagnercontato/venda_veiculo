
exports.validacaoDadosEntrada = function (dados) {
    let msg = ``
    let text = `está faltando o campo:`
    if( dados.cpf === undefined || dados.cpf == "") msg = msg +` - ${text} cpf`
    if( dados.cpfComprador === undefined || dados.cpfComprador == "") msg = msg +` - ${text} cpfComprador`
    if( dados.idTAbelaVeiculo === undefined || dados.idTAbelaVeiculo == "") msg = msg +` - ${text} idTAbelaVeiculo`
    if( dados.valorVenda === undefined || dados.valorVenda == "") msg = msg +` - ${text} valorVenda`

    return msg
}