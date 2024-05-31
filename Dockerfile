FROM node:18

RUN npm install -g @angular/cli

RUN mkdir -p /home/app

WORKDIR /home/app

EXPOSE 4200

CMD ["npm","run","start:dev"]