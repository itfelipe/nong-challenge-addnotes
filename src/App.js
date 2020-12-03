import React, {Component} from 'react';
import Header from './components/Header';
import FormNotes from './components/FormNotes';
import Notes from './components/Notes';
import db from './fire';


class App extends Component{
  
   
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <FormNotes />
          
          <Notes/>
        </main>
      </div>
    );
  }
  
}
export default App;
     

