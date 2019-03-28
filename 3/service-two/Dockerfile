FROM node:8

EXPOSE 8090

WORKDIR /app

COPY index.js package.json package-lock.json ./
RUN npm i
CMD node index.js
