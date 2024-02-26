// src/App.js
import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CounterPage from './components/CounterPage';
import ErrorBoundaryTestPage from './components/ErrorBoundaryTestPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/error-boundary-test">Error Boundary Test</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={CounterPage} />
          <Route exact path="/error-boundary-test" component={ErrorBoundaryTestPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
