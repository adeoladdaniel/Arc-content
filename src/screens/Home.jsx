import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";







function Home(){


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              <Navbar/>

              <div className="header">
                  <div className="hero-section">
                    <div className="hero-text">
                      <h1>    Get Your Contents to right audience, Boost your Reach and get Connected  </h1>
                       <p>new generation of apps gets more and more personalized to dive deep into specific problems of a particular user. Today’s design story is about a product of this kind: meet Inspora, a virtual personal assistant in the issues of style and fashion.</p>
                      <button className="hero-but">Get Started</button>
                    </div>

                    <div>
                        <img src="./assets/hero-img.svg" alt="hero" />
                    </div>
                  </div>

              </div>
              <div className="section">

                <div className="create-section">

                  <h1>Say Goodbye to bad content <br /> Creating Days </h1>

                      <div className="before-after-section">

                              <div className="before-section">
                                <p className="capsule">Before</p>
 
                                <img src="./assets/we-got-a-problem.svg" className="pood" alt="we" />

                                <div> <img src="./assets/close-circle.svg" alt="" /> <p>Poor Reach to actual Audience </p></div>
                                <div> <img src="./assets/close-circle.svg" alt="" /> <p>Having issue about what Content to post  </p></div>
                                <div> <img src="./assets/close-circle.svg" alt="" /> <p>Having issue on what Content to create </p></div>


                              </div>
                              <div className="after-section">
                                <p className="capsule01">After</p>

                                <img src="./assets/megaphone-voice-being-heard.svg" className="pood" alt="we" />

                                <div> <img src="./assets/tick-circle.svg" alt="" /> <p>Reach intended Audience with your content</p></div>
                                <div> <img src="./assets/tick-circle.svg" alt="" /> <p> Know and post the Right Content</p></div>
                                <div> <img src="./assets/tick-circle.svg" alt="" /> <p>Know and create the content for your Audience </p></div>


                              </div>

                      </div>

                </div>


                <div className="content-section">
                    <h1> Arc Content Calculator has everything needed <br /> to evaluate your content creator</h1>

                      <div className="phone-section">
                          <div className="p-text-section">
                                <h3>Question Tailored to help you eevery step  of the way on your Content Creating Journey</h3>
                                <button > Try It</button>
                          </div>

                          <div className="p-img-section">
                            <img src="./assets/Frame 33.svg" alt="asset" />

                          </div>
                      </div>
                      <div className="tab-section">
                            <div className="emoji-section">
                                <h3>Contents of Different Kind</h3>
                                <button > Try It</button>

                          

                                <h1> 😎🤓🥳🤠🚀</h1>

                            </div>

                            <div className="context-section">
                                <h3>Question Tailored to help you eevery step of the way on your Content Creating Journey</h3>

                                <p>new generation of apps gets more and more personalized to dive deep into specific problems of a particular user. Today’s design story is about a product of this kind: meet Inspora, a virtual personal assistant in the issues of style and fashion.</p>
                                <button > Try It</button>


                            </div>
                           </div>
                </div>

               
                <h1 className=" testimonial-header">How Arc Content Calculator Changed Lives</h1>

              <div className="testimonial-section">
                    <div className="testimonial-card">
                        <p>new generation of apps gets more and more personalized to dive deep into specific problems of a particular user. Today’s design story is about a product of this kind: meet Inspora, a virtual personal assistant in the issues of style and fashion.</p>

                        <div className="user"><img src="./assets/Ellipse 7.svg" alt="asset" /> <img src="./assets/Frame 4798.svg" alt="asset" /></div>
                    </div>

                    <div className="testimonial-card">
                        <p>new generation of apps gets more and more personalized to dive deep into specific problems of a particular user. Today’s design story is about a product of this kind: meet Inspora, a virtual personal assistant in the issues of style and fashion.</p>

                        <div className="user"><img src="./assets/Ellipse 7.svg" alt="asset" /> <img src="./assets/Frame 4798.svg" alt="asset" /></div>
                    </div>
                    <div className="testimonial-card">
                        <p>new generation of apps gets more and more personalized to dive deep into specific problems of a particular user. Today’s design story is about a product of this kind: meet Inspora, a virtual personal assistant in the issues of style and fashion.</p>

                        <div className="user"><img src="./assets/Ellipse 7.svg" alt="asset" /> <img src="./assets/Frame 4798.svg" alt="asset" /></div>
                    </div>

                    <div className="testimonial-card">
                        <p>new generation of apps gets more and more personalized to dive deep into specific problems of a particular user. Today’s design story is about a product of this kind: meet Inspora, a virtual personal assistant in the issues of style and fashion.</p>

                        <div className="user"><img src="./assets/Ellipse 7.svg" alt="asset" /> <img src="./assets/Frame 4798.svg" alt="asset" /></div>
                    </div>
              
              </div>
              </div>
              
              <hr />


            
            
<Footer/>

            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Home;