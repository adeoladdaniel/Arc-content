import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";







function Q3(){


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

       <div>
       </div>

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>
        <div className="check-box-section">
        <h4>Which of these platforms are you active on? (select your top 3)</h4>

             <div className="c-option">  <input type="checkbox" /> <img src="./assets/youtube.svg" alt="" /> Youtube</div>

             <div className="c-option">  <input type="checkbox" /> <img src="./assets/instagram.svg" alt="" /> Instagram</div>


             <div className="c-option">  <input type="checkbox" /> <img src="./assets/tiktok.svg" alt="" /> Tiktok</div>


             <div className="c-option">  <input type="checkbox" /> <img src="./assets/twitter.svg" alt="" /> Twitter</div>


        </div>

        <Link to="/q4">     <button className="q-button">Continue</button></Link>

       <div className="image1">
       </div>

            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q3;