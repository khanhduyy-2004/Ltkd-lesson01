import React, { Component } from 'react'
import LTKD_EventForm1 from './components/LTKD_EventForm1'
import LTKD_EventForm2 from './components/LTKD_EventForm2';
import LTKD_EventForm3 from './components/LTKD_EventForm3';
import LTKD_EventForm4 from './components/LTKD_EventForm4';

 class App extends Component {
  render() {
    return (
      <div class='container'>
          <h1>Event Form Demo - Lê Trần Khánh Duy</h1>
          <LTKD_EventForm1/>
          <LTKD_EventForm2/>
          <LTKD_EventForm3/>
          <LTKD_EventForm4 name="Lê Trần Khánh Duy"/>
      </div>
    );
  }
}
export default App;