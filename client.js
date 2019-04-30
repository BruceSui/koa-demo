const Koa = require('koa');
const http = require('http');
const jwt = require('koa-jwt');

const app = new Koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});
// Unprotected middleware
app.use(function(ctx, next){
    if (ctx.url.match(/^\/public/)) {
      ctx.body = 'unprotected\n';
    } else {
      return next();
    }
});

// Middleware below this line is only reached if JWT token is valid
app.use(jwt({ secret: 'shared-secret' }));

// Protected middleware
app.use(function(ctx){
  if (ctx.url.match(/^\/api/)) {
    ctx.body = 'protected\n';
  }
});

// var options={
// 	host:'39.106.198.77',
// 	path:'/car/api/searchBrand',
// 	port:8100,
// 	method:'GET',
// 	headers:{
// 		'Content-Type':'application/jsona',
// 	}
// }
// var callback = function(response) {
//     let body = '';
//     response.on('data', function(data) {
//         body += data;
//     });
//     response.on('end', function() {
//         console.log(body);
//     })
// }
// app.use(async (ctx, next) => {
//     await next();
//     let request = http.request(options, callback);
//     request.end();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// })

app.listen(3000);