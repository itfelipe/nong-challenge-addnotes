import React, {Component} from 'react';

import db from '../fire'

export class FormNotes extends Component {
    constructor(){
        super();
        this.state = {
            title:'',
            note: ''
        }
    }


    onChangeHandler (evt, key){
        this.setState({
            [key]: evt.target.value
        })
    }

    
    
    createNote (){
       

        
        const title = document.getElementById("formTitle").value;
        const note = document.getElementById("formNote").value;

        db.collection("notes")
        .doc().set({
            title: title,
            note: note
           
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
        const list_div = document.querySelector("#notes-sec");

        db.collection("notes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
                
        list_div.innerHTML = "<div className='list-item'> <h3> Title:" + 
        doc.data().title + 
        "</ h3> Note Content: <p>" + 
        doc.data().note +"</p> </div>"});
    });
           
    }  
    
            
     
        
        
    
   render(){
    return (
      
      <section className="form">
          <h3>Create new note</h3>
      <div className="form-section">
          
          <label htmlFor="formTitle" className="formTitle" ><p>Note Owner</p></label>
          
          <input type="text" id="formTitle" 
          name="formTitle" value={this.state.title} onChange={(evt) => this.onChangeHandler(evt, 'title')}></input>
      
      </div>
      <div className="form-section">
          
          <label htmlFor="formTitle" className="formTitle" ><p>Note Data</p></label>
          
          <input type="text" id="formTitle" 
          name="formTitle" value={this.state.title} onChange={(evt) => this.onChangeHandler(evt, 'title')}></input>
      
      </div>
      
      
      
        <label htmlFor="formNote" className="formNote" ><p>Note Content</p></label>
          
        <textarea  type="text" id="formNote" name="formNote" value={this.state.note} onChange={(evt) => this.onChangeHandler(evt, 'note')}>

        </textarea>
        <div>
        <button onClick={this.createNote}>Create Note</button>
        </div>
       
        </section>
        
              
    );
  
 
}
 
}

  export default FormNotes;