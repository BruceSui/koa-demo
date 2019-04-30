
function timeout(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('aaa');
        }, 2000);
    })
    // func('aaa');
}
async function asyncTime() {
    let a = '';
    await timeout().then(v => {
        a = v;
        console.log('then' + a);
    });
    // await timeout(an => {
    //     a = an;
    //     console.log('then' + a);
    // })
    console.log(a);
}

asyncTime();