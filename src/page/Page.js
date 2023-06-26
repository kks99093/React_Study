import React, { useEffect, useState } from 'react';
import StyleProps from '../StyleProps';

const Page = () => {
    // 나중에 http요청 (fetch)으로 할거지만 지금은 일단 임시로 직접 적음
    // ★★값을 받아 올때는 컴포넌트가 아니라 이렇게 직접 쓰이는 페이지에서 받아올것!!★★    
    const[boards, setBoards] = useState([]);
    const[number, setNumbers] = useState(0);
    const[user, setUsers] = useState([]);

    

    useEffect(()=>{
        let data = [
          {id:1, title: "제목1", content:"내용1"},
          {id:2, title: "제목2", content:"내용2"},
          {id:3, title: "제목3", content:"내용3"},
        ];

        setBoards([...data]);
        setUsers({id: 1, username:'ssar'})
    },[])

    //컴포넌트로 값을 넘길때는 변수명 = {변수명} 이런식으로 넘김
    //이렇게 자식한테 데이터를 넘기는 기법을 props 라고함
    return (
        <>
            <StyleProps boards={boards} setBoards = {setBoards} number={number} setNumbers={setNumbers} user={user}/>
        </>

    )
}

export default Page;