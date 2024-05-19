import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useSurveyData } from "../../components/SurveyContext";







function Q6(){
    const {setFormValues}=useSurveyData()
const handleCheckbox=(e)=>{
    const value=e.target.value
    const checked=e.target.checked

setFormValues(prev=>({...prev, media_channel:{...prev.active_platform,[value]:checked}}))
}

    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

       <div>
       </div>

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>
        <div className="check-box-section">
        <h4>Which of these platforms are you active on? (select your top 3)</h4>

             <div className="c-option">  <input type="checkbox" /> Impact</div>

             <div className="c-option">  <input type="checkbox" />  Growth</div>


             <div className="c-option">  <input type="checkbox" />  Not Sure</div>


           


        </div>

        <Link to="/q7">     <button          type="button" className="q-button">Continue</button></Link>

       <div className="image1">
       </div>

            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q6;