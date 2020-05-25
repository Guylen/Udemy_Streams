import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/edit" component={StreamEdit} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
