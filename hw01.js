var studentScore = 70;

// 레터 그레이드 변수 선언
var letterGrade;

// 점수에 따라 레터 그레이드 부여
if (studentScore >= 90) {
    letterGrade = 'A';
} else if (studentScore >= 80 && studentScore < 90) {
    letterGrade = 'B';
} else if (studentScore >= 60 && studentScore < 80) {
    letterGrade = 'C';
} else if (studentScore >= 40 && studentScore < 60) {
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

// 결과 출력
console.log(`학생의 점수는 ${studentScore}점이고, 레터 그레이드는 ${letterGrade}입니다.`)