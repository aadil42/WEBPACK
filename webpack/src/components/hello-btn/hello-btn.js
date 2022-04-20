import './hello-btn.scss';

class HelloBtn {
    buttonCssClass = 'hello-btn';

    render() {
        const btn = document.createElement('button');
        // give it a class of hello-btn
        btn.classList.add(this.buttonCssClass);
        // add text in btn element
        btn.innerText = 'Hello World';
        // create body element
        const body = document.querySelector('body');
        // give it a onclick function
        btn.onclick = () => {
            // create a div element
            const p = document.createElement('p');
            // give it inner html of hello world
            p.innerHTML = 'Hello world!';
            // add class of hello-world-text
            p.classList.add('hello-world-text');
            // append it to body
            body.appendChild(p);
        }
        // append btn to body
        body.appendChild(btn);
    }
}

export default HelloBtn