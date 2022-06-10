import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/subreddit/:subredditId">
                <Subreddit/>
            </Route>
        </Switch>
    );
}

export default App;

// TODO: Opdracht 3. Informatie binnenhalen en verwerken
