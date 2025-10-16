const { MercadoPagoConfig, Order, Preference } = require("mercadopago");

const client = new MercadoPagoConfig({
	accessToken: process.env.MP_ACCESS_TOKEN,
	options: { timeout: 5000 },
});

const preference = new Preference(client);

// Step 3: Initialize the API object
const order = new Order(client);


exports.testePay = async function(dados) {
    try {
        
        const body = {
                "items": [
                            {
                            "id": dados.id,
                            "title": "Fiat Toro",
                            "description": "Fiat Toro",
                            "category_id": "cars",
                            "quantity": 1,
                            "currency_id": "BRL",
                            "unit_price": dados.valorVenda
                            }
                        ],
        //     "name": "John",
        //     "surname": "Doe",
        //     "email": "john@doe.com",
        //     "phone": {
        //       "area_code": "11",
        //       "number": 988888888
        //     },
        //     "identification": {
        //       "type": "CPF",
        //       "number": "19119119100"
        //     },
        //     "address": {
        //       "zip_code": "06233200",
        //       "street_name": "Example Street",
        //       "street_number": 123
        //     },
        //     "date_created": "2024-04-01T00:00:00Z"
        //   },
        //   "payment_methods": {
        //     "excluded_payment_methods": [
        //       {
        //         "id": "master"
        //       }
        //     ],
        //     "excluded_payment_types": [
        //       {
        //         "id": "ticket"
        //       }
        //     ],
        //     "default_payment_method_id": "amex",
        //     "installments": 10,
        //     "default_installments": 5
        //   },
        //   "shipments": {
        //     "local_pickup": false,
        //     "dimensions": "32 x 25 x 16",
        //     "default_shipping_method": null,
        //     "free_methods": [
        //       {
        //         "id": null
        //       }
        //     ],
        //     "cost": 20,
        //     "free_shipping": false,
        //     "receiver_address": {
        //       "zip_code": "72549555",
        //       "street_name": "Street address test",
        //       "city_name": "São Paulo",
        //       "state_name": "São Paulo",
        //       "street_number": 100,
        //       "country_name": "Brazil"
        //     }
        //   },
          "back_urls": {
            "success": "http://localhost:4000/venda/sucess",
            "pending": "http://localhost:4000/venda/pending",
            "failure": "http://localhost:4000/venda/failure"
          },
          
        };
        
        // Step 6: Make the request
        const createPagto = await preference.create({ body })
       return createPagto
    } catch (error) {
        console.log(`Houve um erro: ${error.message}`)
        throw error
    }

}


// Step 4: Create the request object