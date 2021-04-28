let count = 0;

console.log("프로세스를 실행시킨 노드의 경로: ", process.execPath);
console.log("프로세스를 실행된 경로: ", process.cwd());
console.log("운영체제의 환경변수 값 읽기: ", process.env.JAVA_HOME);
console.log(process.env);

const timerId = setInterval(() => {
    console.log(new Date().toLocaleDateString());
    count++;
    if(count === 5 ) {
        process.exit();
    }
}, 1000);