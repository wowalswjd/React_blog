import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '일산 우동 맛집', '부산 예쁜 카페']); 
  let [like, like변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  //let posts = '강남 고기 맛집';
  let design = {color : 'pink', fontSize : '30px' }


  function 스위치() {
    if(modal === true) {
      setModal(false);
    } else setModal(true);
  }

  function titleAdd() {
    var newArray = [...글제목];
    newArray.unshift(입력값);
    글제목변경(newArray);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ design }>개발 Blog</div>
      </div>

    {
      글제목.map(function(글, i){
        return (
          <div className="list" key={i}>
            <h3 onClick={ () => {누른제목변경(i)} }> { 글 } <span onClick={ ()=> { like변경(like+1)}}>👍</span> {like} </h3>
            <p>8월 3일 발행</p>
            <hr/>
          </div>
        )
      })
    }
   


    <div className="publish">
      <input onChange={ (e) => {입력값변경(e.target.value)} }/>
      <button onClick={titleAdd}>저장</button>
    </div>
    
    <button 
      onClick={ () => {스위치()} }>modal버튼</button>

    {
      modal === true
      ? <Modal 글제목={글제목} 누른제목={누른제목}/>
      : null
    }

    </div>
  );
     
}

function Modal(props) {
  return(
    <div className = "modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
