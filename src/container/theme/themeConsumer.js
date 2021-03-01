import React from 'react';
import {
    ThemeContext
} from '../app';

export default function ThemeConsumer(props) {
    console.warn('this is ThemeConsumer receive context from app');

    return <ThemeContext.Consumer>
        {
            context => {
                const { name } = context;
                console.log('context', context);
                return <div>{name}</div>;
            }
        }
    </ThemeContext.Consumer>;
}

ThemeConsumer.defaultProps = {
    
};