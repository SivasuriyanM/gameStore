import React from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions}from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
// import { games } from '../helpers/gameCon'

// const useStyles = makeStyles({
//     root: {
//       // add your custom styles here
//     //   backgroundColor: '#f2f2f2',
//     //   borderRadius: '10px',
//     //   boxShadow: 'none',
//       maxWidth: '100%',
//     //   width: '100%',
//     //   margin: '0 auto',
//     },
//   });

function Def(props) {
    // const classes = useStyles();
    const[open,setOpen] = useState(false);
  return (
    <>
    <Button onClick={()=>setOpen(true)}>View more</Button>
    <Dialog 
    aria-labelledby='dialog-title'
    aria-describedby='dialog-description'
    open={open}
    onClose={()=>setOpen(false)}
    // classes={{ root: classes.root }}
    
    >
        <DialogTitle id= 'dialog-title'>{props.details.name} </DialogTitle>
        <DialogContent id='dialog-description'>
            <DialogContentText>
                {/* <div className = 'dialg-area'>
                    {props.details.summary}
                </div> */}
                <div>
                    {props.details.image}
                </div>
                <div className = 'dialg-area'>
                    {props.details.description}
                </div>
                {/* <div className = 'dialg-area'>
                    {props.details.addtnlCnt}
                </div> */}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>Cancel</Button>
            <Button autoFocus>{props.details.link}</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}
export default Def;
