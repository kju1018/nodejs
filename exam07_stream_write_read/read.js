const fs = require("fs");

//highWaterMark: chunk 바이트 수
const readStream = fs.createReadStream("./data.txt", {highWaterMark:9});

readStream.on("data", (chunk) => {
    console.log(chunk.toString());
});

readStream.on("end", () =>{
    console.log("파일 읽기 성공");
});

readStream.on("error", (err) => {
    console.log(err);
});