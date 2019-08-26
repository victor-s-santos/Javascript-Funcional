sudo docker run \
    --name postgres \
    -e POSTGRES_USER=vsantos93 \
    -e POSTGRES_PASSWORD=swordfish \
    -e POSTGRES-DB=herois \
    -p 5432:5432 \
    -d \
    postgres

sudo docker ps