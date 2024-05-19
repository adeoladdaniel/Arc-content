import React, {useContext, useState} from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FormDataProvider } from '../../components/FormDataContext';
import InputComponent1 from '../../components/DisplayComponent';
import InputComponent2 from '../../components/InputComponent1';
import { SurveyContext, useSurveyData } from "../../components/SurveyContext";
// import DisplayComponent from '../../components/InputComponent2';







function Q17(){

    const formContext = useContext(SurveyContext)

    const {formValues,setFormValues} = useSurveyData()

    const [q1Values, setQ1Values] = useState({name: formContext.name})

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
                <input type="text" placeholder="What is a challenging moment in your creative career.?" value={q1Values.name} onChange={(e) => {
                    setQ1Values((prev) => ({...prev, name:e.target.value}))
                }}/> <br />  <br />

                <button
                type="button"
                onClick={() => {
                    setFormValues((prev) => ({...prev, ...q1Values}))

                    navigate("/q18")
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

export default Q17;