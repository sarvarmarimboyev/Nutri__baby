import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Blog from './components/pages/blog/Blog';
import Shop from './components/pages/purchase/Shop';
import Class from './components/pages/classes/Class';
import Teacher from './components/pages/teacher/Teacher';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/classes' compoent={Class} exact>
            <Class />
          </Route>

          <Route path='/teacher' compoent={Teacher} exact>
            <Teacher />
          </Route>
          <Route path='/blog' compoent={Blog} exact>
            <Blog />
          </Route>
          <Route path='/Shop' compoent={Shop} exact>
            <Shop />
          </Route>
        </Switch>
      </Router>
    </>


  );
};

export default App;


