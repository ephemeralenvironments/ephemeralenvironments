ARG GO_VERSION
ARG HUGO_VERSION

FROM golang:${GO_VERSION}-alpine

RUN apk add git
# alternatively apt install hugo ? need sudo?
RUN go install -v github.com/gohugoio/hugo@v0.114.1

WORKDIR /app

COPY . .

EXPOSE 1313

CMD ["hugo", "server", "--bind", "0.0.0.0"]
