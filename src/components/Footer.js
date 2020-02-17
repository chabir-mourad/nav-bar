import React from 'react'

export default function Footer(props) {
    return (
        <div>
             <hr/>
        
            <p> We are leaders in 10 countries</p>
         {props.pied.map(el=>(
             
                
                 
                 <a className="pays" href="pays">{el.pay}</a> 
                 
                   
            
         )
         

         )} 
         <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
www.docplanner.com © 2020</p>  
        </div>
    )
}
