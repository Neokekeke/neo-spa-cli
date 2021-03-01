import React from 'react';

export const CreateElement = () => {
    return React.createElement('div', {
        name: 'originNode'
    }, React.createElement('div', null, 'createNode'), React.createElement('div', null, 666));
};

export const CloneElement = (props) => {
    const childrenWithProps = React.Children.map(props.children, child => {
        if (typeof child.type == 'string') {
            return child;
        }
        console.log('props.children', child);
        return React.cloneElement(child, { id: 2 }); 
    });

    return childrenWithProps;
};

