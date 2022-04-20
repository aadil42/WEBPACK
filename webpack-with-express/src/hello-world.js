import HelloBtn from './components/hello-btn/hello-btn';
import Heading from './components/heading/heading';
import React from 'react';

const heading = new Heading();
heading.render('this is argument for page');
const helloWorldBtn = new HelloBtn();
helloWorldBtn.render(); 
