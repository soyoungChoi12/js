var people = [
    ['나세현', '학생'],
    ['변백현', '가수'],
    ['이도현', '배우']
];

// for 문을 사용하여 배열 순회 및 출력
for (var i = 0; i < people.length; i++) {
    var person = people[i];
    console.log(`${person[0]} 씨의 직업은 ${person[1]}입니다.`);
}