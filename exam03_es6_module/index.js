import moduleA from "./moduleA.js"

console.log(moduleA.name);
console.log(moduleA.age);

import fun1 from "./moduleB.js";
fun1();


import moduleC from "./moduleC.js";
console.log(moduleC.var2);
console.log(moduleC.var3);
moduleC.fun2();
moduleC.fun3();


import {var4, var5, fun4, fun5} from "./moduleD.js";
// import moduleD from "./moduleD.js";
// export default 로 선언된것은 객체이기때문에 이렇게 사용 가능
// 하지만 moduleD는 그냥 export이기 때문에 구조분해 할당을 사용해야함
console.log(var4);
console.log(var5);
fun4();
fun5();

import moduleE, {var6, var7} from "./moduleE.js";// export default를 먼저 써야함
moduleE.fun6();
moduleE.fun7();
console.log(var6);
console.log(var7);
