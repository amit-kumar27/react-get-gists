import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import { NotFoundPage } from './components/NotFoundPage';
import SearchGistsView from './views/SearchGistsView';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact={true} component={SearchGistsView} />
            {/* <Route path="/:id" component={GistDetails} /> */}
            <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
