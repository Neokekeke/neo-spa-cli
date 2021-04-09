import React, {
    useEffect
} from 'react';

function Input(props) {
    console.log('input render');
    useEffect(() => {
        console.log('input effect');
    });

    return <React.Fragment>
        input：<input />
    </React.Fragment>;
}

export default React.memo(Input);
