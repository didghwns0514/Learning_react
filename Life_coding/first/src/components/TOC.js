import React, { Component } from 'react'; // eslint-disable-next-line

class TOC extends Component {

  handleClick(id, ev){
    console.log('ev : ', ev);
    console.log('id : ', id);
    console.log('this in subject : ', this);
    console.log('target id : ', ev.target.dataset.id);
    console.log('target myownname : ', ev.target.dataset.myownname);

    let id_num = Number( ev.target.dataset.id );

    ev.preventDefault();

    // 상위 component로 전달, props로 접근할 수 있음
    this.props.onEventTake(id_num);


  }

  shouldComponentUpdate(newProps, newState) {
    console.log("======> TOC shouldComponentUpdate has been loaded");
    
    console.group('new objects');
    console.log('newProps.data : ', newProps.data);
    console.log('this.props.data : ', this.props.data);
    console.log('newState : ', newState);
    console.groupEnd();
    
    if(this.props.data === newProps.data){
      return false;
    }
    else{
      return true; 
    }
    
    // if(this.props.reload === 'true'){
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }

  render() {

    let data = this.props.data;
    let renderList = [];

    let i = 0;
    while(i < data.length){

      renderList.push(
        <li key={data[i].id}>
          <a 
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            data-myownname={data[i].id}
            onClick = {this.handleClick.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
        </li>);

      // next iter
      i = i + 1;
    }

    return (
        <nav>
          <ul>
            {renderList}
          </ul>
        </nav>
    );
  }
}

export default TOC;