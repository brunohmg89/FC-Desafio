# Desafios Docker - Full Cycle

## Desafio 1 - Criar imagem com Golang

Você terá que publicar uma imagem no docker hub. Quando executarmos:

docker run brunohmg89/codeeducation

Temos que ter o seguinte resultado: Code.education Rocks!

Obs: A imagem do projeto Go precisa ter menos de 2MB =)

## Dockerhub

https://hub.docker.com/r/brunohmg89/codeeducation

## Desafio 2 - Nginx, NodeJs e Banco de dados

Acessando o nginx, o mesmo terá que fazer uma chamada a aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

*Full Cycle Rocks!*

*Lista de nomes cadastrada no banco de dados*

Gere o docker-compose de uma forma que basta apenas rodarmos: ```docker-compose up -d``` que tudo deverá estar funcionando e disponível na porta: 8080.
