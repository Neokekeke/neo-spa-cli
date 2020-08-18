import * as styles from './index.less';

const runFunc = () => {
    const div = document.createElement('div');
    div.classList.add(styles.box);
    div.innerHTML = 'hello world';
    document.body.appendChild(div);

    for (let i = 1; i < 10; i++) {
        console.log('log132', i);
    }
};

runFunc();