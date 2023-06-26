import React from 'react';
import styled from 'styled-components';

const StyleProps = (props) => {
//값을 받을때는 파마리터에 변수명 아무거나 입력하면 받을수 있음


    //구조 분할 할당
    //props안에 있는 boards는 boards변수에 담기고 id는 id변수에 담김
    // setBoards같은 함수도 props로 넘겨 받을수있음
    const {boards,setBoards, number, setNumbers, user} = props;    
    
    const StyledDeleteButton = styled.button`
        color : ${(v) => (v.username === 'ssar' ? 'blue' : 'red')}
    `;

    const addNumber = () =>{
        setNumbers(number + 1)
    }

    return(
        <>
        <div>
            <h1>스타일 프롭스 : {number}</h1>
            <button onClick={addNumber}>번호 증가</button>
            <button >전체 삭제</button>
            <StyledDeleteButton v={user} onClick={() => setBoards([])}>전체 삭제</StyledDeleteButton>
            {boards.map((board) =>(
                <h3>
                    제목 : {board.title} 내용 {board.content}
                </h3>
            ))}
        </div>
        </>
    )

}

export default StyleProps