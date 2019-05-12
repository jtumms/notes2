import React, {Component} from 'react';
import Notes from './components/Notes';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import axios from 'axios';


class App extends Component {

  state = {
    notes: []
    }

  componentDidMount() { 
    axios.get('http://127.0.0.1:8080/api/v1/notes')
    .then(res => this.setState({notes: res.data}));
  }

  removeNote = (noteId) => {
    axios.delete('http://127.0.0.1:8080/api/v1/notes' + noteId);
    this.setState({notes: [...this.state.notes.filter(note => note.noteId !== noteId)]});
  }
  
  addNote = (noteContent) => {
    var date = new Date();
    axios.post('http://127.0.0.1:8080/api/v1/notes', {
      noteContent: noteContent,
      dateTime: date.toISOString()
    })
    .then(res => this.setState({notes: [...this.state.notes, res.data]}));
  }
  
  editNote = (note) => {
    var date = new Date();
    console.log(note.noteId + " : " + note.noteContent);
    axios.post(`http://127.0.0.1:8080/api/v1/notes`, {
      noteId: note.noteId,
      noteContent: note.noteContent,
      dateTime: date.toISOString()
    })

  }

  render(){
    return (
    <Router>  
    <div className="App">
    <div className="container">
      <Header />
      {/* root URL */}
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddNote {...props} addNote={this.addNote}/>
        <Notes notes={this.state.notes} editNote={this.editNote} removeNote={this.removeNote}/>
        </React.Fragment>
      )}/>
      <Route path="/notes/:noteId" render={ props => (
        <React.Fragment>
          <EditNote {...props} editNote={this.editNote}/>
        </React.Fragment>
      )} />
      
      </div>
    </div>
    </Router>
    );
  } 


}


export default App;