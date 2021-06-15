
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

  
  const [count, setCount] = useState(0);

  return (
    <div>
 
      <Button  onClick={() => setCount(count + 1)}
        variant="contained"
        color="primary"
        size="large"
        
        className={classes.button}
        startIcon={<FavoriteIcon />}
      >
        {count}
      </Button>
    </div>
  );
}
