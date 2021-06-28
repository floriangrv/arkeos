import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const useStyles = makeStyles((theme) => ({
  button: {
    width: "10em",
    height: "2.5em",
    
    backgroundColor: "#A5C6BA",
    boxShadow: "0px 1px 3px 1px rgba(107,102,97,0.7)",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#F9F7ED",
    border: "none",
    borderRadius: "0.3rem",

    "&:hover": {
      background: "#F9F7ED",
      color: "#6B6661",
    },
  },
}));

export default function Contact_button(props) {
  const classes = useStyles();
console.log(props)
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<MailOutlineIcon />}
       
      > 
      <a href={"/message/" + props.data}>
      Contacter
         </a>
       
      </Button>
      </div>
  );
  };
