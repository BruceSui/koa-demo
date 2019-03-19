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

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
console.log(fruits);

