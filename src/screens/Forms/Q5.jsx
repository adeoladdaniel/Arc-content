import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSurveyData } from "../../components/SurveyContext";








function Q5(){
  const {setFormValues}=useSurveyData()

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [isChecked1, setIsChecked1] = useState(false);

    const handleCheckboxChanger = () => {
      setIsChecked1(!isChecked1);
    };
    const handleFormData=(e)=>{
      const value= e.target.value
      const checked= e.target.checked
      setFormValues(prev=>({...prev,know_your_niche: checked ? e.target.value :''}))


    }


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

    

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

      
        <div className="anwser-section">

        <h3>Do you know your niche?</h3>
            <p>Knowing your target audience is key to creating content. It helps you shape your content to fit their likes, needs, and habits. This makes your content more appealing to them, which can lead to increased engagement and success. Essentially, a well-understood target audience can help you make deeper connections and achieve better results with your content.</p>
            <div>
    
         <div className="clickable">   <input style={{width:"22px", height:"24px"}} value={'yes'}   type="checkbox" onChange={handleFormData}/> <h5> Yes</h5> 
        <input onChange style={{width:"22px", height:"24px"}}   type="checkbox" value={'no'} onChange={handleFormData}/> <h5> No</h5></div>

      {isChecked && (
       <form action="">
       <input type="text" placeholder="Who is your  audience?" /> <br />  <br />

       <Link to="/q5"><button > Continue</button></Link>
   </form>
      )}



       <form action="">
       {/* <input type="text" placeholder="Who is your target audience?" /> <br />  <br /> */}

       <Link to="/q6"><button          type="button"> Continue</button></Link>
   </form>

    </div>
        </div>



  
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q5;