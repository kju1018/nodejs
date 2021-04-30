

function setUserId(userId) {
       global.userId = userId; 
}

globalThis.fun1 = () => {
    console.log("global.fun1() 실행");
}

// module.exports = {
//     setUserId
// }
//이렇게 {}안에 넣어주면 
//const setUserId = require("./global_2");

// setUserId.setUserId("user1"); 이렇게 사용해야함

module.exports = setUserId;
//이렇게 직접 하나만 넣어주면
//const setUserId = require("./global_2");
//setUserId("user1"); 이렇게 바로 사용 가능
