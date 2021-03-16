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
import {TestPromise} from '../utils/testJs/promise';

// test js
import '../utils/testJs/reduce';

// callApi
import { getX } from '../xhr/callApi';

export const ThemeContext = React.createContext();

@LoggerHoc(666)
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '我最帅',
            githubData: {}
        };
    }

    async componentDidMount() {
        console.warn('Yes App And Style Mount', app);
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

    handleGetApi = async () => {
        const res = await getX('https://api.github.com/');
        this.setState({
            githubData: res.data
        }, () => {
            console.log('github res', this.state.githubData);
        });
    }

    handleGetApi2 = () => {
        this.props.mutiplys();
    }

    render() {
        const { count } = this.props;
        const { name, githubData } = this.state;
        // console.log('this.props', this.props, this);

        return (
            <div className={app.container}>
                <p onClick={this.handleGetApi}>click</p>
                <p onClick={this.handleGetApi2}>click2</p>
                {githubData.authorizations_url}

                <p>Counter</p>
                <div className={app.controller}>
                    <p className={app.add} onClick={() => this.handleAdd(666)}>
                        add
                    </p>
                    <p className={app.minus} onClick={this.handleMinus}>
                        minus
                    </p>
                </div>
                <p>{count}</p>

                {/* <PureCom name={this.state.name}/>
                <NormalCom name={this.state.name}/> */}
                <div>-----------------------------------------</div>

                {/* <CreateElement/>
                <CloneElement>
                    <CreateElement/>
                    <div>clone children111</div>
                    <div>clone children222</div>
                </CloneElement>
                <ThemeContext.Provider value={{ ...this.state }}>
                    <ThemeContainer />
                </ThemeContext.Provider> */}

                <div>-----------------------------------------</div>
                {/* <Todo>
                    <TodoList />
                </Todo> */}

                {/* <div onClick={() => this.handleChangeState('name', '666')}>changeState</div>
                <MemoCom name={name}/>
                <Com2 name={name}/>

                <TestUseEffect />

                <User1 />
                <User2 /> */}

                {/* <TestContext />
                <Counter /> */}
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    count: selectorCount(),
});

const mapDispatchToProps = {
    add: Actions.add,
    minus: Actions.minus,
    mutiplys: Actions.mutiplys
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// propTypes 规范类型检测
App.propTypes = {
    count: PropTypes.number,
    add: PropTypes.func,
    minus: PropTypes.func,
    mutiplys: PropTypes.func
};
