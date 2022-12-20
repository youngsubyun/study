import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  // state 문법 : 변동시 자동으로 html에 반영되게 만들고 싶을때
  //            /html 전체가 자동재랜더링이 됨
  let [글제목, b] = useState(['남자 코트 추천', '강남우동맛집', '파이썬독학']);

  return (
    //html이 아니라 JSX(.js 파일에서 쓰는 html 대용품)
    <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>

        <div className="list">
          <h4>{ 글제목[0] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ 글제목[1] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ 글제목[2] }</h4>
          <p>2월 17일 발행</p>
        </div>
      {/* 데이터 바인딩(데이터를 꽂아 넣는다) -> {} */}
    </div>
  );
}

export default App;
