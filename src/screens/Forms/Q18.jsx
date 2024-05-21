import React, {useContext, useState} from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FormDataProvider } from '../../components/FormDataContext';
import InputComponent1 from '../../components/DisplayComponent';
import InputComponent2 from '../../components/InputComponent1';
import { SurveyContext, useSurveyData } from "../../components/SurveyContext";
// import DisplayComponent from '../../components/InputComponent2';







function Q18(){

    const formContext = useContext(SurveyContext)

    const {formValues,setFormValues,setStep} = useSurveyData()

    const [q1Values, setQ1Values] = useState({maintain: formContext.maintain})

    const navigate = useNavigate()


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
            <form action="">
                <input type="text" placeholder="How do you maintain a healthy work-life balance in the creative industry?" value={q1Values.maintain} onChange={(e) => {
                    setQ1Values((prev) => ({...prev, maintain:e.target.value}))
                }}/> <br />  <br />

                <button
                type="button"
                onClick={() => {

                    console.log(formValues)

                    setStep(18)
                    setFormValues((prev) => ({...prev, ...q1Values},{

                    }))
                }}> Continue</button>
            </form>
        </div>



       <div className="image1">
        {/* <img src="./assets/business-deal.svg" alt="" /> */}
       </div>


   
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q18;