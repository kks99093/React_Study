import { useRef, useState, createRef } from "react";


// useRef (디자인)
// dom을 변경할 때 사용

function Ref() {

    const myRef = useRef(null);
    

    const[list, setList] = useState([{
        id : 1, name: "가나"}, 
        {id: 2, name : "다라"}
    ])
    const myRefs = Array.from({length: list.length}).map(() => createRef());

    return(
        <> 
            <button onCLick={() => {myRef.current.style.backgroundColor = 'red'}}> 색 변경</button>
            <button onCLick={() => {myRefs[1].current.style.backgroundColor = 'red'}}> 색 변경2</button>
            <div ref={myRef}> 박스</div>
            <div>
                {list.map((user, index) => (<h1 ref={myRefs[index]}>{user.name}</h1>))}

            </div>
        </>
    )
}


export default Ref;