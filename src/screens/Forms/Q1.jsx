import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";







function Q1(){


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
            <form action="">
                <input type="text" placeholder="What is your Name?" /> <br />  <br />

                <button>Get started</button>
            </form>
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