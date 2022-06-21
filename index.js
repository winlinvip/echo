'use strict';

const Koa = require('koa');
const Cors = require('koa2-cors');
const BodyParser = require('koa-bodyparser');

// Create koa webserver.
const app = new Koa();

// Always enable CORS for statics or apis.
app.use(Cors());

// Start body-parser only for APIs, which requires the body.
app.use(BodyParser());

// Echo client information.
app.use(async (ctx, next) => {
  ctx.body = {
    ip: ctx.request.ip,
    method: ctx.request.method,
    path: ctx.request.path,
    header: ctx.request.header,
    query: ctx.request.query,
    body: ctx.request.body,
  };
});

app.listen(8080, () => {
  console.log(`Server start on http://localhost:8080`);
});

