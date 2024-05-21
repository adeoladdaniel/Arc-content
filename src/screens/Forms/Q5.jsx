import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSurveyData } from "../../components/SurveyContext";






// option 1 is 10 marks and option 2 is 5 marks 

function Q5(){

  const [selectedOption, setSelectedOption] = useState('null');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const {setFormValues,setStep}=useSurveyData()

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
         onClick={(e) =>
          {setSelectedOption(e.target.value)}}
         
          onChange={handleFormData}/> <h5> No</h5></div>




        {selectedOption === 'option1' && (
        <div>
 <input className="inputer"
  type="text" 
  placeholder="What are 3 topics you’re interested in your niche?"  

  onChange={(e)=>    setFormValues(prev=>({...prev, interested_niche_topics:e.target.value}))}
  />
<br/>
 <button

onClick={()=>{
  setStep(5)
}}
    className="buttoner"
                type="button"
          
              > Continue</button>
        </div>
      )}

{selectedOption === 'option2' && (
        <div>
    <button
    onClick={()=>{
      setStep(5)
    }}
    className="buttoner"
                type="button"
              
          
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

export default Q5;