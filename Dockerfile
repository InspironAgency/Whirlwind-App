FROM node:lts-alpine

ENV NODE_ENV=production
ARG NPM_BUILD="npm install --omit=dev"
EXPOSE 8080/tcp

LABEL maintainer="Whirlwind Studio"
LABEL summary="Whirlwind Proxy Image"
LABEL description="Whirlwind proxy deployment."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN $NPM_BUILD

COPY . .

ENTRYPOINT [ "node" ]
CMD ["src/index.js"]
