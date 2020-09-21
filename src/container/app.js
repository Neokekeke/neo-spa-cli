/* eslint-disable no-unused-vars */
import React from 'react';
import app from './app.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add } from '@src/store/rootStore/actions';
import { selectorCount } from '@src/store/rootStore/selectors.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.warn('yes app and style mount', app);
    }

    handleClick = () => {
        // this.props.add();
        console.log('click', this.props);
    };

    render() {
        return (
            <div className={app.container}>
                <p>app index</p>
                <p onClick={this.handleClick}>点击</p>
                <p>{this.props.count}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: selectorCount()
    };
};
const mapDispatchToProps = dispatch => {
    return {
        add: dispatch(add())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// propTypes 规范类型检测
App.propTypes = {
    count: PropTypes.number,
    add: PropTypes.object
};