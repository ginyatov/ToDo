FROM node:14.3.0 as app
WORKDIR /app/
ADD /package*.json /app/
ADD /yarn.lock /app/yarn.lock
COPY /tsconfig.json /app/
RUN NODE_ENV=production yarn
COPY src/ /app/src
COPY public/ /app/public
RUN yarn build

FROM nginx:stable-alpine
WORKDIR /app/
COPY --from=app /app/build/ /app/
COPY docker/nginx/vhost.conf /etc/nginx/conf.d/default.conf
