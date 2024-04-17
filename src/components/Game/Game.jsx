import React, { useEffect, useState } from 'react';
import classes from '../Game/Game.module.css';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from './stars/Home';
import Tooltip from '@mui/material/Tooltip';
import Stars_Component from './stars/Stars_Component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Game() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [filledStars, setFilledStars] = useState({}); // Объект для хранения количества звезд по id уровня
    const location = useLocation();
    const [allStars, setAllStars] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5151/api/level/results', {
            withCredentials: true
        })
            .then(response => {
                const results = response.data.results;
                const starsByLevel = {};
                results.forEach(result => {
                    starsByLevel[result.levelId] = result.levelResult;
                });
                setFilledStars(starsByLevel);
                setAllStars(parseInt(response.data.totalSum))

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const params = new URLSearchParams(location.search);
    const passingPercentage = params.get('percentage') || 0;
    const level = params.get('name') || '';

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
                {[1, 2, 3, 4, 5, 6].map(levelId => (
                    <div key={levelId} className={classes[`star_home${levelId}`]}>

                        { <Stars_Component filledStars={filledStars[levelId] || 0}  />}
                    </div>
                ))}
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
                        sx: { backdropFilter: 'blur(8px)' },
                        invisible: true,
                    }}
                >
                    <Box className={classes.style1}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Правила игры
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, overflowX: 'hidden' }} className={classes.style}>
                            is mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi eratDuis mollis, est non commodo luctus, nisi erat
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}
