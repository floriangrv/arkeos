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

export default function Create_sell_item() {
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
        Créer une annonce
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
              <label className="Sell_item_label" htmlFor="name">Nom scientifique (Genre espèce): </label>
              <input type="text" name="name" id="name" required />
              <label className="Sell_item_label" htmlFor="name">Localité : </label>
              <input type="text" name="name" id="name" required />
              <label className="Sell_item_label" htmlFor="name">Phase : </label>
              <input type="text" name="name" id="name" required />
              <label className="Sell_item_label" htmlFor="NC">L'animal est-il né en captivité ? </label>
              <div className="Radio">
                <label className="Radio_label" htmlFor="NC">Oui</label>
                <input type="radio" id="NC" name="NC" value="true"
                  defaultChecked />


              </div>

              <div className="Radio">
                <label className="Radio_label" htmlFor="NC">Non</label>
                <input type="radio" id="NC2" name="NC" value="false" />

              </div>
              <label className="Sell_item_label" htmlFor="name">Pays de naissance  : </label>
              <input type="text" name="name" id="name" required />
              <label className="Sell_item_label" htmlFor="name">Date de naissance (AAAA/MM/JJ) : </label>
              <input type="text" name="name" id="name" required />
              <label className="Sell_item_label SpecialLabel" htmlFor="story">Informations complémentaires :</label>
              <textarea id="story" name="story"
                rows="5" cols="33">
              </textarea>
              <label className="Sell_item_label SpecialLabel" htmlFor="avatar">Ajouter une image :</label>

              <input type="file"
                id="img" name="Sell_item_upload_image"
                accept="image/png, image/jpeg"></input>
                <label htmlFor="img"><PhotoCameraIcon /></label>
            </form>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
