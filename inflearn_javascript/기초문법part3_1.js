console.log('#9 함수');
// function bok(함수에서 사용하려는 인자를 받는 공간) {
// 	함수를 실행시키면 어떤 처리를 할지 작성
// }

function bok(main) {
	console.log(`${main} 볶음밥`);
};

// bok(main: any) :void
bok('새우');
bok('제육');

// function sum(두개의 인자를 받아서 합을 출력)
function sum(a, b) {
	console.log(a + b);
};

sum(10, 20);

console.log('# 인자와 매개변수(Arguments vs Parameter');

// 인자를 더 정확하게 구분하기 위한 용어
// 인자 : 함수의 입력 값, Argument 
// 매개변수 : 함수를 정의할 때 작성하는 필요인자, 입력 변수, Parameter

function a() {
	const b = 10; // 변수 선언
	console.log(b); // b라는 변수를 출력
}

console.log('# 지역변수');

a(); // a 라는 함수를 호출 // 10
// console.log(b); // 함수 밖에서 b라는 변수를 출력 => b를 찾을 수 없다.. (b is not defined)
// 내부에서 선언된 변수(지역변수, 로컬변수)는 중괄호로 감싸진 블록(Block) 안으로 제한됨. 함수, 조건문, 반복문에서도 동일

console.log('# 전역변수');
const d = 10; // 함수 외부에서 선언된 변수(전역변수, 글로벌변수) : 함수 내부에서 접근하는 것이 가능
  
function c() {
	console.log(d);
};

c(); // 10
console.log(d); // 10

console.log('# 함수 내부에 선언된 로컬변수');

function c2() {
	const d = 20; // 글로벌변수 이름 = 로컬변수 : 동일한 이름, 
								// 함수에서 재선언되면, 함수 내부에서는 내부에서 선언된 로컬변수에만 접근할 수 있다!
	console.log(d)
};

c2(); // 20
console.log(d); // 10

console.log('# 함수와 인자')
function sum2(c, d = 0){ // 매개변수들의 기본값 Defalut Parameter를 지정
	console.log(c + d);
}

sum2(10); // 인자 하나만 전달 -> sum함수에 적합하지 않은 호출방식이지만, 문서상에서 에러가 발생하진 않음.
				// NaN(Not a number). c = 10, d = undefined 를 호출한 것과 동일.
// Defalut Parameter : 인자 d에 들어갈 값을 전달받지 못했다면, 기본값 0 으로 할당. 
// 										=> 10 + 0 = 10; 이 출력됨
sum2(10, 20); // 2개의 인자를 다 전달하면, 기본값은 무시되고 전달된 값이 들어가서 값 출력됨.

console.log('# arguments 객체');
function sum3(c, d = 0){
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
sum3(10, 20, 30); // 인자가 많을 때 -> arguments 객체에는 전부 받아서 배열처럼 저장되고 배열저럼 접근할 수 있다. 
								// console.log(arguments[2]); 까지 접근해서 볼 수 있다!!!

console.log('# 나머지 매개변수(Rest Parameter)');
function print(m, n, ...rest) { // 콘솔로그로 각각 출력. 나머지 남는 인자들은 Rest Parameter 이용!
	console.log(m);
	console.log(n);
	console.log(rest);
}

print(10, 20, 30, 40, 50, 60, 70);

console.log('# 함수의 반환값(Return)');
function sum(a, b) {
	return a + b; // 함수 내부에서 콘솔로그를 하는게 아니라, 함수는 계산만 해서 계산결과를 반환.
}

console.log(sum(10, 20)); // 출력에서 이 함수가 리턴하는 값을 출력하도록

