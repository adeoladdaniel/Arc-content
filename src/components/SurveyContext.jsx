import { createContext, useContext, useState } from "react"
import { initializeSurveyScore } from './FormInitializer'

export const SurveyContext = createContext({})

export const SurveyWrapper = ({children}) => {
    
    const [formValues, setFormValues] = useState({surveyScores: initializeSurveyScore()})
    const [step,setStep]=useState(1)

    const value={
    formValues,setFormValues,step,setStep
    }
    return(
        <SurveyContext.Provider value={value}>
            {children}
        </SurveyContext.Provider>
    )
}

export const useSurveyData = () => useContext(SurveyContext)


export default SurveyWrapper