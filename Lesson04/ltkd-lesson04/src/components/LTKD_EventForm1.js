import React, { Component } from 'react'

 class LTKD_EventForm1 extends Component {
    //hàm xử lý sự kiện
    eventHandleClick1 = ()=>{
        alert("event handle 1");
    }
    eventHandleClick2(){
        alert("Event Click 2");
    }


  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event Handle - Lê Trần Khánh Duy</h2>
        {/* gọi hàm xử lý sự kiện khi render*/ }
        <button onClick={this.eventHandleClick1()}>Click 1</button>
        {/*gọi hàm xử lý sự kiện Click */}
        <button onClick={this.eventHandleClick2}>Click 2</button>

      </div>
    )
  }
}
export default LTKD_EventForm1;