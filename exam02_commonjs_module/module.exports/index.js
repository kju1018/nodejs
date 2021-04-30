


const moduleA = require("./moduleA");
console.log(moduleA.name);
console.log(moduleA.age);

// const fun1 = require("./moduleB");// 얘 자체가 fun1임 그래서 moduleB()로 실행
// fun1();

const moduleB = require("./moduleB");
moduleB();



const moduleC = require("./moduleC");
console.log(moduleC.var2);
console.log(moduleC.var3);
moduleC.fun2();
moduleC.fun3();

//구조 분해 할당을 이용해서 필요한 것만 사용
const {var5, fun5} = require("./moduleD");//이때 moduleD가 실행이됨
console.log(var5);
fun5();

//const {age1, name1} = require("./moduleA");// 얘는 {}여기 안에 moduleA에서 리턴한 이름으로 해야함 const{age, name} 순서 상관X
// console.log(name);
// console.log(age);