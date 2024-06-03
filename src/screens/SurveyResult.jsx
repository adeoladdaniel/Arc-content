import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {  useSurveyData } from "../components/SurveyContext";
import { calculateFinalScore } from "../utils/ValueCalculator"
import { submitPrompt, generatePrompt } from "../service/GPTPromptService"

function SurveyResult() {
    const {setFormValues,setStep,formValues} = useSurveyData()
    const surveyScores = formValues?.surveyScores;
    const finalScore = calculateFinalScore(surveyScores);
    const handleSubmitGPTPrompt = async () => {
        const prompt = generatePrompt(formValues);
        const gptPromptResult = await submitPrompt(prompt);
        console.log("GPT Prompt Result: ", gptPromptResult);
    }
    useEffect(() => {
        handleSubmitGPTPrompt()
    })

  // const navigate = useNavigate()


    return(
        <React.Fragment>
            <div className="label-section"> 
                <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
            </div>
            <div className="survey-result-header">
                <p>Congratulations</p>
            </div>
            <div className="result-text">
                <p>You have earned a score of {finalScore}</p>
            </div>  
            <Footer/>
        </React.Fragment>
    );
}

export default SurveyResult;