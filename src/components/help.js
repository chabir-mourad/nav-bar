import React from 'react'
// import Form from 'react-bootstrap/Form';
export default function Help(props) {
    return (
        <div className="boxes">
            {props.publicite.map(el=>(
             <section className="boxes1">
                  <h2 className="patient">{el.title}</h2>
                <p className="propriete"> {el.para}</p>
               <img className="ordinateur" src={el.image} alt=""/>
            {el.select? <select> {el.select.map(el=><option>{el}</option>)}</select>:null}
              
                 
                 </section>
            )
                )}
            
        </div>
    )
}
