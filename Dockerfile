ARG NODE_VERSION
ARG GO_VERSION
ARG HUGO_VERSION

FROM golang:${GO_VERSION}-alpine as builder

RUN apk add git 
RUN go install -v github.com/gohugoio/hugo@v${HUGO_VERSION}

FROM node:${NODE_VERSION}-alpine

COPY --from=builder /go /go

ENV GOPATH /go
ENV PATH $GOPATH/bin:$PATH

RUN apk add git curl tar gzip bash

USER node

WORKDIR /src

COPY --chown=node . .

RUN npm install
RUN git config --global --add safe.directory /src

ENTRYPOINT [ "npm", "run", "dev"]