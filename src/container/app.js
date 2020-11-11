/* eslint-disable no-unused-vars */
import React from 'react';
import app from './app.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add, minus } from '@src/store/global/actions.js';
import { selectorCountData } from '@src/store/global/selectors.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.warn('Yes App And Style Mount', app);
    }

    handleAdd = () => {
        this.props.add();
    };

    handleMinus = () => {
        this.props.minus();
    };

    render() {
        const { count } = this.props;
        console.log('this.props', this.props);

        return (
            <div className={app.container}>
                <p>Counter</p>
                <div className={app.controller}>
                    <p className={app.add} onClick={this.handleAdd}>
                        add
                    </p>
                    <p className={app.minus} onClick={this.handleMinus}>
                        minus
                    </p>
                </div>
                <p>{count}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: selectorCountData(state),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(add()),
        minus: () => dispatch(minus()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// propTypes 规范类型检测
App.propTypes = {
    count: PropTypes.number,
    add: PropTypes.func,
    minus: PropTypes.func,
};