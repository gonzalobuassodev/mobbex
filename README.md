# Prueba Técnica Mobbex

# REST API

## Instalación

Usando la Linea de comandos en una terminal:

Via git

* git clone https://github.com/gonzalobuassodev/mobbex.git

* npm install

* npm dev

En el archivo .env debemos cambiar las variables:

RETURN_URL (url que apunta a la url del frontend)

WEBHOOK (url que apunta al backend para obtener la respuesta del servidor de Mobbex con el status de la transacción)

### Crear un checkout

### Request

#### POST /checkout

    {
      "total": 100,
      "description": "Descripción del pago",
      "customer": {
        "email": "email del cliente",
        "name": "nombre del cliente",
        "identification": "dni del cliente"
      }
    }
    
### Response

    {
      "status": "success",
      "data": {
        "id": "0918015d-9bb2-49c7-976e-1da1ea3ee1c1",
        "total": 100,
        "description": "Descripción del pago",
        "reference": "7fe9e14e-930b-44d5-8b23-cc90806f1429",
        "currency": "ARS",
        "test": "true",
        "return_url": "/checkout/return_url",
        "webhook": "/checkout/webhook",
        "customer": {
          "email": "email del cliente",
          "name": "nombre del cliente",
          "identification": "dni del cliente"
        },
        "checkout_url": "url del checkout de mobbex",
        "status": "Estado del checkout",
        "_id": "63a1bd6f06ccc18aff9cb588",
        "__v": 0
      }
    }


### Obtener una lista de checkout



#### GET /checkout

### Response

    {
      "status": "success",
      "data": [
        {
          "customer": {
            "email": "email del cliente",
            "name": "nombre del cliente",
            "identification": "dni del cliente"
          },
          "_id": "63a1f1bf7f2a964cbc65a6b3",
          "id": "22088c0e-182b-495e-a4b7-24aaef366cd4",
          "total": 100,
          "description": "Descripción del pago",
          "reference": "7317e64b-7707-4651-a894-8193046ab0cb",
          "currency": "ARS",
          "test": "true",
          "return_url": "url del checkout de mobbex",
          "checkout_url": "url del checkout de mobbex",
          "status": "Denegada",
          "__v": 0
        }
      ]
    }


# APP REACTJS

En la carpeta client esta el frontend.

Usando la Linea de comandos en una terminal:

* npm install 
* npm dev

En la carpeta src/utils tenemos un archivo api.ts donde debemos cambiar la url del backend.

En la pantalla inicial tenemos la posibilidad de generar un pago.

Los datos del formulario son:

* Total a pagar
* Descripción del pago
* Nombre del clietne
* Email del cliente
* DNI del cliente

Una vez completado todos los cambios, haciendo click en el boton ir a pagar, nos llevar al checkout de mobbex generado por el backend.

Cuando el cliente haya realizado el pago en el checkout de mobbex, lo regresara a la pagina inicial donde se le mostrara una lista con los checkout realizados.





