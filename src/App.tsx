import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Customer } from "./pages/Customer";
import { Dashboard } from "./pages/Dashboard";
import { Items } from "./pages/Items";
import { Login } from "./pages/Login";
import { Sales } from "./pages/Sales";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/sales" component={Sales} />
            <ProtectedRoute exact path="/customer" component={Customer} />
            <ProtectedRoute exact path="/items" component={Items} />
            <Route path="*" component={() => <>page not found</>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
