import "./App.css";
import React from "react";
import { Prompt, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import IndividualResult from "./components/Results/individualresults";
import { useSelector } from "react-redux";
const Header = React.lazy(() => import("./components/Header/Header"));
const BasicForm = React.lazy(() => import("./components/BasicForm/BasicForm"));
const Questions = React.lazy(() => import("./components/Questions/Questions"));
const Results = React.lazy(() => import("./components/Results/Results"));

function App() {
  const showType = useSelector((state) => state.type.stateType);

  return (
    <React.Fragment>
      <Header />
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/entry-form">
        {showType === "SurveyClicked" && <BasicForm />}
      </Route>

      <Route path="/questions">
        {showType === "ProceedClicked" && <Questions />}
      </Route>
      <Route path="/results">
        <Results />
      </Route>
      <Route path="/indresults">
        <IndividualResult />
      </Route>
    </React.Fragment>
  );
}

export default App;
