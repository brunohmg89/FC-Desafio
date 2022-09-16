FROM golang:1.19.1-alpine3.16

WORKDIR /usr/src/app

COPY hello.go ./

RUN go mod init hello && \
    go run .
