FROM node:12-alpine AS builder
WORKDIR /app
COPY . /app/
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM node:12-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]doc
