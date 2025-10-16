const apiController = require('../src/controller/api_controller');
const httpMocks = require('node-mocks-http');

// Mock do módulo de conexão
jest.mock('../src/db/api_connection', () => ({
  getVenda: jest.fn().mockResolvedValue([{ id: '1', cpf: '12345678900', valorVenda: 10000 }]),
  createVenda: jest.fn().mockResolvedValue({ id: '2', cpf: '12345678900', valorVenda: 15000 }),
  updateVenda: jest.fn().mockResolvedValue({ id: '2', cpf: '12345678900', valorVenda: 20000 }),
  deleteVenda: jest.fn().mockResolvedValue({ id: '2', cpf: '12345678900', valorVenda: 20000 }),
}));

describe('API Controller', () => {
  it('getVenda retorna vendas mockadas', async () => {
    const req = httpMocks.createRequest({ query: {} });
    const res = httpMocks.createResponse();
    await apiController.getVenda(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual([{ id: '1', cpf: '12345678900', valorVenda: 10000 }]);
  });

  // it('createVenda retorna venda criada mockada', async () => {
  //   const req = httpMocks.createRequest({ body: { cpf: '12345678900', valorVenda: 15000 ,idTAbelaVeiculo: 1, cpfComprador: '12345678900'} });
  //   const res = httpMocks.createResponse();
  //   await apiController.createVenda(req, res);
  //   expect(res._getStatusCode()).toBe(200,201);
  //   expect(res._getJSONData()).toHaveProperty('id', '2');
  // });

  it('updateVenda retorna venda atualizada mockada', async () => {
    const req = httpMocks.createRequest({ body: { id: '2', valorVenda: 20000 } });
    const res = httpMocks.createResponse();
    await apiController.updateVenda(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toHaveProperty('valorVenda', 20000);
  });

  it('deleteVenda retorna venda deletada mockada', async () => {
    const req = httpMocks.createRequest({ body: { id: '2' } });
    const res = httpMocks.createResponse();
    await apiController.deleteVenda(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toHaveProperty('id', '2');
  });
});