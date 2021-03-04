let async = require('async');

//串行无关联

// console.time('test');
// async.series([
//     (callback) => {
//         setTimeout(() => {
//             callback(null,'one');
//         },2000)
//     },
//     (callback) => {
//         setTimeout(() => {
//             callback(null,'two')
//         },5000)
//     }
// ],(err,result) => {
//     console.log(result);
//     console.timeEnd('test');
// })
async.series({
    one:(callback) => {
        callback(null,'1');
    }
})