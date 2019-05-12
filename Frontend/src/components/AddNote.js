import React, { Component } from 'react'
import PropTypes from 'prop-types';


class AddNote extends Component {

  state = {
    noteContent: ""
  }
  contentUpdate = (event) => this.setState({ noteContent: event.target.value});

  
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.noteContent);
    this.setState({ noteContent: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="addContent" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Content..." 
          value={this.state.noteContent}
          onChange={this.contentUpdate}
          required
          
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default AddNote
