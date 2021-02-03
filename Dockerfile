# Pull node image from docker hub
FROM node:10-alpine
# Set working directory
RUN mkdir -p /var/www/nestjs-intro
WORKDIR /var/www/nestjs-intro

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /var/www/nestjs-intro/node_modules/.bin:$PATH
# create user with no password
RUN adduser --disabled-password chat

# Copy existing application directory contents
COPY . /var/www/nestjs-intro
# install and cache app dependencies
COPY package.json /var/www/nestjs-intro/package.json
COPY package-lock.json /var/www/nestjs-intro/package-lock.json

# grant a permission to the application
RUN chown -R chat:chat /var/www/nestjs-intro
USER root

# clear application caching
RUN npm cache clean --force
# install all dependencies
RUN npm install

EXPOSE 3004
CMD [ "npm", "run", "start:dev" ]
