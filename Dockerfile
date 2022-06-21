FROM node:slim

COPY . /usr/local/echo
RUN cd /usr/local/echo && npm i

WORKDIR /usr/local/echo
CMD ["node", "."]

