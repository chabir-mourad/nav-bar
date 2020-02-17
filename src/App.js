import React from "react";
import "./App.css";
import Navbar from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
// import Image1 from "./img/image1";
// import Image2 from "./img/image2.png";
import Mainpara from "./components/mainpara.js";
import Help from "./components/help";
import Partner from "./components/partner";
import Public from "./components/Public";
import Cardspay from "./components/Cardspay";
import Footer from "./components/Footer";
function App() {
  let nav = [
    { item1: "about us" },
    { item1: "carrer" },
    {
      item1: "departement",
      subitem: [
        "Marketing & PR",
        "Customer Success & Sales",
        "IT Product Design & UX",
        "Finance & Administration",
        "HR & more"
      ]
    }
  ];
  let para = [
    {
      para1:
        "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
    },
    {
      para1:
        "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
    }
  ];
  let helps = [
    { title: "for patients" ,
     para: "Find a doctor, book a visit and solve any health-related doubt" ,
     image: "https://www.docplanner.com/img/screen-marketplace@2x.png" ,
     select: [ "choose your country", "UK" , "Argentina" , "Turkey" , "Australia" , "Brasil","Chile" , "Colombia", "France","Italy","Mexico","Poland"]
  },
     { title: "for doctors" ,
    para: "Save time managing visits and cut no-shows by half" ,
    image:"https://www.docplanner.com/img/screen-saas@2x.png"}
  ];
  let partenaire=[{item2:"ZnanyLekarz"},{item2:"Doctoralia"},{item2:"MioDottore"},{item2:"DoktorTakvimi"},{item2:"ZnamyLekar"}];
  let boxe =[ { titre: "Leader in 10 countries" ,
  paragra: "1.5 million appointments" ,
  images: "https://www.docplanner.com/img/flag.png" ,

},
  { titre: "1.5 million appointments" ,
 paragra: "booked last month" ,
 images:"https://www.docplanner.com/img/visits.png"},
 { titre: "30 million unique patients" ,
 paragra: "visit us every month" ,
 images:"https://www.docplanner.com/img/patients.png"},
 { titre: "2 million active doctors" ,
 paragra: "trust in our solutions" ,
 images:"https://www.docplanner.com/img/doctors.png"}
];
let contenu_card =[ { titre1: "Warsaw" ,

images: "https://www.docplanner.com/images/warsaw.png" ,

},
{ titre: "Barcelona" ,

images:"https://www.docplanner.com/images/barcelona.png"},
{ titre: "Istanbul" ,

images:"https://www.docplanner.com/images/istanbul.png"},
{ titre: "Rome" ,

images:"https://www.docplanner.com/images/rome.png"},
{ titre: "Mexico City" ,

images:"https://www.docplanner.com/images/mexico-city.png"},
{ titre: "Curutiba" ,

images:"https://www.docplanner.com/images/curitiba.png"},

];
let internationnal =[ { pay: "Poland" },
{ pay: "Turkey" },
{
  pay: "Spain"}, { pay: "Italy" },
  { pay: "Mexico" },
  {
    pay: "Czech Republic"},{ pay: "Colombia" },
    { pay: "Brazil" },
    {
      pay: "Chile"},{pay:"Argentina"}]

  return (
    <div className="App">
      <Navbar navmenu={nav} />
      <Mainpara intro={para} />
      <Help publicite={helps} />
      {/* <Help publicite={inputs} /> */}
      <Partner svg={partenaire}/>
      <Public definition={boxe}/>
      <Cardspay pays={contenu_card}/>
      <Footer pied={internationnal}/>
    </div>
  );
}
export default App;
