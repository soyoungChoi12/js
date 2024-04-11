function introduce(name, birth, nationality, job) {
    var lines = [ 
    `안녕하세요, 반갑습니다.`,
    `제 이름은 ${name}입니다.`,
    `생년월일은 ${birth}입니다.`,
    `저는 ${nationality} 사람입니다.`,
    `직업은 ${job}입니다.`,
    `잘 부탁드립니다.`];

    return lines.join('\n'); //join() 메서드를 사용, 줄바꿈 문자를 기준으로 문자열로 합쳐서 출력
    
}
console.log(introduce('나세현', '00.12.15', '한국', '학생'));