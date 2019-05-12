import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class NoteSingle extends Component {

  render() {
    const {noteId, noteContent, dateTime} = this.props.note;
    const excerpt = noteContent.substr(0, 30) + "...";
    const url = "/notes/" + noteId;
    return (
      <div style={itemStyle}>
        <p  style={{fontStyle: 'italic', color: 'red'}}>{ dateTime }<div style={iconStyle}><Link to={url}><i className="icon-edit" style={editStyle}></i></Link>
        <i className="icon-remove" style={removeStyle} onClick={this.props.removeNote.bind(this, noteId)} ></i></div> </p>
        <p>{excerpt}</p>
      </div>
    )
  }
}

NoteSingle.propTypes = {
  note: PropTypes.object.isRequired
}

const iconStyle = {
  float: 'right',
  padding: '10px'
}

const editStyle = {
  padding: '5px'
}
const removeStyle = {
  padding: '5px'
}

const itemStyle = {
  padding: '10px',
  backgroundColor: '#f4f4f4',
  borderBottom: "1px solid #e6e6e6"
}

export default NoteSingle
