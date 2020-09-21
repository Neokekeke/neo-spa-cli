import React from 'react';
import app from './app.less';
import { add } from '../store/rootStore/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.warn('yes app and style mount', app);
    }

    handleClick = () => {
        add();
        console.log('click');
    }

    render() {
        return <div className={app.container}>
            <p>app index</p>
            <p onClick={this.handleClick}>点击</p>
        </div>;
    }
}

export default App;
