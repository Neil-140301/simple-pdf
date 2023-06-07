FROM node:latest

WORKDIR /app

ENV ORIGIN=http://localhost:3000

COPY package*.json ./

RUN npm install --omit dev

COPY . .

EXPOSE 3000

CMD ["npm","run", "start"]
