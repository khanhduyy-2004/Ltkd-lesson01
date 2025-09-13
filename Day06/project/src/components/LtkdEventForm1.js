
import React, { Component } from 'react';

class LtkdEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Khanh Duy"
        }
    }

    handleChange = (e)=>{
        this.setState({
            studentName:e.target.value
        })
    }

    handleUpdate = (e)=>{
        e.preventDefault();
        
         this.setState({
            studentName:'Khanh Duyy'
        })
    }
     handleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.studentName)
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Event Form</h2>
                <hr/>
                <form>
                    <label htmlFor='studentName'>Student Name:</label>
                    <input name='studentName' id='studentName' 
                    value={this.state.studentName}
                    onChange={this.handleChange}
                    />
                    <button onClick={this.handleUpdate}>Change value</button>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default LtkdEventForm1;
