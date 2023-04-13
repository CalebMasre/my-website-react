import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Chatroom from "./pages/Chatroom";
import AccountEntry from "./pages/AccountEntry";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' components={Home} exact>
            <Home />
          </Route>
          <Route path='/chat' component={Chatroom} exact>
            <Chatroom />
          </Route>
          <Route path='/register' component={AccountEntry} exact>
            <AccountEntry/>
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/noaccount" component = {Error} exact>
            <Error/>
          </Route>
          <Route path = "/profile" component = {Profile} exact>
            <Profile/>
          </Route>
          
          
        </Switch>
      </Router>
    </>
  )
}

export default App
