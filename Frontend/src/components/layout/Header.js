import React from 'react'

export default function Header() {
  return (
    <header style={headStyle}>
      <h1>BoomNotes</h1>
    </header>
  )
}

const headStyle = {
  background: "#2B2B2B",
  color: "white",
  textAlign: "center",
  padding: "10px"
}


