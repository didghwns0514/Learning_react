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
      mode:'read',
      welcome: {title:"Welcome!", desc:"Hello, this is React Homepage!"},
      subject: {title:"WEB", desc:"World Wide Web!!!"},
      contents:[
        {id:1, title:"HTML", desc:'HTML is Hyper text...'},
        {id:2, title:"CSS", desc:'CSS is for design'},
        {id:3, title:"JavaScript", desc:'JavaScript is for interaction'}
      ]
    }
  }

  render() {

    let _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return(
      <div className="App">
        {/* 이 부분에 위에서 추가한 subject를 넣어서
        render 하게 함. 사용자 component 추가 */}
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onEventTake={ function(){
            // state 변경 알림
            if(this.state.mode === 'read'){
              this.setState({mode:'welcome'});
            }else if(this.state.mode === 'welcome'){
              this.setState({mode:'read'});
            }
            
          }.bind(this)}
        ></Subject> 

        {/* 데이터 자체를 주입하는 부분 */}
        <TOC 
          data={this.state.contents}
          onEventTake={function(){
            
          }.bind(this)}
        ></TOC>
        <Content
          title={_title}
          desc={_desc}>
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
