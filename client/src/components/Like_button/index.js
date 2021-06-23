
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from "axios";


const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];

  let token = localStorage.getItem('token');

const Rating = () => {

  return axios
  .post(
    `http://localhost:3000/articles/${id}/raiting`,
    
    {
      headers: {
        authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }

  )
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};


const useStyles = makeStyles((theme) => ({
  button: {
    width: "6em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    color: "#F9F7ED",
    '&:hover': {
      background: "#F9F7ED",
      color: "#6B6661"
   },
    
  },

}));

export default function IconLabelButtons() {
  const classes = useStyles();

  


  return (
    <div>
 
      <Button  onClick={() => Rating ()}
        variant="contained"
        color="primary"
        size="large"
        
        className={classes.button}
        startIcon={<FavoriteIcon />}
      >
       
      </Button>
    </div>
  );
}
