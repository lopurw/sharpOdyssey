import React, { useState } from 'react';
import classes from '../stars/Stars_Component.module.css';

export default function Stars_Component() {
    const [activeStars, setActiveStars] = useState([false, false, false]);

    const handleStarClick = (index) => {
        const newActiveStars = activeStars.map((star, i) => i === index ? !star : star);
        console.log(`Clicked on star ${index + 1}`);
        setActiveStars(newActiveStars);
    };

    return (
        <div className={classes.stars}>
            <span className={`${classes.star1} ${activeStars[0] ? classes.active : ''}`} onClick={() => handleStarClick(0)}>&#9733;</span>
            <span className={`${classes.star2} ${activeStars[1] ? classes.active : ''}`} onClick={() => handleStarClick(1)}>&#9733;</span>
            <span className={`${classes.star3} ${activeStars[2] ? classes.active : ''}`} onClick={() => handleStarClick(2)}>&#9733;</span>
        </div>
    );
}


