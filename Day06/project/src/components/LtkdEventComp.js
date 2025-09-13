import React from 'react';

const LtkdEventComp = () => {

    const Ltkd_Func1 = ()=>{
        alert("Hello")
    }
    const Ltkd_Func2 = (param)=>{
        alert(param)
    }

    return (
        <div>
            <h1>Event - Component Function</h1>
            <button onClick={Ltkd_Func1}>Click Here</button>
            
            <button onClick={()=>Ltkd_Func2('Le Tran Khanh Duy')}>Click Here Param</button>
            
        </div>
    );
}

export default LtkdEventComp;