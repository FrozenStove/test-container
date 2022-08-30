# alpine indicates stripped down version of anything (can be node, mongo, etc)
FROM node:alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
# RUN apk add --no-cache python2 g++ make
WORKDIR /app
# COPY ["package.json", "package-lock.json*", "./"]
COPY package.json /app
# COPY package.json /app
RUN npm install

COPY ./ ./
# CMD ["node", "server/server.js"]
CMD ["npm", "run", "start"]
