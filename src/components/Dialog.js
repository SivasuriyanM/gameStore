import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View More
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.details.name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {/* <ListItem >
            <ListItemAvatar>{props.details.Image}</ListItemAvatar>
          </ListItem> */}
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Description"
              secondary={props.details.description}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
             primary="Version"
             secondary={props.details.version}/>
            <ListItemText 
            primary="Size"
             secondary={props.details.size}/>
          </ListItem>
          <Divider />
          <ListItem>
            <img className = 'preview-img' style = {{height : '238px',width : '400px', position: 'relative',left:'410px'}} src={props.details.image} alt = 'game-name'/>
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText>{props.details.link}</ListItemText>
          </ListItem>
          <Divider />
          
        </List>
       
      </Dialog>
    </div>
  );
}
