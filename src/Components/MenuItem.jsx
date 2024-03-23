import React from 'react'
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <>
      <Link to={props.linkurl}>{props.linktext}</Link>
    </>
  )
}

export default MenuItem
