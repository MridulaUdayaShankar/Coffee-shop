# Coffee-shop
## Getting started
This is a Coffee Shop logger app with MySQL, Node, Express, Handlebars and an ORM, which follows the MVC design pattern: 
Node and MySQL to query and route data in your app and Handlebars to generate HTML

### Pre-requisites
* Coffee Shop is a restaurant app that lets users input the names of coffee they'd like to drink
* Whenever a user submits a coffee name, the app will display the burger on the left side of the page -- waiting to be finished
* Each coffee in the waiting area also has a Drink! button. When the user clicks it, the coffee mug will move to the right side of the page.
* The app will store every coffee in a database, whether finished drinking or not.

The file structure looks like this:
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
        
* Heroku is for hosting

#### Installation
* NodeJs
* Node package modules for express,express-handlebars,body-parser,mysql
