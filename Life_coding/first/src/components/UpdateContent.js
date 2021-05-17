import React, { Component } from 'react';

class UpdateContent extends Component {
  render() {

    // reading conents
    let selected_content = this.props.data.find((container, index, obj)=>{
      return container.id - 1 === this.props.curr_index;
    });


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
            alert('submit!');

            // e.target으로 form의 값을 access할 수 있음
            this.props.onEventTake(
              e.target.title.value,
              e.target.desc.value
            );

          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder={selected_content.title}></input>
          </p>
          <p>
            <textarea name="desc" placeholder={selected_content.desc}></textarea>
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