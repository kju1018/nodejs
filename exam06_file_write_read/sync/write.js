const fs = require("fs");

const data = "오늘은 수요일입니다.\n오늘부터 Node.js 수업을 합니다.";

fs.writeFileSync("./data.txt", data);

console.log("파일 저장이 완료됨");