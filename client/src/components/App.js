import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
