const express = require("express");
const app = express();

const requireDirectory = require('require-directory');

const routes = requireDirectory(module, './modules');
const log = require('./util/log')

const routeKeys = Object.keys(routes)

routeKeys.forEach(key => {
    routes[key]?.router?.loadRoute(app)
    if(routes[key]?.router){
        log.info(`Rotas ${key} carregadas`)
    }
});

app.listen(8090);