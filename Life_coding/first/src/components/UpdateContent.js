import React, { Component } from 'react';

class UpdateContent extends Component {

  constructor(props){
    super(props); //overriding
    console.log('props in UpdateContent : ', props);

    // 가변 데이터로 state화를 시켜서 변경할 수 있도록 하는 것
    this.state = {
      title:this.props.data.title,
      desc:this.props.data.desc
    };
  }

  render() {

    // reading conents
    // let selected_content = this.props.data.find((container, index, obj)=>{
    //   return container.id - 1 === this.props.curr_index;
    // });
    console.log('Props data in UpdateContent : ', this.props.data);

    return (
      
      <article>
        <h2>Update</h2>
        {/* form은 한개로 구현해도 가능 */}
        <form
          action="/create_process"
          method="post"
          onSubmit={function(e){
            // form-tag 안에 submit input 클릭시 불리는 html form 태그의 고유 매써드
            e.preventDefault(); // newpage load 방지
            alert('Updated!');

            // e.target으로 form의 값을 access할 수 있음
            this.props.onEventTake(
              e.target.title.value,
              e.target.desc.value
            );

          }.bind(this)}
        >
          <p>
            <input 
              type="text" 
              name="title"
              placeholder="title"
              //value={selected_content.title}
              value={this.state.title}
              onChange={function(e){
                console.log('function e : ', e);
                this.setState({
                  title:e.target.value
                })
              }.bind(this)}
            ></input>
          </p>
          <p>
            <textarea 
              name="desc" 
              //value={selected_content.desc}
              value={this.state.desc}
              onChange={function(e){
                this.setState({
                  desc:e.target.value
                })
              }.bind(this)}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;