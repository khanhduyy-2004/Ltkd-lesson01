import React, { Component } from 'react'
//xử lý dữ liệu với props, state
 class LTKD_EventForm3 extends Component {
    constructor(props){
        super(props);
        //Tạo đối tượng dữ liệu thông qua state
        this.state={
            name:"Lê Trần Khánh Duy",
            job:"New Dev soft"
        }
    }
    //hàm xử lý sự kiện 
    handleChangeName=()=>{
        this.setState({
            name:"K22CNT2-ReactJs"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ phần mềm"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu : {this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi Name</button>
        <button onClick={this.handleChangeJob}>Thay đổi Job</button>
      </div>
    )
  }
}
export default LTKD_EventForm3;