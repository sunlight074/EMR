FROM node:11.4.0

RUN npm install -g sh
RUN npm install -g json-server

WORKDIR /data
VOLUME /data
COPY user.json /data

CMD json-server --watch user.json --host 0.0.0.0 --port 3000