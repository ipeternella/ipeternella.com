FROM node:14-buster

WORKDIR /app

# specific layer from deps installation (fast caching)
COPY package.json package-lock.json /app/
RUN npm ci

# copy other files and build the project
COPY . /app/
RUN npm run build
CMD npm run serve