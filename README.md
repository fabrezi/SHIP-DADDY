# SHIP_DADDY

SHIP-DADDY is a web interface designed to offer a generalized framework for drop shipping, e-commerce and related services. It will provide a cloud-ready platform that can be deployed with few steps. It is powered by NodeJS and related frameworks.

The purpose of the epic is to design a retail site. It will mainly be a CRUD operation based api. The site will provide the following:

1. Display the products. Images of the product.
2. Ability for the user to register. Then he/she will receive a UUID.
(this is advance version for this execrise).**
3. The user can use the UUID to place an order. 
4. Manually the status of the order will be updated. The user will have the option to see the current status of the package.
5. Provide stats or the current status of the product. This will be packaging, shipping, delivery, delivered. This info can be checked by making calls to the db.

For the completion of the task, the app must have the following:

- CRUD functionality (HTTP methods,routing)
- Frontend: Should demonstrate an understanding of the framework used
            in the solution and ui best practice, event handling, hooks
- Backend: Should demonstrate understanding of route handling and REST.
- Database: Persistence

Put simply: make the site do CRUD. Thats it. 


## SETUP

1. Install [NodeJS](https://nodejs.org/)
2. Clone this repo and run `npm install express`. this will download the node_modules folder.
3. Run the server `node server.js`

## Task

- [x] Configure the server with Express 
- [x] Run the UI with the server 
- [x] Add following options on the UI: {Menu, Order, Track}
- [x] Implement Menu link, Order link and Track Link
- [] Make the track link a `msal` protection
- [] Add an image for the track link
- [] Initialize the db
- [] Configure the db instance
- [] Connect the api with db 
- [] Place an order with UI 
- [] Save the request in db 
- [] Create a logging mechanism for each action (what is similar to log4j. Is it `morgan`??)**


### URL

It stands for Uniform Resource Locator.

BNF-form:

> <scheme>:<schem-specific-part>


### MSAL

Microsoft Authentication Library provides token to authenticated users. 
It is a method to provide security across URL links.

The credentials uses Tenenant ID, Client ID, and Client Secret.

### JS

There are multiple formatting frameworks for the JS. The two I am aware of are CommonJS and ES6. Though ES6 is the accepted standard, CJS is default for NodeJS (further every backend shoudld be aware).

CJS uses `module.exports` and `require` to load a module.
ES6 uses `import` and `export` to send out a module.


               
### CONTRIBUTORS

- [Mowgli](https://github.com/fabrezi)
- [GIGA-Money](https://github.com/GIGA-Money)