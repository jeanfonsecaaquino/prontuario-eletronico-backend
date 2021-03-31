const { configure, getLogger } = require('log4js');

configureLogger = () =>{
    configure({
        appenders: {
            prontuarioEletronico: { type: 'file', filename: 'logs/prontuario-eletronico.log' },
          console: { type: 'console' } 
        },
        categories: { default: { appenders: ['prontuarioEletronico', 'console'], level: 'info' } },
      });
    const logger = getLogger("prontuario-eletronico");
    return { logger }
}

const { logger } = configureLogger()

module.exports = {
    info: (...args) =>{
        logger.info(args)
    }
}