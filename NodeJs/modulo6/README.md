## ---- Postgres

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
'''
com o comando acima, se tem acesso ao interior do container podendo rodar qualquer comando dentro do mesmo
'''
sudo docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer
'''
esta linha possibilita o acesso a interface administrativa obtida com o adminer, e o -d garante que este execute em segundo plano
'''
## ---- MongoDB

sudo docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senha \
    -d \
    mongo:4

sudo docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

'''
igualmente ao postgres, esta linha possibilita o acesso a interface administrativa obtida com o mongoclient, e o -d garante que este execute em segundo plano
'''

sudo docker exec -it mongodb \
    mongo --host localhost -u admin -p senha --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'vsantos', pwd: 'senha', roles:[{role: 'readWrite', db: 'herois'}]})"

'''
igualmente com o postgres, com o comando acima, se tem acesso ao interior do container podendo rodar qualquer comando dentro do mesmo, no caso, cria-se um usuário.
'''

