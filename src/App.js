import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
