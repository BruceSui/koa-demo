const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
    console.log(`End ${ctx.request.method} ${ctx.request.url}...`);
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller.con());

app.listen(3000);
