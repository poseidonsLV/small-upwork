import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import JobPost from "./components/JobPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoreAboutJob from "./components/MoreAboutJob";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/jobs/details/:jobId" component={MoreAboutJob} />
        <Route exact path="/job-posting" component={JobPost} />
        <Route exact path="/" component={Jobs} />
      </Switch>
    </Router>
  );
}

export default App;
