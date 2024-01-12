ARG GO_VERSION
ARG HUGO_VERSION

FROM golang:${GO_VERSION}-alpine

RUN apk add git
# alternatively apt install hugo ? need sudo?
RUN go install -v github.com/gohugoio/hugo@v${HUGO_VERSION}

COPY . .

ENTRYPOINT [ "hugo", "server" ]