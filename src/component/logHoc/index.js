/* eslint-disable react/prop-types */
/**
 * logger hoc
 * 在componentDidMount中打印日志
 * options 是参数
 */
import React, { Fragment } from 'react';

function LoggerHoc(options) {
    return function(Wrapcomponent) {
        return class Logger extends React.Component {
            componentDidMount() {
                console.log(`%c ${this.formatDate()} ~每天说一遍我最帅`, 'background: rgb(255, 177, 63);color:#fff;font-size:20px');
            }
    
            formatDate = () => {
                const year = new Date().getFullYear();
                const month = new Date().getMonth() + 1;
                const day = new Date().getDate();
                return year + '-' + month + '-' + day;
            }
    
            render() {
                return <Fragment>
                    <Wrapcomponent {...this.props}/>
                </Fragment>;
            }
        };
    };
}

export default LoggerHoc;