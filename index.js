const express = require("express");
const app = express();

app.use(express.json()) 

const requireDirectory = require('require-directory');

const routes = requireDirectory(module, './modules');
const log = require('./util/log')

const routeKeys = Object.keys(routes)

routeKeys.forEach(key => {
    routes[key]?.router?.loadRoute(app)
    if(routes[key]?.router){
        log.info(`Rotas ${key} carregada`)
    }
});

app.listen(8090);