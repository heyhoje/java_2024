console.log("#1 변수와 상수");

// 변수, 저장공간 할당. 선언 후 나중에 값을 초기화 가능
let hi;
hi = '정은지';

let hi2 = '정은지';
hi2 = '안녕하세요';
console.log(hi2);

// 상수, 수정x. 반드시! 선언할 때 값을 초기화(변수에 값을 할당) 해야한다!
const hello = '안녕!!';
// hello = 123123; 밑에서 수정 불가능
console.log(hello);

// var : 변수의 중복을 제한하고 있지 않음. let과 다르게 에러를 발생시키지 않고 실행시킴. 

console.log("#2 원시 데이터 타입");
// 원시 데이터 타입 : 객체가 아니면서 메소드도 가지지 않는 데이터
// string, number, bigint, boolean, undefined, null, symbol

const number = 123n;
console.log(typeof number);

const name = '정은지';
console.log(typeof name);

// '', "" vs ``.
const age = 20;
const job = '개발자';
const msg = '저는 ' + job + '이고, ' + age + '살 입니다.';
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg);
console.log(msg2);

const isTrue = true;
console.log(typeof isTrue);

null; // 값이 아예 존재하지 않는다.
undefined; // 값이 아직 지정되지 않았다. 기본 셋팅

let some;
console.log(some);

console.log("#3 참조 데이터 타입");
// 참조타입 변수 : 원시타입 변수들의 집합. 고정된 크기가 아니라 Heap이라는 곳에 별도의 공간에 값을 저장. 
// 변수에는 이 힙Heap 을 가리키는 '메모리 주소 값' 만 저장됨. -> 실제로 이 변수를 사용할 때, 이 주소값을 '참조'해서 사용!
// 배열, 객체 / 함수

// 배열 [대괄호]
const arr = [1, 2, 3];
console.log(arr);
console.log(arr[0]);

// 객체 {중괄호, property = 키와 값이 연결된 프로퍼티} -> obj라는 객체에 프로퍼티로 구성된 것
const obj = {
	name : '정은지',
	job : '개발자',
};
console.log(obj);
console.log(obj.name); // .점 표기법
console.log(obj['job']); // [] 대괄호 표기법, 대괄호 안에 키값을 '문자열'로 지정!

// 배열과 객체는 map에 중첩을 시킬 수 있다. 
const arr2 = [1, 2, 3, [4, 5]];
console.log(arr2);

const arr3 = [1, 2, 3, {name : '정은지' }];
console.log(arr3);

const obj2 = {
	arr : [1, 2, 3],
	something : {
		name : '정은지',
	}
}
console.log(obj2);

console.log('#4 연산자');
// 산술연산자(+, -, *, /, 모듈러 %, 지수 **)

console.log(10 % 3);
console.log(2 ** 3);

// 증감 연산자(++, --)
let num = 10;
num++;
console.log(num);

num--;
console.log(num);

// 비교 연산자(>, <, >=, <=, ==/===)
const a = 123;
const b = '123';
console.log(a == b); // true, 추상 비교
console.log(a === b); // false, 엄격 비교(값의 타입까지 정확하게 비교)
// 일반적인 케이스에서는 항상 '===' 를 사용!

const c = 10;
const d = 20;
console.log(c !== d);// true

// 논리 연산자(%%, ||, !)
const e = 2 < 3;
const f = 30 > 50;

console.log(e && f); // false
console.log(e || f); // true
console.log(!e); // false

// 삼항 연산자
// 조건 ? 참일 때 실행될 부분 : 거짓일 때 실행될 부분
console.log(2 < 3 ? "참" : "거짓"); // 참

// 널리쉬(?? : 여러개의 피연산자 중 값이 확정되어 있는 변수를 찾음)
const aa = undefined;
const bb = null;
const cc = '정은지';
console.log(aa ?? bb ?? cc); // 정은지

// 비트 연산자(이진연산, binary) : &, |, ^, <<, >> 이런게 있구나 정도

// 대입 연산자(=, 복합대입연산자 가능 : +=, -=, *=, /=, %=, **=)
let num2 = 10;
num2 = num2 + 2;
num2 += 2;

// 전개 구문(반복이 가능한 어떤 객체에 적용할 수 있는 문법/ 배열, 문자열 등)가지고 있는 요소들을 각각 꺼내서 전개, 펼치는 역할
// 모던 자바스크립트에서 유용하고 많이 쓰이는 부분. 
const numbers = [1, 2, 3];
console.log(numbers); // 배열로써 출력, 열어보면 각각의 인덱스에 요소들이 들어있음
console.log(...numbers); // 인덱스 없이 안에 요소들이 전부 꺼내져서, 펼쳐져서 출력

const numbers2 = [4, 5, 6];
const newNumbers = [...numbers, ...numbers2];
console.log(newNumbers);