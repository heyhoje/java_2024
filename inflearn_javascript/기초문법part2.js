console.log('#5 조건문 : if');
// 조건문 : 어떤 지정된 조건이 참/거짓에 따라 서로 다른 코드로 분개하기 위해 사용. 
// 					참 -> A, 거짓 -> B
// if(조건) { 참일 때 실행되는 코드 }

const a = 10;
const b = 20;
const c = 20;

if( a < b ) {
	console.log('a가 더 작아요!');
};

if( a > b ){
	console.log('a가 더 작아요!');
} else {
	console.log('거짓말!!')
};

if ( a > b ) {
	console.log('a가 더 큽니다!');
} else if( b === c ) {
	console.log('b랑 c가 같습니다!');
} else {
	console.log('여기는 언제 출력될까요?');
};

if ( a > b ) {
	console.log('a가 더 큽니다!');
} else if( b !== c ) {
	console.log('b랑 c가 같습니다!');
} else {
	console.log('여기는 언제 출력될까요?');
};

console.log('#6 조건문 : switch');
// switch : 동일한 조건이 주어지고, 그 조건의 값에 따라서 다른 명령어를 실행하게끔 분개

const number = 10;

switch (number) {
	case 1 :
		console.log(number);
		// break; 
	case 2 : 
		console.log(number);
		break;
	default :
		console.log('아무것도 해당되지 않아요!');
}

console.log('#5-6 똑같은 코드를 if문과 switch문으로 각각, 차이점 보기');
// 모듈러 연산을 사용해서, 홀짝 판별

const num = 10;

if ( num % 2 == 0) {
	console.log('짝수!');
} else {
	console.log('홀수');
};

switch ( num % 2 ) {
	case 0 : 
		console.log('짝수!!');
		break;
	case 1 : 
		console.log('홀수!!')
		break;
}

console.log('#7 반복문 : for');

// for (반복을 위한 조건 명세 : 시작값; 반복의 조건; 증감값) { 
//	코드가 들어갈 블럭 };
console.log('----- i -----');
for(let i = 0; i < 5; i++){
	console.log(i);
};

console.log('----- j -----');
let j = 0;
for(; j < 5; j++){
	console.log(j);
};

console.log('----- k -----');
let k = 0;
for(; k < 5; ) { 
	console.log(k++);
};

console.log('----- m -----');
// break; 0부터 6까지만 출력됨.
for(let m = 0; m < 10; m++){
	if( m === 7 ){
		break; // 조건을 체크 -> break; 명령문을 실행해서 반복문을 빠져나오게 됨
	} 

	console.log(m);
};

console.log('----- n -----');
// continue; 7만 건너뛰고 반복됨. 7 빼고, 8부터 조건문 전체가 거짓이 되는 9까지 이어서 출력
for(let n = 0; n < 10; n++){
	if( n === 7 ){
		continue
	}

	console.log(n);
};

console.log('#8 반복문 : while');
console.log('for Of 문');

const arr = [1, 2, 3];
for ( const i of arr ){
	console.log(i);
};

/* forEach랑 for of 랑 어떻게 쓰이고 어떻게 다른지.. (강의노트에 링크 적어둠)
array.forEach(element => {
	
});

arr.forEach((i, index) => {
	console.log(i)

}); */
console.log('while 문');
let w = 0;

while ( w < 10 ) {
	console.log(w++);
}

w = 0;
console.log('do while 문');
// 조건문을 반복문의 시작 위치가 아니라 끝 위치에서 판별함
do {
	console.log(w++);
} while ( w < 10 );