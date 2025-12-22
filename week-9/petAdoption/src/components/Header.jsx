import React from 'react'

const Header = (props) => {
  return (
    <nav style={{ backgroundColor: "#c59771bd", padding: "16px 32px" }}>
      <h1>{props.message}</h1>
    </nav>
  )
}

export default Header
