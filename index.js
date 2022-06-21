'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('koa2-cors');
const BodyParser = require('koa-bodyparser');

// Create koa webserver.
const app = new Koa();

// Always enable CORS for statics or apis.
app.use(Cors());

// Start body-parser only for APIs, which requires the body.
app.use(BodyParser());

// For backend APIs, with specified path, by /terraform/v1/host/
// Note: We should move all /terraform/v1/mgmt/ APIs to platform module.
const router = new Router();

// Echo client information.
router.all('/', async (ctx) => {
  ctx.body = {
    ip: ctx.request.ip,
    method: ctx.request.method,
    path: ctx.request.path,
    header: ctx.request.header,
    query: ctx.request.query,
    body: ctx.request.body,
  };
});

app.use(router.routes());

app.listen(8080, () => {
  console.log(`Server start on http://localhost:8080`);
});

