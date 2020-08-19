import * as styles from './index.less';
import * as R from 'ramda';
import { runTest } from './test/test';

const runFunc = () => {
    const div = document.createElement('div');
    div.classList.add(styles.box);
    div.innerHTML = 'hello world';
    document.body.appendChild(div);
    
    runTest();
    const result = R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]);
    console.log('result', result);
};

runFunc();
