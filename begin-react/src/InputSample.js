import React, { useState, useRef } from 'react';

// 초기화 버튼 클릭시 이름 input에 포커스가 잡히도록 기능 구현
function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 추출

    const onChange = (e) => {
        const { name, value } = e.target; // e.target에서 name, value추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample;