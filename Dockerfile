from node:10.15.3-alpine

ARG folder=/usr/src/prontuario-eletronico-backend

RUN mkdir -p $folder

WORKDIR $folder

COPY . $folder

RUN npm install

EXPOSE 8090

CMD node index.js