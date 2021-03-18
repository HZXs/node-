const crypto = require('crypto');
let str = 'abcd';
const password = 'FnJL7EDzjqWjcaY9';
const iv = 'FnJL7EDzjqWjcaY9';
// 加密
const cipher = crypto.createCipheriv('md5', password, iv);
cipher.update(str,'utf8', 'hex')
let data3 = cipher.final('hex');
console.log('加密')
console.log(data3);

// 解密
const decipher = crypto.createDecipheriv('md5', password, iv);
decipher.update(data3, 'hex', 'utf8')
let data4 = decipher.final().toString();
console.log('解密')
console.log(data4);

