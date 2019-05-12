
import React, {Component} from 'react';
import NoteSingle from './NoteSingle';
import PropTypes from 'prop-types';

class Notes extends Component {
  render() {
    return this.props.notes.map((note) => (
      <NoteSingle key={note.noteId} note={note} editNote={this.props.editNote} removeNote={this.props.removeNote}/>
    ) );
  }
}
Notes.propTypes = {
  notes: PropTypes.array.isRequired
}
export default Notes;