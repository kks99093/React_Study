//import { useEffect } from 'react';
import './App.css';
import Sub from './Sub';
/*
리액트 엔진 - 데이터변경을 감지하여 UI를 그려주는 엔진
리액트는 결국 index.html 파일 하나만 열리고 그안의 body를 바꾸는 형식으로 페이지를 이동시킨다
(SPA - Single Page Application)
즉, <a>태그를 쓸수 없음
*/

//규칙
// 변수의 선언은 let 또는 const로만 한다  => var사용 금지 (var는 스코프를 꼬이게 하는 주범)
// return시에는 하나의 dom(태그)만 리턴해야한다
// return하는 태그 안에서 변수에 대한 if문은 사용할 수 없음 대신 삼항연산자 사용 가능 




//배열 복사 추가 제외
/*
스프레드 복사하기
const a = [1,2,3];
const b = [...a];
b.push(4) 
a는 1,2,3
b는 1,2,3,4 



concat 추가하기
const a2 = [1,2,3,];
const b2 = a2.concat(4)
a2는 1,2,3
b2는 1,2,3,4
++스프레드에서 [...a,4] 이런식으로 적으면 concat처럼 사용 가능
++스프레드에서 [0,...a,4] 이런식으로도 사용할 수 있음



filter 걸러내기
const a3 = [1,2,3];
const b3 = a3.filter((n) => {return n != 1;})  filter는 boolean을 return 받음
a3는 1,2,3
b3는 2,3



slice 잘라내기
const a4 = [1,2,3];
const b4 = a4.slice(0,2);
const c4 = [...a4.slice(0,2),4,...a4.slice(2,3)] 이런식으로 중간에 값을 넣을 수 있음
a4는 1,2,3
b4는 1,2
c4 = 1,2,4,3



map 반복(for, foreach)처럼 복사하기/ for, foreach와는 다르게 다르게 값을 리턴해주기 때문에 가져온 리스트를 view로 뿌리기 좋다
const a5 = [1,2,3];
const b5 = a5.map((n) => n+10);  {}중괄호를 안쓰면 return 생략가능
스프레드와는 다르게 중간에 값을 가공할 수 있다



수정하기
const users = [
  {id:1, name:"가", phone:"111"},
  {id:2, name:"나", phone:"222"},
  {id:3, name:"다", phone:"333"},
];

const updateUserDto = {
  id:2, name:"라"
};

const newUsers = users.map((user) => user.id === updateUserDto.id ? {...user, ...updateUserDto} : user);

*/




function App() {
  let list = [1,2,3];

  // 이런식으로 Sub을 따로 빼놓으면 좋은점은 저 Sub에 담긴 것들을 제어할 수 있음
  // (Sub.js에서 if문으로 return을 주지 않는다면 Sub을 다시 그리지 않음)
  // 리액트는 이런식으로 컨포넌트 설계를 잘 해야한다
  // (변경된 것만 다시 그린다던가...)
  return (
    <>
      <div>{list.map((n)=> <h1>{n}</h1> )}</div>
      <Sub />
    </>

  );

    /* 변수 or 함수를 사용할때는 {}를 이용함
    무조건 하나의 태그안에 내용이 다들어있어야함
    <div>{double(number)} </div> 
    <button>Submit</button> 
    이런식으로 두개의 태그가 있을경우 최상위 <div>태그를 만들어 하나로 묶어줘야함
    근데 그렇게 될경우 비어있는 div가 발생하기 때문에 React를 import한후 <React.Fragment>를 이용해서 최상위 태그를 만들면서 비어있는 div는 없애줌
    근데 이것도 귀찮기때문에 React에서 <> </>만 적더라도 가능하게 해놨음
    즉, 그냥 <></>만 적으면됨
    */
}

export default App;



/*
유용한 vscode확장 프로그램
ESLint - 문법 체킹해줌
Prettier Code formatter - 코드 자동정렬 해줌
Reactjs code snippets - 리액트 자동완성
*/