import React, { Component } from 'react';


class Noteapp extends Component {
	constructor(props) {
		super(props);

		this.state= {
			items: []
		}
		this.addnote = this.addnote.bind(this);
	}
	addnote(event) {
		console.log('its working')

		if(this.theTitle.value !== "") {
			var newItem = {
				title: this.theTitle.value,
				note: this.theNote.value
			};
		}

		this.setState((PrevState) => {
			return {
				items:PrevState.items.concat(newItem)
			};
		});

		this.theTitle.value= "";
		this.theNote.value = "";

		console.log(this.state.items)		

		event.preventDefault();

	}
  render() {
    return (
      <div className='note-making-app'>
        <header>
        <h1>Note Application</h1>
        </header>
       <div className="main-content">
           <ul>
             {this.state.items.map((val) => <li>{val.title} --> {val.note}</li>)}
            </ul> 
        </div>
        <footer> 
         <form onSubmit = {this.addnote}> 
          <input 
            type="text" 
            placeholder = "Enter note Header"
            ref = {(title) => this.theTitle=title}
            />
          <textarea
             placeholder= "Enter note description"
             ref = {(note) => this.theNote = note}
           />
          <button type="submit">Add note</button>
         </form>
        </footer>
      </div>
      
    );
  }
}

export default Noteapp;
