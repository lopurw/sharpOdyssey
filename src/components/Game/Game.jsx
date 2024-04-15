import React, { useState } from 'react';
import classes from '../Game/Game.module.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './stars/Home';
import Tooltip from '@mui/material/Tooltip';
import Stars_Component from './stars/Stars_Component';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function Game() {
    
   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [filledStars, setFilledStars] = useState(0);

    const params = new URLSearchParams(location.search);
    const passingPercentage = params.get('percentage') || 0;
    const level = params.get('name') || '';
    console.log(level)
    
    // Определите количество окрашенных звезд в зависимости от результата теста
    useState(() => {
        if (passingPercentage === '100') {
            setFilledStars(3);
        } else if (passingPercentage >= '50') {
            setFilledStars(2);
        } else if (passingPercentage > '0') {
            setFilledStars(1);
        } else {
            setFilledStars(0);
        }
    }, [passingPercentage]);

  
    return (
        
        <div className={classes.str1}>
            
            <div className={classes.img1}>
            <Link to={`/questions/${'level1'}`}>
                 <img src='src\home1.png' className={classes.home1}/>
            </Link>
                
            </div>
            <div className={classes.img2}>
            <Link to={`/questions/${'level2'}`}>
                <img src='src\home2.png' className={classes.home2}/>
                </Link>
            </div>
            <div className={classes.img3}>
            <Link to={`/questions/${'level3'}`}>
                <img src='src\home3.png' className={classes.home3}/>
                </Link>
            </div>
            <div className={classes.img4}>
            <Link to={`/questions/${'level4'}`}>
                <img src='src\home4.png' className={classes.home4}/>
                </Link>
            </div>
            <div className={classes.img5}>
            <Link to={`/questions/${'level5'}`}>
                <img src='src\home5.png' className={classes.home5}/>
                </Link>
            </div>
            <div className={classes.img6}>
            <Link to={`/questions/${'level6'}`}>
                <img src='src\home6.png' className={classes.home6}/>
                </Link>
            </div>
            <div className={classes.stars}>
    <div className={classes.star_home1}>
        {level === 'level1' ? <Stars_Component filledStars={filledStars} /> : <Stars_Component filledStars={0} />}
    </div>
    <div className={classes.star_home2}>
        {level === 'level2' ? <Stars_Component filledStars={filledStars} /> : <Stars_Component filledStars={0} />}
    </div>
    <div className={classes.star_home3}>
        {level === 'level3' ? <Stars_Component filledStars={filledStars} /> : <Stars_Component filledStars={0} />}
    </div>
    <div className={classes.star_home4}>
        {level === 'level4' ? <Stars_Component filledStars={filledStars} /> : <Stars_Component filledStars={0} />}
    </div>
    <div className={classes.star_home5}>
        {level === 'level5' ? <Stars_Component filledStars={filledStars} /> : <Stars_Component filledStars={0} />}
    </div>
    <div className={classes.star_home6}>
        {level === 'level6' ? <Stars_Component filledStars={filledStars} /> : <Stars_Component filledStars={0} />}
    </div>
</div>
            <div className={classes.roles}>
            <Tooltip title="Правила игры" placement="top">
            <img onClick={handleOpen} src="src\roles.png" className={classes.img_roles}/>
                 </Tooltip>
                    
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                BackdropProps={{
                    sx: { backdropFilter: 'blur(8px)' }, // Применяем размытие к заднему фону
                    invisible: true, // Убираем затемнение
                  }}
            >
                <Box className={classes.style1}>
             
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Правила игры
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, overflowX: 'hidden' }} className ={classes.style}>
              is mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi erat
              
                </Typography>
                
                </Box>
            </Modal>
            </div>
            
        </div>
    )
}