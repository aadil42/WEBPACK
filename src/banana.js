//  create kivi.js 
// import heading inside kiwi.js
// and render it
// import kiwi iamge compoennet 
// render kiwi image 
// rename index.js to hello-world.js in src directory


import Heading from './components/heading/heading';
import bananaImg from './components/banana-image/banana-image';

const heading = new Heading();
const banana = new bananaImg();

heading.render();
banana.render();
