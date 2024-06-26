import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSurveyData } from "../../components/SurveyContext";








function Q12(){

  const [selectedOption, setSelectedOption] = useState('null');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


    const [isChecked, setIsChecked] = useState(false);
    const {formValues,setFormValues,setStep}=useSurveyData()
    console.log("Form Values: ", formValues)
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [isChecked1, setIsChecked1] = useState(false);

    const handleCheckboxChanger = () => {
      setIsChecked1(!isChecked1);
    };
    const handleFormData=(e)=>{
      // const checked=e.target.checked
      let question = formValues?.surveyScores.preferred_time_for_creating;
      const value=e.target.value
      const score = value === 'option1' ? 5 : 0
      question.setScore(score);

      setFormValues(prev=>({...prev, 
        create_strategy:value,
        surveyScores: {...formValues.surveyScores, preferred_time_for_creating: question}
      }))
      console.log("value: ", value);
      console.log("score: ", score);
      console.log("question: ", question);

    }

    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

    

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

      
        <div className="anwser-section">

        <h3>Do you have a preferred time of day for creating?</h3>
            <div>



        <div className="clickable">   <input 
            onChange={handleFormData} 
            value={'option1'} name="clear_strategy" 
            style={{width:"22px", height:"24px"}}  
             type="radio"
             onClick={(e) => {setSelectedOption(e.target.value)}}
             
             /> <h5> Yes</h5> 
        <input  name="clear_strategy" value={'option2'} 
        style={{width:"22px", height:"24px"}}  
         type="radio"
         onClick={(e) => {setSelectedOption(e.target.value)}}
         
          onChange={handleFormData}/> <h5> No</h5></div>

      {/* {isChecked && (
       <form action="">
       <input onChange={(e)=>    setFormValues(prev=>({...prev, clear_strategy_text:e.target.value}))} type="text" placeholder="what kind of strategy would you like to develop?" /> <br />  <br />

       <Link to="/q5"><button > Continue</button></Link>
   </form>
      )} */}



{selectedOption === 'option1' && (
        <div>

<input className="inputer"
  type="text" 
  placeholder="If yes, when? "  

  onChange={(e)=>    setFormValues(prev=>({...prev, create_strategy_text:e.target.value}))}
  />

<br/>
<button
    className="buttoner"
    type="button"
    onClick={()=> {
        console.log(formValues)
        
        setStep(12)
            }}

          
              > Continue</button>
        </div>
      )}

{selectedOption === 'option2' && (
        <div>

<input className="inputer"
  type="text" 
  placeholder="If no, why not?"  

  onChange={(e)=>    setFormValues(prev=>({...prev, create_strategy_text:e.target.value}))}
  />
      <button
       className="buttoner"
       type="button"
       onClick={()=> {
        console.log(formValues)
        
        setStep(12)
            }}
       
       > Continue</button> 
        </div>
      )}
    </div>
        </div>



  
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q12;