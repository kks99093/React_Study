import { useMemo, useState} from 'react';


function Memo() {
    const[list, setList] = useState([1, 2, 3, 4]);
    const[str, setStr] = useState("합계");



    const getAddResult = ()=> {
        let sum = 0;
        list.forEach((i) => sum= sum + i);
        return sum;
    }

    // 밑의 코드처럼 하나의 div안에 {str} {getAddresult()}를 다넣어두면 str변경을 위해 문자변경을 눌렀을때도 getAddResult()함수가 같이 실행되어 버림
    // Memo는 그런 현상을 막기위해 사용

    // 첫번쨰 인자는 어떤함수를 메모할것인지 적음 (해당함수를 기억하고 있는다는뜻), 해당 함수를 직접 넣는게 아니라 함수를 만들어서 해당함수를 실행시킨후 값을 리턴 받음
    // 두번째 인자는 첫번째인자의 함수를 언제 실행할 것인지를 적음
    // 두번째 인자인 []안에 들어있는 데이터가 변경될때만 첫번째 인자에있는 함수를 실행시킨다는 뜻
    const addResult = useMemo(() => getAddResult(),[list]);

    return (
        <>  
            <button onClick={() =>{setStr("안녕")}}>문자 변경</button>
            <button onClick={() =>{setList([...list, 10])}}>리스트값 추가</button>
            <div>
                {list.map((i) =>(
                    <h1>{i}</h1>
                ))}
            </div>
            <div>
                <div>{str} : {addResult}</div>
            </div>
        </>
    )
}


export default Memo;