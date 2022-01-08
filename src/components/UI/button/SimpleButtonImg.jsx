import React from "react";
import classes from './SimpleButtonImg.module.css';

const SimpleButtonImg = (props) => {
    return (
        <button type="submit" className={classes.arrow} ><img src={props.hints.img} alt={props.hints.altimg}/></button>
    );
};

export default SimpleButtonImg;