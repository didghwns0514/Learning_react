import React, { Component } from 'react'; // eslint-disable-next-line

class TOC extends Component {


  render() {

    let data = this.props.data;
    let renderList = [];

    let i = 0;
    while(i < data.length){

      renderList.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);

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