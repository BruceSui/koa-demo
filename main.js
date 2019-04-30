// document.write('<h1>Hello World</h1>');
// const compose = require('koa-compose');

// function one(ctx, next) {
//     console.log('111');
//     console.log(next);
//     console.log(ctx);
//     next();
// }
// function two(ctx, next) {
//     console.log('222');
//     next().then(function () {
//         console.log('after 222');
//     });
// }
// function three(ctx, next) {
//     console.log('333');
//     next();
// }

// const middlewares = compose([one, two, three]);
// middlewares().then(function() {
//     console.log('end');
// })


// function compose1(middlewares) {

//     return dispatch(0);
//     function dispatch(i) {
//         fn = middlewares[i];
//         if(!fn) return Promise.resolve();
//         return Promise.resolve(fn(function next() {
//             return dispatch(i + 1);
//         }))
//     }
    
// }
// function one1(next) {
//     console.log('111');
//     next().then(() => {
//         console.log('end');
//     })
// }
// function two1(next) {
//     console.log('222');
//     next();
// }
// function three1(next) {
//     console.log('333');
//     next();
// }
// const middlewares = compose1([one1, two1, three1]);
// middlewares();

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift());
// console.log(fruits);

const Koa = require('koa');
const http = require('http');
const jwt = require('koa-jwt');

const app = new Koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
// app.use(function(ctx, next){
//     return next().catch((err) => {
//         if (401 == err.status) {
//             ctx.status = 401;
//             ctx.body = 'Protected resource, use Authorization header to get access\n';
//         } else {
//             throw err;
//         }
//     });
// });
// Unprotected middleware
// app.use(function(ctx, next){
//     if (ctx.url.match(/^\/public/)) {
//       ctx.body = 'unprotected\n';
//     } else {
//       return next();
//     }
// });

// Middleware below this line is only reached if JWT token is valid
// app.use(jwt({ secret: 'shared-secret' }));

// // Protected middleware
// app.use(function(ctx){
//   if (ctx.url.match(/^\/api/)) {
//     ctx.body = 'protected\n';
//   }
// });

var options={
	host:'39.106.198.77',
	path:'/boss/api/getDemand?page=0&size=20',
	port:8100,
	method:'GET',
	headers:{
		'Content-Type':'application/jsona',
	}
}
var callback = function(response) {
    let body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        console.log(body);
    })
}
app.use(async (ctx, next) => {
    await next();
    let request = http.request(options, callback);
    request.end();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
})

app.listen(3000);


