
// --------- import external dependencies ----------
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// --------- import screen component with lazy load ----------
const Home = lazy(() => import("../screens/Home"))
const Q1 = lazy(() => import("../screens/Forms/Q1"))
const Q2 = lazy(() => import("../screens/Forms/Q2"))
const Q3 = lazy(() => import("../screens/Forms/Q3"))
const Q4 = lazy(() => import("../screens/Forms/Q4"))
const Q5 = lazy(() => import("../screens/Forms/Q5"))
const Q6 = lazy(() => import("../screens/Forms/Q6"))
const Q7 = lazy(() => import("../screens/Forms/Q7"))
const Q8 = lazy(() => import("../screens/Forms/Q8"))













function AppRoute() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
             <Route exact path="/" element={<Home />} /> 
          <Route exact path="/q1" element={<Q1/>} />
          <Route exact path="/q2" element={<Q2/>} />
          <Route exact path="/q3" element={<Q3/>} />
          <Route exact path="/q4" element={<Q4/>} />
          <Route exact path="/q5" element={<Q5/>} />
          <Route exact path="/q6" element={<Q6/>} />
          <Route exact path="/q7" element={<Q7/>} />
          <Route exact path="/q8" element={<Q8/>} />







       


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

