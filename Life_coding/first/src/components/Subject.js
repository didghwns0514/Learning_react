import React, { Component } from 'react'; // eslint-disable-next-line

class Subject extends Component {

  handleClick(ev, err){
    console.log('ev : ', ev);
    console.log('err : ', err);
    console.log('this in subject : ', this);
    ev.preventDefault();

    // 상위 component로 전달, props로 접근할 수 있음
    this.props.onEventTake();


  }

  render() {
    return (
      <header>
        <h1><a href='/' onClick={this.handleClick.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;