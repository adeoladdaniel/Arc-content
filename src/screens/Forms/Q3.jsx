import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useSurveyData } from "../../components/SurveyContext";







function Q3(){
    const {setFormValues}=useSurveyData()

const handleSelectCheckbox=(e)=>{
    const checked=e.target.checked
    const value=e.target.value
    setFormValues(prev=>({...prev, active_platform:{...prev.active_platform,[value]:checked}}))


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

             <div className="c-option">  <input type="checkbox" onChange={handleSelectCheckbox} value={'youtube'} /> <img src="./assets/youtube.svg" alt="" /> Youtube</div>

             <div className="c-option">  <input type="checkbox" onChange={handleSelectCheckbox} value={'instagram'} /> <img src="./assets/instagram.svg" alt="" /> Instagram</div>
             <div className="c-option">  <input type="checkbox" onChange={handleSelectCheckbox} value={'tiktok'} /> <img src="./assets/tiktok.svg" alt="" /> Tiktok</div>


             <div className="c-option">  <input type="checkbox" onChange={handleSelectCheckbox} value={'twitter'} /> <img src="./assets/twitter.svg" alt="" /> Twitter</div>


        </div>

        <Link to="/q4">     <button          type="button" className="q-button">Continue</button></Link>

       <div className="image1">
       </div>

            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q3;