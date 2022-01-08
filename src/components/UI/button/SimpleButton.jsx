import React from 'react';
import classes from './SimpleButton.module.css';

const SimpleButton = ({hints}) => {
    let iscurr = `${classes.page_number}`;
    if(hints.isCurrent) {
        iscurr += ` ${classes.current}`;
    }

    return (
        <button id={hints.id} className={iscurr} onClick={hints.fun}>{hints.content}</button>
    );
};

export default SimpleButton;