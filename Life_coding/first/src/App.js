import React, { Component } from 'react'; // eslint-disable-next-line
import { render } from 'react-dom'; // eslint-disable-next-line
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Contoller from "./components/Contoller";
import './App.css';


/// 이부분이 고쳐져야 작동!
class App extends Component{

  // 생성자로 props init
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id : 2,
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

    let _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} ></ReadContent>
      
    } else if(this.state.mode === 'read') {
      console.log('this.state.selected_content_id : ', this.state.selected_content_id);
      _title = this.state.contents[this.state.selected_content_id].title;
      _desc = this.state.contents[this.state.selected_content_id].desc;
      _article = <ReadContent title={_title} desc={_desc} ></ReadContent>

    } else if(this.state.mode === 'create') {
      _article = 
        <CreateContent 
          title={_title} desc={_desc} 
          onEventTake = {function(newTitle, newDesc){
            // add new content
            let new_object = {
              id:this.state.contents.length+1,
              title:newTitle,
              desc:newDesc
            }
            // let tmp_state_contents = this.state.contents
            // tmp_state_contents.push(new_object);
            let tmp_state_contents = this.state.contents.concat(new_object);
            this.setState({contents:tmp_state_contents});
          }.bind(this)}
        >
        </CreateContent>
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
          onEventTake={function(id_num){
            this.setState(
              {
                selected_content_id:id_num - 1,
                mode:'read'
              });
          }.bind(this)}
        ></TOC>

        <Contoller
          onEventTake={function(mode){
            this.setState({mode:mode});
          }.bind(this)}
        ></Contoller>

        {/* 가변적 */}
        {_article}

      </div>
    )
  }
}


export default App;
