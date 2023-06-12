import { useEffect, useState } from "react";

function Effect() {
  const [data, setData] = useState(0);
  const download = () =>{
    let downloadData = 5;
    setData(downloadData);
  }

  // useEffect 첫번쨰 인자는 함수, 두번째 인자는 dependencylist
  // 특정값이 변경될때마다 어떤 함수를 실행시키고 싶을때 사용
  // 첫번째 인자는 useEffect가 실행될때 무엇을 할지 결정
  // 두번째 인자는 useEfeect를 언제 실행할지를 결정 ([]이렇게 비워두면 최초에만 실행, [data] 이런식으로 해두면 data라는 변수가 변경될때마다 실행)
  // 실행시점 
  // (1)해당 함수가 최초 실행되서 그림이 그려질때
  // (2)상태 변수가 변경될 때

  useEffect(() =>{
    console.log("useEffect실행됨");
    download();
  }, []);

  /*
    useState는 주소값이 변경되지 않으면 새로 그리지않지만
    useEffect를 통해 주소값이 변경없이 특정데이터(변수)의 값변경을 감지하여 새로 그릴수있음
  */



  return(
    <>
      <div>
        <h1>데이터 : {data}</h1>
        <button onClick={() => {setData(data+1);}}>더하기</button>
      </div>
    </>
  );
}


export default Effect;