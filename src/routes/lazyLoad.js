// 组件懒加载，路由懒加载
// 一个高阶组件
import React from 'react';

export default function lazyLoad(loader) {
    return class LazyLoad extends React.Component {
        constructor(props) {
            super(props);
            this.state = { component: null };
            this.load();
        }

        // 懒加载方法
        load() {
            loader().then(res => {
                this.setState({
                    component: res.default || res
                });
            });
        }

        render() {
            const { component: Component} = this.state;
            if (Component) {
                return <Component />;   
            }
            return null;
        }
    };
}