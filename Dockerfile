FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
COPY .env .
ARG commit_hash
ENV BUILD_ID ${commit_hash}

RUN npm run build
CMD ["npm", "run", "start"]