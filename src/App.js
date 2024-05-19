import "./scss/main.scss";
import Route from "./routes/Route";
import SurveyWrapper, {useSurveyData} from "./components/SurveyContext";


function App() {

  return (
    <SurveyWrapper>
      <Route/>
    </SurveyWrapper>
  ) ;
}

export default App;
