import { useSurveyData } from "../../components/SurveyContext"
import Q1 from "./Q1"
import Q3 from "./Q3"
import Q4 from "./Q4"
import Q5 from "./Q5"
import Q6 from "./Q6"
import Q7 from "./Q7"
import Q8 from "./Q8"
import Q9 from "./Q9"
import Q10 from "./Q10"
import Q11 from "./Q11"
import Q12 from "./Q12"
import Q13 from "./Q13"
import Q14 from "./Q14"
import Q15 from "./Q15"
import Q16 from "./Q16"
import Q17 from "./Q17"
import Q18 from "./Q18"
import SurveyResult from "../SurveyResult"





export default function (){

    const {step}=useSurveyData()
    return (<>
    
    {step===1 && <Q1/>}
    {step===2 && <Q3/>}
    {step==3 && <Q4/>}
    {step===4 && <Q5/>}
    {step===5 && <Q6/>}
    {step===6 && <Q7/>}
    {step===7 && <Q8/>}
    {step===8 && <Q9/>}
    {step===9 && <Q10/>}
    {step===10 && <Q11/>}
    {step===11 && <Q12/>}
    {step===12 && <Q13/>}
    {step===13 && <Q14/>}
    {step===14 && <Q15/>}
    {step===15 && <Q16/>}
    {step===16 && <Q17/>}
    {step===17 && <Q18/>}
    {step===18 && <SurveyResult/>}






    </>

    )
}