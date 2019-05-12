import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';


class EditNote extends Component {

  state = {
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://127.0.0.1:8080/api/v1/notes/${params.noteId}`)
    .then(res => this.setState({noteContent: res.data.noteContent,
      noteId: res.data.noteId
    }));
  }

  
  contentUpdate = (event) => this.setState({ noteContent: event.target.value});

  
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.editNote(this.state);
  
  }

  render() {
  
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="editContent" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Edit Content..." 
          value={this.state.noteContent}
          onChange={this.contentUpdate}
        />
        <input 
          type="submit" 
          value="Update" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

EditNote.propTypes = {
  EditNote: PropTypes.func.isRequired
}

export default EditNote