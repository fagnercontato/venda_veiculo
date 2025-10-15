# Api Venda Veiculo

## System Architecture Design
![System Architecture Design]
(source: 8SOAT - Atividade Substitutiva de fase)

## Documentação

Para uma compreensão completa das funcionalidades e como interagir com a API, use o Postman.

### Importando a collection:

1. **Abra o Postman.**
2. **Importe:** Clique em "Importar" e selecione o arquivo collection.
3. **Local:** Procurar [`venda_veiculo.postman_collection.json`](https://github.com/fagnercontato/venda_veiculo/blob/main/docs/Postman/venda_veiculo.postman_collection.json) na pasta `docs`.
4. **Explore:** A coleção estará disponível para você testar os endpoints.

**Ao usar o Postman, você pode:**

* **Solicitações de teste:** Enviar solicitações HTTP para diferentes endpoints e visualizar as respostas.
* **Gerenciar ambientes:** Configure diferentes ambientes (por exemplo, desenvolvimento, produção) para seus testes.
* **Criar coleções:** Organize suas solicitações em coleções temáticas.
* **Compartilhar:** Compartilhe suas coleções com outros desenvolvedores.

**Com o Postman, explorar e testar sua API se torna mais eficiente e intuitivo.**

**Sequência de API sugerida para execução**
- POST - /venda
- PUT - /venda
- GET - /venda
- GET - /venda?id=${id}
- DELETE - /venda

### Configurando a versão do Node

Para garantir que você esteja usando a versão correta do Node.js especificada no arquivo `.nvmrc`, execute o seguinte comando:

```shell
nvm use
```

Se você não tiver o nvm (Node Version Manager) instalado, siga as instruções aqui para instalá-lo.


Para mais detalhes sobre o nvm, você pode visitar o site deles [GitHub repository](https://github.com/nvm-sh/nvm#installing-and-updating).

### Variáveis ​​de ambiente

Este projeto requer a configuração de determinadas variáveis ​​de ambiente.
Você pode encontrar um modelo para essas variáveis ​​no arquivo .env.example.
Para criar seu próprio arquivo .env, execute o seguinte comando:

```shell
cp .env.example .env
```

Em seguida, edite o arquivo .env para incluir os valores apropriados para sua configuração.
Observação as credenciais do banco de dados são exclusivamento do mongo db Atlas
consulte a documentação:
[MongoDB Atlas](https://www.mongodb.com/pt-br/docs/atlas)
[Mais detalhes](https://www.youtube.com/watch?v=5r51JcFmn5w&t=2049s)



### Construindo e executando seu aplicativo

Quando estiver pronto, inicie seu aplicativo executando:

```shell
docker compose up --build
```

Seu aplicativo estará acessível em http://localhost:3000, e a documentação do Swagger
pode ser encontrada em http://localhost:3000/documentation.

### Implementando seu aplicativo na nuvem

Primeiro, construa sua imagem, por exemplo:

```shell
docker build -t app-venda-veiculo .
```

Se a sua nuvem usa uma arquitetura de CPU diferente da sua máquina de desenvolvimento (por exemplo, você está usando um Mac M1 e seu provedor de nuvem é AMD64), você vai querer construir a imagem para essa plataforma, por exemplo:


```shell
docker build --platform=linux/amd64 -t app-venda-veiculo .
```

Em seguida, envie-o para seu registro, por exemplo. `docker push myregistry.com/app-venda-veiculo`.

Consulte a documentação Docker [getting started](https://docs.docker.com/go/get-started-sharing/)
docs para mais detalhes sobre construção e envio.

### Docker Compose

Para criar e executar seu aplicativo com o Docker Compose, use o seguinte comando:

```shell
docker compose up --build
```
Este comando criará e iniciará todos os serviços definidos no seu arquivo docker-compose.yml.


### Referencias
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
* [MongoDB Atlas](https://www.mongodb.com/pt-br/docs/atlas)
