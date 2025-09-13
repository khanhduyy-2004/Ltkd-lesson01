import React, { Component } from 'react';
import LtkdEventComp from './components/LtkdEventComp';
import LtkdEventCompClass from './components/LtkdEventCompClass';
import LtkdEventForm1 from './components/LtkdEventForm1';
import LtkdEventForm2 from './components/LtkdEventForm2';

class LtkdApp extends Component {
  render() {
    return (
      <div className='container border'>
          <h1 className='text-center'> Le Tran Khanh Duy <br/>ReactJs - Form - Event</h1>
          <hr/>
        

        <LtkdEventComp/>

        <LtkdEventCompClass/>

        <LtkdEventForm1 />

        <LtkdEventForm2 />
        
      </div>
    );
  }
}

export default LtkdApp;