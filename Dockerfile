FROM node:wheezy

RUN mkdir /proser
WORKDIR /proser

COPY package.json /proser

RUN npm install
COPY . /proser

EXPOSE 2233

CMD ["npm", "start"]
