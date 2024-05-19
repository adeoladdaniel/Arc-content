import { createContext, useContext, useState } from "react"

export const SurveyContext = createContext({})

export const SurveyWrapper = ({children}) => {
    
    const [formValues, setFormValues] = useState({})

    const value={
    formValues,setFormValues
    }
    return(
        <SurveyContext.Provider value={value}>
            {children}
        </SurveyContext.Provider>
    )
}

export const useSurveyData = () => useContext(SurveyContext)


export default SurveyWrapper