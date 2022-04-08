import banana from './banana.jpg';
import './banana-image.scss';

class bananaImg {
    render() {
        const img =document.createElement('img');
        img.alt = 'banana';
        img.src = banana;
        img.classList.add('banana-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}


export default bananaImg; 
//
