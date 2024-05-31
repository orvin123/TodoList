FROM node:18

RUN npm i -g nodemon
RUN mkdir -p /home/app

WORKDIR /home/app/server

EXPOSE 3000

CMD ["nodemon","app.js"]