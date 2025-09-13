import React, { Component } from 'react';

class LtkdEventCompClass extends Component {

    Ltkd_Func1 = ()=>{
        alert('Hàm không có tham số')
    }
    Ltkd_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }


    render() {
        return (
            <div>
                <h2>Event in Class component</h2>
                <button onClick={this.Ltkd_Func1}>Click</button>
                <button onClick={()=>this.Ltkd_Func2("Le Tran Khanh Duy")}>Click Param</button>
            </div>
        );
    }
}

export default LtkdEventCompClass;