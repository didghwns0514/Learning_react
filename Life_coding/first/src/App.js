import React, { Component } from 'react'; // eslint-disable-next-line
import { render } from 'react-dom'; // eslint-disable-next-line
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


/// 이부분이 고쳐져야 작동!
class App extends Component{

  // 생성자로 props init
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", sub:"World Wide Web!!!"},
      contents:[
        {id:1, title:"HTML", desc:'HTML is Hyper text...'},
        {id:2, title:"CSS", desc:'CSS is for design'},
        {id:3, title:"JavaScript", desc:'JavaScript is for interaction'}
      ]
    }
  }

  render() {
    return(
      <div className="App">
        {/* 이 부분에 위에서 추가한 subject를 넣어서
        render 하게 함. 사용자 component 추가 */}
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> 
        {/* 데이터 자체를 주입하는 부분 */}
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is a HyperText Markup Language!">
        </Content>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
