import React, {useContext, useState, useEffect} from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FormDataProvider } from '../../components/FormDataContext';
import InputComponent1 from '../../components/DisplayComponent';
import InputComponent2 from '../../components/InputComponent1';
import { SurveyContext, useSurveyData } from "../../components/SurveyContext";
import { submitPrompt, generatePrompt } from "../../service/GPTPromptService"
// import DisplayComponent from '../../components/InputComponent2';







function Q1(){



    const {setFormValues,setStep,formValues} = useSurveyData()
    // const handleSubmitGPTPrompt = async () => {
    //     const prompt = generatePrompt(formValues);
    //     console.log("GPT Prompt: ", prompt);
    //     const gptPromptResult = await submitPrompt(prompt);
    //     console.log("GPT Prompt Result: ", gptPromptResult);
    // }
    // useEffect(() => {
    //     handleSubmitGPTPrompt()
    // })

    const navigate = useNavigate()


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

       <div>
        <img src="./assets/tweet-something.svg" alt="" />
       </div>

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

        <div className="input-section">
            <div >
                <input type="text" placeholder="What is your Name?" value={formValues?.name} onChange={(e) => {
                    setFormValues((prev) => ({...prev, name:e.target.value}))
                }}/> <br />  <br />

                <button
                type="button"
                onClick={() => {
                    setStep(2)
                }}
                //  disabled={isButtonDisabled}
                > Get started</button>
            </div>
        </div>



       <div className="image1">
        <img src="./assets/business-deal.svg" alt="" />
       </div>


   
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q1;