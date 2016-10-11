FROM node:wheezy

RUN mkdir /proser
WORKDIR /proser

COPY package.json /proser

RUN npm install
COPY . /proser

EXPOSE 27017 2233

CMD ["npm", "start"]
