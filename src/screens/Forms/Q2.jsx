import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";








function Q2(){


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

       <p className="welcometext">Hi Donald, <br/>
              <b>  “As a creator, you attempt to share your best qualities with the world.”</b>
                At A Random Creative, our goal started with helping creators improve the way they create, find talent, and execute.
                After two years of assisting creators in time management, we realized that creators are people too! Our goal to aid in creation, sustainability, and scaling was falling short. One critical element was missing: VALUE
                So we created the “Creator Value Calculator” to help you do just that
                Please take your time to answer every question honestly. The goal of the calculator is to help audit, review, and guide your content journey.
                Are you ready?
            </p>

       <Link to="/q3">     <button className="q-button">I'm Ready</button></Link>



       <div className="image1">
        <img src="./assets/success.svg" alt="" />
       </div>

            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q2;