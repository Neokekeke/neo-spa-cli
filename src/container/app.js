/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import app from './app.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//selectors
import { createStructuredSelector } from 'reselect';
import { add, minus } from '@src/store/global/actions.js';
import { selectorCount } from '@src/store/global/selectors.js';
import ThemeContainer from './theme/themeContainer';

// test
// import * as Learn from '../utils/learn';
import { throttle } from '../utils/throttle';
import { debounce } from '../utils/debounce';
// import _ from 'lodash';

// Suspense 是懒加载的容器，定义了在懒加载前可以做的事情，比如loading，结合路由使用
const Com1 = lazy(() => import('./com1')); //懒加载
const Com2 = lazy(() => import('./com2'));

export const ThemeContext = React.createContext();

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '我最帅'
        };
    }

    componentDidMount() {
        console.warn('Yes App And Style Mount', app);
    }

    handleAdd = throttle((name) => {
        console.log(111, name);
        this.props.add();
    }, 1000);

    handleMinus = debounce(() => {
        this.props.minus();
    }, 2000);

    render() {
        const { count } = this.props;
        const { name } = this.state;
        // console.log('this.props', this.props, this);

        return (
            <div className={app.container}>
                {/* <p>Counter</p>
                <div className={app.controller}>
                    <p className={app.add} onClick={() => this.handleAdd(666)}>
                        add
                    </p>
                    <p className={app.minus} onClick={this.handleMinus}>
                        minus
                    </p>
                </div>
                <p>{count}</p>
                <Suspense fallback={<div>loading.......</div>}>
                    <Com1 name={name}><div>666</div></Com1>
                    <Com2 name={name} />
                </Suspense> */}
                
                <ThemeContext.Provider value={{ ...this.state }}>
                    <ThemeContainer />
                </ThemeContext.Provider>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    count: selectorCount(),
});

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
