import React from 'react';

// 目的是加载异步组件，达到代码分割
export default function asyncComponent({ component, props, Placeholder }) {
    return class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
            this.isMount = false;
            this.state = {
                component: null
            };
            this.load();
        }

        componentDidMount() {
            this.isMount = true;
        }

        componentWillUnmount() {
            this.isMount = false;
        }

        load() {
            component().then(res => {
                if (this.isMount) {
                    this.setState({
                        component: res.default || res
                    });
                }
            });
        }

        render() {
            const { component: Component } = this.state;
            console.log('Component', Component);

            const isValidComponent = typeof Component === 'function';

            if (isValidComponent) {
                return <Component {...this.props}/>;            
            }
            if (!isValidComponent && Component == null) {
                console.error('error component', Component);
            }
            if (Placeholder) {
                return <Placeholder {...this.props}/>;
            }

            return null;
        }
    };
}
