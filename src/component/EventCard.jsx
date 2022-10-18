import React from "react";
import "../styles/test.css";
// import styled  from "styled-components";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// const Card = styled.a`
// font-family: "poppins", sans-serif;
// --bg-filter-opacity: 0.5;
// --bg-img: ${props=>`url(${props.img})`};
// background-image: linear-gradient(rgba(0, 0, 0, var(--bg-filter-opacity)), rgba(0, 0, 0, var(--bg-filter-opacity))), var(--bg-img);
// height: 15em;
// width: 12em;
// font-size: 1.5em;
// color: white;
// border-radius: 1em;
// padding: 1em;
// display: flex;
// align-items: flex-end;
// background-size: cover;
// background-position: center;
// box-shadow: 0 0 2em -1em black;
// transition: all, 0.5s;
// position: relative;
// overflow: hidden;
// text-decoration: none;
// `;


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
 


  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const EventCard = ({ name, desc, img, tag, date, setIsOpen }) => {

  const [open, setOpen] = React.useState(false);
  const handleclick = (e)=>{
    console.log(e)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div className="event-card" onClick={handleclick}>
      <div img={img} className="eventcard" href="#" onClick={handleClickOpen} style={{
        fontFamily: "poppins, sans-serif",
        filter:'0.5',
        background:`url(${img})`,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, var(--bg-filter-opacity)), rgba(0, 0, 0, var(--bg-filter-opacity))), var(--bg-img)`,
height: '15em',
width: '12em',
fontSize: '1.5em',

color: 'white',
borderRadius: '1em',
padding: '1em',
display: 'flex',
alignItems: 'flex-end',
backgroundSize: 'cover',
backgroundPosition: 'center',
boxShadow: '0 0 2em -1em black',
transition: 'all, 0.5s',
position: 'relative',
overflow: 'hidden',
textDecoration: 'none'








      }}>
        <div >
          <h1>{name}</h1>
          <p>{desc}</p>
          <div className="date">{date}</div>
          <div className="tags">
            <div className="tag">{tag}</div>
          </div>
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {desc}
          </Typography>
          <Typography gutterBottom>
            {date}
          </Typography>
          <Typography gutterBottom>
            {tag}
          </Typography>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </BootstrapDialog>


    </div>
  );
};

export default EventCard;
