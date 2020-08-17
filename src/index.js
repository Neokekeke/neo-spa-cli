import './index.less';

const runFunc = () => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = 'hello world';
    document.body.appendChild(div);

    for (let i = 1; i < 10; i++) {
        console.log('log', i);
    }
};

runFunc();