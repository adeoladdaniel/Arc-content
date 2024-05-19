import React from "react";
// import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FormDataProvider } from '../../components/FormDataContext';
import InputComponent1 from '../../components/DisplayComponent';
import InputComponent2 from '../../components/InputComponent1';
import DisplayComponent from '../../components/InputComponent2';







function Q1(){


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              {/* <Navbar/> */}

 


       <FormDataProvider>
      <div>
        <InputComponent1 />
        <InputComponent2 />
        <DisplayComponent />
      </div>
    </FormDataProvider>
            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Q1;