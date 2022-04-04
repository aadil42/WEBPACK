import HelloBtn from './components/hello-btn/hello-btn.js';
import Heading from './components/heading/heading.js';




const heading = new Heading();
heading.render();

const hello_btn = new HelloBtn();
hello_btn.render();

if(!process) {
    console.log('this is none mode');
} else if(process.env.NODE_ENV === 'development') {
    console.log('this is development mode');
} else {
    console.log('this is produciton mode');
}   