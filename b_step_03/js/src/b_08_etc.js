// b_08_etc.js

var hr ='--------------------------------';

// 변수의 차이
var n = 10;
console.log( n );
n = 3; 
console.log( n );
var n2 = n; // 깊은 복사_값 자체를 복사_원본의 값이 달라진다해도 카피한 애가 달라지지 않음
console.log( n, n2 );
n = 30; 
console.log( n, n2 );

console.log( hr );
// ------------------------------
// 참조 변수
var arr = [1,2,3];
console.log( arr );
var arr2 = arr;  // 얕은복사( 주소값을 copy )
console.log( arr, arr2 );

arr.push(4);
arr[0] = 5;
console.log( arr );
console.log( arr2 );

arr.sort();
console.log( arr );
console.log( arr2 );

console.log( hr );
// 참조변수를 깊은 복사 ( 주소가 아닌 값 자체를 copy )
console.log( arr );

// var copyArr = [arr[0], arr[1], arr[2], arr[3]];
var copyArr = [];
var i=0;
for( ; i < arr.length; i+=1 ){
  copyArr[i] = arr[i];
}

console.log( copyArr );
arr.reverse();
console.log('arr: ', arr );
console.log('copyArr: ',  copyArr );


console.log( hr );
// --------------------------------------

var idx = 0;
var nArr = [idx];
nArr[1] = idx;
nArr[11] = ['a','b','c'];
console.log( nArr );
console.log( nArr[11] );
var nArrGroup = nArr[11];
console.log( nArrGroup[2] );
console.log( nArr[11][2] );

var ar_01 = ['a','c','f'];
var ar_02 = ['0','ar','ccf',[1,2,3]];
var ar3 = [10, 7, 6, 3, ar_01, ar_02];

console.log( ar3[4][2] );
// console.log( ar_01[2] );
console.log( ar3[5][3][0] );
console.log( ar_02[3][0] );

console.log( hr );
// ---------------------------------
var obj = {
  'coffee':'americano',
  'juice':[
    'grape', 
    'apple',
    'orange', 
    {
      'ade':'lemon',
      'slush':'milk'
    }]
};

console.log( obj.coffee );
console.log( obj['coffee'] );
console.log( obj.juice[2] );
console.log( obj.juice );
console.log( obj.juice[3] );
console.log( obj.juice[3].slush );
console.log( obj.juice[3]['slush'] );


// 
// 카드리스트
//  이미지:이미지명, 제목:제목내용, 내용:설명, 링크:링크주소, 옵션: 인기/최신/추천
var cardList = [
  {img: 'img.png',
  title: 'title content',
  content: ['content', 'content2'],
  ankder : 'linkData',
  option: ['best', 'new' ]},
  {img: 'img.png',
  title: 'title content',
  content: ['content', 'content2'],
  ankder : 'linkData',
  option: ['best', 'new' ]},
  {img: 'img.png',
  title: 'title content',
  content: ['content', 'content2'],
  ankder : 'linkData',
  option: ['best', 'new' ]}
];

console.log( cardList[0].option[1] )