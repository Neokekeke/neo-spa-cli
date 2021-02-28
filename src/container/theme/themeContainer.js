import React, {
    Fragment
} from 'react';
import ThemeConsumer from './themeConsumer';

// 中间传递的
export default function ThemeContainer() {
    console.warn('this is ThemeContainer and do nothing');
    return <Fragment>
        ThemeContainer: 
        <ThemeConsumer/>
    </Fragment>;    
}
