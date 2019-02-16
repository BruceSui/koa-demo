const Koa = require('koa');
const Router = require('koa-router');

const fs = require('fs');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  console.log(`request: ${ctx.request.method} ${ctx.request.url}`);
  await next();
})

router
  .get('/', (ctx, next) => {
    ctx.response.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    ctx.response.body = ctx.params;
  })
  .put('/users/:id', (ctx, next) => {
    // ...
    ctx.response.body = ctx.params;
  })
  .del('/users/:id', (ctx, next) => {
    // ...
    ctx.response.body = ctx.params;
  })
  .all('/users/:id', (ctx, next) => {
    // ...
    ctx.response.body = ctx.params;
  });

  // response
// app.use(async (ctx, next) => {
//   console.log('hello');
//   ctx.response.body = 'aaa';
//   await next();
// });

app.use(router.routes);

// log
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   console.log(new Date().getTime());
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.url} -${ms}ms`);
// });

app.listen(3000);