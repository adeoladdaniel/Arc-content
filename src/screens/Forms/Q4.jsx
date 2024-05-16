import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";







function Q4(){


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

    

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

      
        <div className="anwser-section">

        <h3>Who is your target audience?</h3>
            <p>Knowing who you're creating for is super important, It helps you create content that resonates with what they like and need, so you do better as a creator.</p>
            <form action="">
                <input type="text" placeholder="Who is your target audience?" /> <br />  <br />

                <Link to="/q5"><button > Continue</button></Link>
            </form>
        </div>



  
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q4;