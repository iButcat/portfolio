import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';
import DetailProject from './components/DetailProject';
import DetailEducation from './components/DetailEducation';

import Layout from './hocs/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id" component={DetailEducation} />
        <Route exact path="/:id" component={DetailProject} />
        <Fragment>
        <Layout>
          <Route exact path='/' component={Jumbotron} />
          <Route exact path='/' component={About} />
          <Route exact path='/' component={Project} />
          <Route exact path='/' component={Education} />
          <Route exact path='/' component={Contact} />
        </Layout>
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
