import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';
import Signup from './Signup';
import { useState } from 'react';
function App() {
  const [logedin, setLogedin] = useState(false)
  return (
    <Router>
      <div className="App">
        <Navbar logedin={logedin} setLogedin={setLogedin}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/signup">
              <Signup setLogedin={setLogedin}/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path={"*"}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
