import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {  useSurveyData } from "../components/SurveyContext";








function Home(){

  const {setFormValues,setStep,formValues} = useSurveyData()


  // const navigate = useNavigate()


    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              <Navbar/>

              <div className="header">
                <img src="./assets/megaphone-dynamic-premium.svg" className="loud" alt="" />
                <img src="./assets/star-dynamic-premium.svg" className="starboy" alt="" />

                  <div className="hero-section">
                    <div className="hero-text">
                      <h1>    A RANDOM CREATIVE  TOOL <br />
                              VALUE CALCULATOR  </h1>
                              <p>Are you ready to Output 2x more videos? <br />
                              Are you ready to get all the support you need as a creator?  <br />
                              We created the Value Calculator to be your second brain, we know you need help</p>
                      <button className="hero-but">Get Started</button>
                    </div>

                   
                  </div>

              </div>
              <div className="section">



                <div className="text-section">



                <p>“As a creator, you attempt to share your best qualities with the world.”At A Random Creative, our goal started with helping creators improve the way they create, find talent, and execute.
                  Our Clients and Creative vendors are the backbone of the agency. </p>

                  <img src="./assets/bookmark-fav-dynamic-premium.svg" className="bookboy" alt="" />


                  <h1>what we're good at: </h1>

                  <p>- Getting strategic with industry insights, trends, and killer content ideas.? <br />
                  - Creating captivating stories wrapped in content that your audience will recognize and connect with... <br />
                   - High-impact video and story editing to improve retention (Watch time + Content = A happy community member)?</p>


                   <h1>Our Track-Record In A Nutshell: ?</h1>
                   <p>- Over 23 Random Creatives (Clients) supported; with communities of over 20m+ followers?<br />
                   - Over 500m views generated online (YouTube, Instagram, and TikTok combined) ?<br />
                   - An amazing global community of creative vendors ?</p>

                   <p>After two years of assisting creators in time management, we realized that creators are people too! Our goal to aid in creation, sustainability, and scaling was falling short. One critical element was missing: VALUE So we created the “Creator Value Calculator” to help you do just that Please take your time to answer every question honestly. The goal of the calculator is to help audit, review, and guide your content journey. Are you ready? </p>
                </div>



                <div>

                <div>
        <img src="./assets/tweet-something.svg" alt="" />
       </div>

       <div className="label-section"> 
        <img src="./assets/logo.svg" alt="" /> <h1> Creator Value Calculator</h1>
       </div>

        <div className="input-section">
            <div >
                <input type="text" placeholder="What is your Name?" value={formValues?.name} onChange={(e) => {
                    setFormValues((prev) => ({...prev, name:e.target.value}))
                }}/> <br />  <br />

                <button
                type="button"
                onClick={() => {
                    setStep(2)
                }}
                //  disabled={isButtonDisabled}
                > Get started</button>
            </div>
        </div>



       <div className="image1">
        <img src="./assets/business-deal.svg" alt="" />
       </div>
                </div>

                {/* <div className="create-section">

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

                </div> */}


                {/* <div className="content-section">
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
                </div> */}

               
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