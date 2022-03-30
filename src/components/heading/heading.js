import './heading.scss'

class Heading {
    render() {
        // create h1 tag
        const h1 = document.createElement('h1');
        // get the body tag
        const body = document.querySelector('body');
        // put Heading in h1 tag
        h1.innerText = 'Hello World';
        // append it to body
        body.appendChild(h1);
    }
}

let temp = 'temp';
export default Heading; 