import React, { useState } from 'react';
import classes from '../stars/Stars_Component.module.css';

export default function Stars_Component({ filledStars }) {
    return (
        <div className={classes.stars}>
            <span className={`${classes.star1} ${filledStars >= 1 ? classes.active : ''}`} >&#9733;</span>
            <span className={`${classes.star2} ${filledStars >= 2 ? classes.active : ''}`}>&#9733;</span>
            <span className={`${classes.star3} ${filledStars >= 3 ? classes.active : ''}`}>&#9733;</span>
        </div>
    );
}


