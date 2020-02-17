import React from "react";

export default function Nav(props) {
  return (
    <div className="container">
      <img
        className="logo"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="docplaner"
      />

      <ul className="menu"> 
    {props.navmenu.map(el => (<li className="elements">{el.item1} {el.subitem?(   
    <ul className="dropdown"> 
   {el.subitem.map(el=>(<li> {el}</li>))}
   </ul>) : null}</li>))}    
   </ul>
   </div>
          );  }