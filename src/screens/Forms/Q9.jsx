import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSurveyData } from "../../components/SurveyContext";








function Q9(){

  const [selectedOption, setSelectedOption] = useState('null');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


    const [isChecked, setIsChecked] = useState(false);
    const {formValues,setFormValues}=useSurveyData()

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [isChecked1, setIsChecked1] = useState(false);

    const handleCheckboxChanger = () => {
      setIsChecked1(!isChecked1);
    };
    const handleFormData=(e)=>{
      const checked=e.target.checked
      const value=e.target.value

    setFormValues(prev=>({...prev, clear_strategy:checked}))

    }

    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

    

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

      
        <div className="anwser-section">

        <h3>Do you regularly analyze your content performance?</h3>
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
  placeholder="what metrics do you focus on?"  

  onChange={(e)=>    setFormValues(prev=>({...prev, clear_strategy_text:e.target.value}))}
  />

<br/>
<Link to="/q10"><button
    className="buttoner"
    type="button"
    onClick={()=>console.log(formValues)} 

          
              > Continue</button></Link> 
        </div>
      )}

{selectedOption === 'option2' && (
        <div>

<input className="inputer"
  type="text" 
  placeholder="what metrics would you like to start tracking?"  

  onChange={(e)=>    setFormValues(prev=>({...prev, clear_strategy_text:e.target.value}))}
  />
   <Link to="/q10">   
      <button
       className="buttoner"
       type="button"
onClick={()=>console.log(formValues)} 
       
       > Continue</button> </Link>
        </div>
      )}
    </div>
        </div>



  
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q9;