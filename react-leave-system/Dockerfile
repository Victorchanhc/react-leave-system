FROM node:lts
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
RUN yarn install 
RUN yarn build
CMD ["sh", "-c", "yarn knex migrate:latest && yarn knex seed:run && yarn start"]
