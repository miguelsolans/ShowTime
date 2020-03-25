# NodeJS Version
FROM node:10

# App Directory
WORKDIR /usr/src/app

# Install App dependencies
COPY package*.json ./

RUN npm install

# Ubdle App source
COPY . . 

EXPOSE 3310

# Run App
CMD [ "npm", "start" ]


