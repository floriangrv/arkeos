import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from "axios";

const address = window.location.href;
let url = address.split("/");
let id = url[url.length - 1];

let token = localStorage.getItem("token");

const useStyles = makeStyles((theme) => ({
  button: {
    width: "6em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    color: "#F9F7ED",
    "&:hover": {
      background: "rgb(249, 247, 237)",
      color: "#6B6661",
    },
  },
}));

const Delete_conversation_button = (props) => {
  const [id, setId] = useState();
  const classes = useStyles();

  const onClick = () => {
    axios
      .delete(
        `http://localhost:3000/messages/${discussion.id}`,
        {
          raiting: counter,
        },

        {
          headers: {
            authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  useEffect(() => {
    setId(props.data.discussion.id);
  }, [props.data.discussion.id]);

  return (
    <div>
      <Button
        onClick={() => onClick()}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<DeleteForeverIcon />}
      >
        
      </Button>
    </div>
  );
};
export default Delete_conversation_button;
