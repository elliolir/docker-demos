FROM node:8

EXPOSE 3000

WORKDIR /app

COPY index.js package.json package-lock.json ./
RUN npm i
CMD node index.js
