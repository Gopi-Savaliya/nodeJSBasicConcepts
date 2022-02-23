const fs = require('fs');

fs.writeFileSync('Hello.txt', 'Hello World!');
console.log(fs.readFileSync('Hello.txt').toString());
console.log(__dirname);
console.log(__filename);
