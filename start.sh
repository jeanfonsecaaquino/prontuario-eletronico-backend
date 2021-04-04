docker build -t pebmed/prontuario-eletronico-backend -f Dockerfile .
docker-compose -p prontuario-eletronico-backend up --scale app=1 -d