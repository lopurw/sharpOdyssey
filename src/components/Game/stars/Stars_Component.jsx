import React, { useState } from 'react';
import classes from '../stars/Stars_Component.module.css';

export default function Stars_Component({ filledStars, star1Class,star2Class,star3Class  }) {
    return (
        <div className={classes.stars}>
            <span className={`${classes.star1} ${star1Class} ${filledStars >= 1 ? classes.active : ''}`} >&#9733;</span>
            <span className={`${classes.star2} ${star2Class} ${filledStars >= 2 ? classes.active : ''}`}>&#9733;</span>
            <span className={`${classes.star3} ${star3Class} ${filledStars >= 3 ? classes.active : ''}`}>&#9733;</span>
        </div>
    );
}


