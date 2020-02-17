import React from 'react'

export default function Mainpara(props) {
    return (
        <div className="main">
            <img className="small_logo" src="https://www.docplanner.com/img/sygnet.png" alt="logo-doc"/>
            <h1 className="title">Making the healthcare experience more human</h1>
            <div className="intoduction">
{props.intro.map(el=>(<div className="paragraphes">{el.para1}</div>
    )
    )}
            </div>
        </div>
    )
}
