import React from 'react'

export default function Public(props) {
    return (
        <section className="section5">
        <div className="public">
           <div>
            <h1>The world's
biggest healthcare platform</h1>
<p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
<img src="https://pbs.twimg.com/profile_images/882990043329122305/K92kTJPz_400x400.jpg" alt="doc-logo"></img>
</div>
<div>
    {props.definition.map((el)=>(
        <div className="carreau">
         <img src={el.images} alt="flag"/>
    <h2>{el.titre}</h2>
    <p>{el.paragra}</p>
         </div>
   
   
   
         )
   

     
    )}
</div>
        </div>
        </section>
    )
}
