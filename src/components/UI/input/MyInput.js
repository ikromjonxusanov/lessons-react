import React from 'react';

const MyInput = React.forwardRef((props,ref)=> {
    return (
        <input {...props} type="text" ref={ref}/>
    );
})

export default MyInput;