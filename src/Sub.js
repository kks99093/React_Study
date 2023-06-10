import React from 'react';
import { useState } from 'react';

function Sub()  {    

    const [number, setNumber] = useState(1);
    //useState(리액트 훅스 함수중에 하나) => 함수 실행에따라 렌더링(변동되는) 변수를 만들때 사용 [사용할 변수명, set사용할 변수명(보통 이렇게씀)] = useState(초기값);
    const double = () =>{
       /*setNumber(number * 2); useState에서 적어놓은 set사용할 변수명 사용
       console.log(number); 밑의 return에서 리렌더링 될때 한번에 업데이트 되는거라 여기서는 아직 number*2가 적용이 안돼있음 
                            그렇기에 해당 변수를 사용할거라면 밑의 doubleNumber 처럼 따로 변수에 담아서 사용해야함
                
       const doubleNumber = number * 2;
       console.log(doubleNumber);
       */
  
      //useState의 set변수명 을 연속으로 사용하고 싶을때는 위처럼 변수를 새로 만드는게 아니라
      //prevState를 이용하여 밑처럼 사용
  
       setNumber((prevState) =>{
        return prevState * 2
       })
  
       setNumber((prevState) => prevState * 2); //위의 화살표 함수는 이런식으로 줄일수 있음 => 바로 뒤에오는걸 리턴한다는 뜻
  
    };

    const[number2, setNumber2] = useState(1);
    const add = () =>{
        setNumber2(number2+1);
    }
    /*
        const sample = [
            {id:1, name:"가나다"}
        ]
        const[users, setUsers] = useState(sample);
        const download = () =>{
            sample.push({id:2, name:"라마바"});
            이런식으로 적으면 레퍼런스(주소값)가 같기에 렌더링 되지 않음
            그렇기에 스프레드나 concat으로 복사를 통한 렌더링을 변경해줘야함 (App.js에 적어놨음)
            const a = sample.concat({id : 2, name: "라마바"});
            setUsers(a)            
            
        }
    */
    
    return(
        <>
            <div>number : {number}</div>
            <button onClick={double}>곱하기</button>

            <div>number2 : {number2}</div>
            <button onClick={add}>더하기</button>            

        </>
        /*html에서는 <button onclick="click()"> 이런식으로 썻지만
        리액트에서는<button onClick={click}> 이런식으로 camelCase를 사용
        */
    )

}

export default Sub;