sudo docker run \
    --name postgres \
    -e POSTGRES_USER=vsantos93 \
    -e POSTGRES_PASSWORD=swordfish \
    -e POSTGRES_DB=herois \
    -p 5432:5432 \
    -d \
    postgres

sudo docker ps
sudo docker exec -it postgres /bin/bash

sudo docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer