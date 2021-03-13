/* eslint-disable react/prop-types */
import React from 'react';

export default class PureCom extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };
    }

    componentDidMount() {
        console.log('pure com is mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('pure com is updated', prevProps, prevState);
    }

    handleChangeCount = () => {
        this.setState(state => {
            return {
                count: { a: 2 }
            };
        });
    }

    render() {
        return <div onClick={this.handleChangeCount}> this is PureComponent 
            {this.props.name}
        </div>;
    }
}
