import classes from './Daily_Reward.module.css';
import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';

export default function Daily_Reward() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Открываем модальное окно при монтировании компонента
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="daily-reward-title"
        aria-describedby="daily-reward-description"
      >
        <Box className={classes.modal}>
          <h1 className={classes.title}>
            ЕЖЕДНЕВНАЯ НАГРАДА
          </h1>
          <Typography id="daily-reward-description" variant="h6" className={classes.description}>
            Вы получили свою ежедневную награду:
          </Typography>
          <Typography variant="h2" className={classes.reward}>
            <span>&#9733;</span> 1
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
