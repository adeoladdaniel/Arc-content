import React, {useContext, useState} from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FormDataProvider } from '../../components/FormDataContext';
import InputComponent1 from '../../components/DisplayComponent';
import InputComponent2 from '../../components/InputComponent1';
import { SurveyContext, useSurveyData } from "../../components/SurveyContext";
// import DisplayComponent from '../../components/InputComponent2';







function Q16(){



    const {formValues,setFormValues,setStep} = useSurveyData()





    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

       <div>
        {/* <img src="./assets/tweet-something.svg" alt="" /> */}
       </div>

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

        <div className="input-section">
        
                <input  type="text" placeholder="What are your long-term career goals as a creator?" value={formValues.long} onChange={(e) => {
                    setFormValues((prev) => ({...prev, long:e.target.value}))
                }}/> <br />  <br />

                <button

                // className="buttoner"
                type="button"
                onClick={() => {

                    console.log(formValues)

                    setStep(16)
                
                }}> Continue</button>
    
        </div>



       <div className="image1">
        {/* <img src="./assets/business-deal.svg" alt="" /> */}
       </div>


   
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q16;