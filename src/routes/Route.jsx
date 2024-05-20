
// --------- import external dependencies ----------
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useSurveyData } from "../components/SurveyContext";

// --------- import screen component with lazy load ----------
const Home = lazy(() => import("../screens/Home"))
const Form = lazy(() => import("../screens/Forms"))
// const Q2 = lazy(() => import("../screens/Forms/Q2"))
// const Q3 = lazy(() => import("../screens/Forms/Q3"))
// const Q4 = lazy(() => import("../screens/Forms/Q4"))
// const Q5 = lazy(() => import("../screens/Forms/Q5"))
// const Q6 = lazy(() => import("../screens/Forms/Q6"))
// const Q7 = lazy(() => import("../screens/Forms/Q7"))
// const Q8 = lazy(() => import("../screens/Forms/Q8"))
// const Q9 = lazy(() => import("../screens/Forms/Q9"))
// const Q10 = lazy(() => import("../screens/Forms/Q10"))
// const Q11 = lazy(() => import("../screens/Forms/Q11"))
// const Q12 = lazy(() => import("../screens/Forms/Q12"))
// const Q13 = lazy(() => import("../screens/Forms/Q13"))
// const Q14 = lazy(() => import("../screens/Forms/Q14"))
// const Q15 = lazy(() => import("../screens/Forms/Q15"))
// const Q16 = lazy(() => import("../screens/Forms/Q16"))
// const Q17 = lazy(() => import("../screens/Forms/Q17"))
// const Q18 = lazy(() => import("../screens/Forms/Q18"))


















function AppRoute() {
const {step}=useSurveyData()
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>

          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/collect-data" element={<Form/>} />
          {/* <Route exact path="/q2" element={<Q2/>} />
          <Route exact path="/q3" element={<Q3/>} />
          <Route exact path="/q4" element={<Q4/>} />
          <Route exact path="/q5" element={<Q5/>} />
          <Route exact path="/q6" element={<Q6/>} />
          <Route exact path="/q7" element={<Q7/>} />
          <Route exact path="/q8" element={<Q8/>} />
          <Route exact path="/q9" element={<Q9/>} />
          <Route exact path="/q10" element={<Q10/>} />
          <Route exact path="/q11" element={<Q11/>} />
          <Route exact path="/q12" element={<Q12/>} />
          <Route exact path="/q13" element={<Q13/>} />
          <Route exact path="/q14" element={<Q14/>} />
          <Route exact path="/q15" element={<Q15/>} />
          <Route exact path="/q16" element={<Q16/>} />
          <Route exact path="/q17" element={<Q17/>} />
          <Route exact path="/q18" element={<Q18/>} /> */}











       


              {/* 
          <Route exact path="/signup" component={Signup} />
              <Route exact path="/forget" component={Forget} /> 
             <Route exact path="/dashboard" component={Dashboard} />  */}
            {/*<Route exact path="/music" component={Music} />  */}
  
  
  
            
          </Routes>
        </Router>
      </Suspense>
  
  
    );
  }
  
  export default AppRoute;

