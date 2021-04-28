const fs = require("fs").promises;

const data = "오늘은 수요일입니다.\n오늘부터 Node.js 수업을 합니다.";

// fs.writeFile("./data.txt", data);

(async() => {
    try{
        await fs.writeFile("./data.txt", data);
        console.log("파일 저장 완료");
    }catch(err) {
        console.log("파일 저장 실패");
        console.log(err)
    }
    
})();

console.log("다른 작업 실행");

//await는 async를 하고 써야함

//프로세스를 실행시킨 노드의 경로.. 프로세스가 실행된 경로...