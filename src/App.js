import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import Contact from "./pages/Contact";
import Chatroom from "./pages/Chatroom";
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
          <Route path='/chat' component={Skills} exact>
            <Chatroom />
          </Route>
          <Route path='/skills' component={Skills} exact>
            <Skills />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
          
        </Switch>
      </Router>
    </>
  )
}

export default App
