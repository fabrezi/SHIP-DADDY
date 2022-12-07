# SHIP_DADDY

SHIP-DADDY is a web interface designed to offer a generalized framework for drop shipping, e-commerce and related services. It will provide a cloud-ready platform that can be deployed with few steps. It is powered by NodeJS and related frameworks.

The purpose of the epic is to design a retail site. It will mainly be a CRUD operation based api. The site will provide the following:

1. Display the products. Images of the product.
2. Ability for the user to register. Then he/she will receive a UUID.
(this is advance version for this execrise).**
3. The user can use the UUID to place an order. 
4. Manually the status of the order will be updated. The user will have the option to see the current status of the package.
5. Provide stats or the current status of the product. This will be packaging, shipping, delivery, delivered. This info can be checked by making calls to the db.


## SETUP

1. Install [NodeJS](https://nodejs.org/)
2. Clone this repo and run `npm install express`. this will download the node_modules folder.
3. Run the server `node server.js`

## Task

- [x] Configure the server with Express 
- [x] Run the UI with the server 
- [x] Add following options on the UI: {Menu, Order, Track}
- [] Click Menu. Display menu in UI
- [] Configure the db 
- [] Connect the api with db 
- [] Place an order with UI 
- [] Save the request in db 
- [] Create a logging mechanism for each action (what is similar to log4j. Is it `morgan`??)


### CONTRIBUTORS

- mowgli
- GIGA-Money