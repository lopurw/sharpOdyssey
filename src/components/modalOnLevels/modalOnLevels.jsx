import classes from '../quiz/questions.module.css';
import Tooltip from '@mui/material/Tooltip';

import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function modalOnLevels(){
    return(
        <>
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
                    
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 5, ml: 5, mr: 5, overflowX: 'hidden' }} className ={classes.style}>
                <div className={classes.code}>
                    <div dangerouslySetInnerHTML={{ __html: codeSnippet6 }} className={classes.text}/>
              </div>
                
                </Typography>
                
                </Box>
            </Modal>
        </>
    )
}