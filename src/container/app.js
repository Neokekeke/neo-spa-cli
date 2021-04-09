/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import app from './app.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//selectors
import { createStructuredSelector } from 'reselect';
import * as Actions from '@src/store/global/actions.js';
import { selectorCount } from '@src/store/global/selectors.js';
import ThemeContainer from './theme/themeContainer';
import * as SagaActions from '@src/store/testSaga/actions.js';
import { selectorSagaCount } from '@src/store/testSaga/selectors.js';

// test
// import * as Learn from '../utils/learn';
import { throttle } from '../utils/throttle';
import { debounce } from '../utils/debounce';
// import _ from 'lodash';
import { CloneElement, CreateElement } from '../utils/testReact/testReactApi';

// logger hoc
import LoggerHoc from '../component/logHoc';

// Suspense 是懒加载的容器，定义了在懒加载前可以做的事情，比如loading，结合路由使用
// const Com1 = lazy(() => import('./com1')); //懒加载

// PureComponent compare Component
import PureCom from './classComponent/pureCom';
import NormalCom from './classComponent/com';

// shouldComponentUpdate and React.memo
import { MemoCom, Com2 } from './funcComponent/memoCom';

// function com
// import { Todo, TodoList } from '../utils/testReact/testReactHook';

// hook
import { TestUseEffect } from '../utils/testReact/useEffect';
import { User1, User2 } from '../utils/testReact/useCustom';
import { TestContext } from '../utils/testReact/useContext';
import { Counter } from '../utils/testReact/useReducer';
import { TestPromise } from '../utils/testJs/promise';
import '../utils/testJs/prototype';

import CounterHook from './counterHook';

// test js
// import '../utils/testJs/reduce';

// callApi
import { getX } from '../xhr/callApi';

import TestSagaCom from './testSagaCom';

// mini redux
import '../miniRedux/test/reducers';

export const ThemeContext = React.createContext();

@LoggerHoc(666)
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '我最帅',
            githubData: {},
            count: 1
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('nextProps, prevState', nextProps, prevState);
        return {count: 3};
    }

    getSnapshotBeforeUpdate() {

    }

    async componentDidMount() {
        console.warn('Yes App And Style Mount', app);
        setTimeout(() => {
            // this.state. 方式赋值是不会更新组件的
            this.state.name = '我最帅666';
            // console.log('this.state', this.state);
            // this.setState({count: 2});
        }, 1000);
        console.log('this.state', this.state);
    }

    handleAdd = throttle((name) => {
        console.log(111, name);
        this.props.add();
    }, 1000);

    handleMinus = debounce(() => {
        this.props.minus();
    }, 2000);

    handleChangeState = (key, val) => {
        this.setState({
            [key]: val
        });
    }

    handleGetApi2 = () => {
        this.props.mutiplys();
    }

    handleTestSaga  = () => {
        this.props.testSaga();
    }

    render() {
        const { count, sagaCount } = this.props;
        const { githubData, name } = this.state;

        return (
            <div className={app.container}>
                <p onClick={this.handleTestSaga}>test sagaa</p>
                {githubData.authorizations_url}
                <p>count: {count}</p>
                <p>sagaCount: {sagaCount}</p>
                <TestSagaCom />

                <CounterHook count={this.state.count}/>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    count: selectorCount(),
    sagaCount: selectorSagaCount()
});

const mapDispatchToProps = {
    add: Actions.add,
    minus: Actions.minus,
    mutiplys: Actions.mutiplys,
    testSaga: SagaActions.SYNC_ADD,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// propTypes 规范类型检测
App.propTypes = {
    count: PropTypes.number,
    add: PropTypes.func,
    minus: PropTypes.func,
    mutiplys: PropTypes.func,
    testSaga: PropTypes.func
};
