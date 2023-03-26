# syntax=docker/dockerfile:1
   
FROM node
WORKDIR /3churbana
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]