/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '@store/testSaga/actions';
import { createStructuredSelector } from 'reselect';
import { selectorSagaCount } from '@store/testSaga/selectors';

class TestSagaCom extends React.Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    handleAdd = () => {
        this.props.add();
    }

    handleMinus = () => {
        this.props.minus();
    }

    handleSyncAdd = () => {
        this.props.syncAdd();
    }

    render() {
        console.log('saga props', this.props);
        return (
            <div>
                <p>测试saga 模块</p>
                <p onClick={this.handleAdd}>add</p>
                <p onClick={this.handleMinus}>minus</p>
                <p onClick={this.handleSyncAdd}>syncAdd</p>
                {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    count: selectorSagaCount(),
});
const mapDispatchToProps = {
    add: Actions.ADD,
    minus: Actions.MINUS,
    syncAdd: Actions.SYNC_ADD
};

export default connect(mapStateToProps, mapDispatchToProps)(TestSagaCom);
