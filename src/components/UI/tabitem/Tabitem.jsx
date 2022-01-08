import React from "react";
import classes from './Tabitem.module.css';

const Tabitem = ({hintsTab}) => {
    let isActive = `${classes.tabs_item}`;
    let spanContent = 'Inactive tab';
    if(hintsTab.isActive) {
        isActive += ` ${classes.active}`;
        spanContent = 'Active tab';
    }

return (
    <div id={hintsTab.id} className={isActive} onClick={hintsTab.fun}>
        <i className={hintsTab.iClassName}></i>
        <span>{spanContent}</span>
    </div>
    );
};

export default Tabitem;