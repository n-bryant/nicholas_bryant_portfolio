import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/App.css';
import Landing from './components/Landing';
import MainContent from './components/MainContent/MainContent';
import NotFound from './components/NotFound';

const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  return (
    <BrowserRouter basename={repo}>
      <div>
        <Match exactly pattern="/" component={Landing} />
        <Match exactly pattern="/about" component={MainContent} />
        <Match exactly pattern="/projects" component={MainContent} />
        <Match exactly pattern="/contact" component={MainContent} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector('#root'));
