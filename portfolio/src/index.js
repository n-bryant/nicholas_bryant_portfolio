import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/App.css';
import Landing from './components/Landing';
import MainContent from './components/MainContent/MainContent';
import About from './components/MainContent/About';
import RecentProjects from './components/MainContent/RecentProjects';
import Contact from './components/MainContent/Contact';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Landing} />
        <Match exactly pattern="/main" component={MainContent} />
        <Match exactly pattern="/main/about" component={About} />
        <Match exactly pattern="/main/recent-projects" component={RecentProjects} />
        <Match exactly pattern="/main/contact" component={Contact} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector('#root'));
