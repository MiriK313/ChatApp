import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Pages */
import ChatPage from "./pages/ChatPage/index";
import LoginPage from "./pages/LoginPage/index";

/* Components */

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/chatpage">
          <ChatPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
