const moduleD = require("./moduleD");

console.log(moduleD);

//moduleD에서 export.var4 와 module.exports = {
    // var5,
    // fun4,
    // fun5
//}; 를 썼을때 마지막 module.exports={} 가 반환된다.
//즉 두개를 섞어서 쓰면 안됨