FROM node:19.2-alpine3.16

WORKDIR /app

COPY index.js .env package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"]