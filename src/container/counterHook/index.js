import React from 'react';
import Counter from './counter';
import Input from './input';

export default class CounterHook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            {/* <Input />             */}
            <Counter/>
        </React.Fragment>;
    }
}