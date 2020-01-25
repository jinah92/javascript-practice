/* const { URL } = require('url');
// const url = require('url');
// const URL = url.URL;

const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1-001001000#anchor');
console.log(myURL.searchParams.get('sercate1'));
// console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1-001001000#anchor');
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl)); */

/* 복습 */
const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1-001001000#anchor');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));       // url.format(객체): 분해되었던 url 객체를 다시 원래 상태로 돌림

const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1-001001000#anchor');
console.log('url.parse(): ', parsedUrl);                // url.parse(주소) : 주소를 분해
console.log('url.format(): ', url.format(parsedUrl));   // url.format(객치) : 분해된 url 객체를 다시 원래 상태로 돌림