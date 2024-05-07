console.log('#10 함수(2)');
console.log('# 함수의 표현식');

/* function sum(a, b) {
	console.log(a + b);
}; */

// 변수처럼 const sum에 값을 함수식(함수 이름은 빼고)을 갖다 붙임
const sum = function (a, b) {
	console.log(a + b);
};

sum(10, 20);


console.log('# 화살표 함수');
// 함수 표현식에서 function이라는 키워드를 없애고, 좀 더 단순한 표현방식으로 바꾼것

const sum2 = (a, b) => a + b; // 명령어가 한 줄 일때, 중괄호를 생략하면 return이라는 명령문을 생략할 수 있음
const sum3 = (a, b) => { 
	a + b; // 값이 자동으로 리턴되지 않기 때문에, 값을 꼭 반환해야하는 함수의 경우에는 별도로 return을 써줘야한다!!!
	// return a + b;
};

console.log(sum2(10, 20)); // 30. 정상적으로 a + b 값이 리턴됨
console.log(sum3(10, 20)); // undefined. 중괄호를 넣어주게되면 아무것도 리턴하지 않아서 undefined됨


console.log('# 화살표 함수에서 괄호를 생략할 수 있는 경우');
// ( 인자를 감싸고 있는 괄호 ) : 필요한 인자가 하나인 경우에만 생략 가능

const sum4 = a => { // 인자가 a 하나인 경우
	return a + b;
};

const sum5 = () => 10;  // 인자를 하나도 쓰지 않는 경우. (괄호)를 꼭 써줘야함


console.log('# 일반 함수를 화살표 함수로 바꾸기');
/* function hello() {
	console.log('Hello!');
	console.log('World!');
} */

const hello = () => {
	// 리턴되는 값은 없음. 콘솔로그만 !
	console.log('Hello!');
	console.log('World!');
};

hello();


/* function sum6(a, b) {
	return a + b;
} */

const sum6 = (a, b) => a + b;

console.log(sum6(30, 20));


/* function greeting(user) {
	console.log(`Hello, ${user}!`);
}; */

const greeting = user => console.log(`Hello, ${user}!`);

greeting('정은지');