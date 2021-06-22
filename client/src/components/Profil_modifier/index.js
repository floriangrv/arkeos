import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import './style.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'Wrap',
    width: '200',


  },
  paper: {
    border: 'none',
    backgroundColor: '#A5C6BA',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: 'none',
    },
    borderRadius: 5,

  },
}));

export default function Profile_modifier() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Modifier mon profil
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>
          <div className={classes.paper}>

            <form action="" method="get" className="Sell_item_form">
              <label className="Profile_modifier_label" htmlFor="name">Pseudo: </label>
              <input type="text" name="name" id="name" required />
              <label className="Sell_item_label SpecialLabel" htmlFor="avatar">Avatar :</label>

              <input type="file"
                id="img" name="Sell_item_upload_image"
                accept="image/png, image/jpeg"></input>
              <label htmlFor="img"><PhotoCameraIcon /></label>
            </form>
            <label className="Profile_modifier_label" htmlFor="name"> Ville : </label>
            <input type="text" name="name" id="name" required />
            <label for="story">Présentation:</label>

            <textarea id="story" name="story"
              rows="5" cols="33">

            </textarea>

            <label className="Profile_modifier_label" htmlFor="name">Liste des espèces : </label>
            <input type="text" name="name" id="name" required />


          </div>
        </Fade>
      </Modal>
    </div>
  );
}
