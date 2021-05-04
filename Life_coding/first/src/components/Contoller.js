import React, { Component } from 'react'; // eslint-disable-next-line

class Contoller extends Component {

  handleClick(ev, err){
    console.log('ev : ', ev);
    console.log('err : ', err);
    console.log('this in subject : ', this);
    ev.preventDefault();

    let id_string =  ev.target.dataset.id;

    // 상위 component로 전달, props로 접근할 수 있음
    this.props.onEventTake(id_string);


  }

  render() {
    return (
      <ul>
      <li><a href="/create" data-id="create" onClick={this.handleClick.bind(this)}>create</a></li>
      <li><a href="/update" data-id="update" onClick={this.handleClick.bind(this)}>update</a></li>
      <li><input data-id="delete" type="button" value="delete" onClick={this.handleClick.bind(this)}></input></li>
      </ul>
    );
  }
}

export default Contoller;