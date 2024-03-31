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
  
    return (
        <div className={classes.str1}>
            <div className={classes.img1}>
            <Link to={`/questions/${'level1Questions'}`}>
                 <img src='src\home1.png' className={classes.home1}/>
            </Link>
                
            </div>
            <div className={classes.img2}>
            <Link to={`/questions/${'level2Questions'}`}>
                <img src='src\home2.png' className={classes.home2}/>
                </Link>
            </div>
            <div className={classes.img3}>
            <Link to={`/questions/${'level3Questions'}`}>
                <img src='src\home3.png' className={classes.home3}/>
                </Link>
            </div>
            <div className={classes.img4}>
            <Link to={`/questions/${'level4Questions'}`}>
                <img src='src\home4.png' className={classes.home4}/>
                </Link>
            </div>
            <div className={classes.img5}>
            <Link to={`/questions/${'level5Questions'}`}>
                <img src='src\home5.png' className={classes.home5}/>
                </Link>
            </div>
            <div className={classes.img6}>
            <Link to={`/questions/${'level6Questions'}`}>
                <img src='src\home6.png' className={classes.home6}/>
                </Link>
            </div>
            <div className={classes.stars}>
                <div className={classes.star_home1}>
                <Stars_Component  />
                </div>
                <div className={classes.star_home2}>
                <Stars_Component  />
                </div>
                <div className={classes.star_home3}>
                <Stars_Component  />
                </div>
                <div className={classes.star_home4}>
                <Stars_Component  />
                </div>
                <div className={classes.star_home5}>
                <Stars_Component  />
                </div>
                <div className={classes.star_home6}>
                <Stars_Component  />
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
                Duis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi erat
                </Typography>
                
                </Box>
            </Modal>
            </div>
            
        </div>
    )
}