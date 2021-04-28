const fs = require("fs").promises;

const work = async () => {
    try {
        const data = await fs.readFile("./data.txt");
        console.log(data.toString());
    } catch(err) {
        console.log(err);
    }
};

work();

console.log("다른 작업 실행");