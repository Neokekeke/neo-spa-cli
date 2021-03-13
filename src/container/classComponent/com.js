/* eslint-disable react/prop-types */
import React from 'react';

export default class NormalCom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            name: '初始值'
        };
    }

    componentDidMount() {
        console.log('normal com is mount');
        document.getElementById('sync').addEventListener('click', this.handleSetState, false);

        console.log('111111', this.state.name);
        this.setState({name: '初始值2'});
        console.log('222222', this.state.name);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('normal com is updated');
        // console.log('prevProps:', prevProps);
        // console.log('prevState:', prevState);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('normal com shouldComponentUpdate', nextProps, nextState);
    //     return true;
    // }

    handleChangeCount = () =>  {
        this.setState(state => {
            return {
                count: state.count == 5 ? 5 : state.count + 1
            };
        });
    }

    handleSetState = () => {
        console.log('--------前', this.state.name);
        this.setState({name: '变化了'});
        console.log('--------后', this.state.name);
    }

    render() {
        return <React.Fragment>
            <div onClick={this.handleChangeCount}> this is NormalComponent 
                {this.state.count} {this.props.name}
            </div>
            <div onClick={this.handleSetState}>测试setState异步的问题</div>
            <div id="sync">测试setState同步的问题</div>
        </React.Fragment>;
    }
}
