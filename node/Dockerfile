FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y wget
    
ENV DOCKERIZE_VERSION v0.6.1
RUN wget --no-check-certificate https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./package*.json /usr/src/app

RUN  npm install && npm set strict-ssl false

COPY . /usr/src/app
