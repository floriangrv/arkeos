import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { useForm } from 'react-hook-form'
import axios from "axios";
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
  button: {
    width: "10em",
    height: "2.5em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#F9F7ED",
    border: "none",
    borderRadius: "0.3rem",

    "&:hover": {
      background: "#F9F7ED",
      color: "#6B6661",
    },
  }
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

  const { register, handleSubmit } = useForm()
const onSubmit= (data) => {
  console.log(data);
  // Je peux faire ma requête ajax a cet endroit là: 
  axios({
    method: "post",
    url: "/http://localhost:3000/marketplace",
    data: data,
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
}

const onErrors = (errors) => {
  console.log(errors);
}
  

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
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

            <form  className="Sell_item_form" onSubmit={handleSubmit(onSubmit, onErrors)} >
              <label className="Sell_item_label" htmlFor="scientific_name">Nom scientifique (Genre espèce): </label>
              <input {...register("scientific_name", { required: true })} type="text" id="name" required />
              <label className="Sell_item_label" htmlFor="locality">Localité : </label>
              <input {...register('locality', { required: true })} type="text" id="locality" required />
              <label className="Sell_item_label" htmlFor="phase">Phase : </label>
              <input {...register('phase', { required: true })} type="text" id="phase" required />
              <label className="Sell_item_label" htmlFor="born_captivity">L'animal est-il né en captivité ? </label>
              <div className="Radio">
                <label className="Radio_label" htmlFor="born_captivity">Oui</label>
                <input {...register('born_captivity', { required: true })} type="radio"  value="true"
                  defaultChecked />


              </div>

              <div className="Radio">
                <label className="Radio_label" htmlFor="born_captivity">Non</label>
                <input {...register('born_captivity', { required: true })} type="radio"  value="false" />

              </div>

              <label className="Sell_item_label" htmlFor="name">Pays de naissance  : </label>
              <input {...register('native_country', { required: true })} type="text" id="native_country" required />
              <label className="Sell_item_label" htmlFor="birth_date">Date de naissance (AAAA/MM/JJ) : </label>
              <input {...register('birth_date', { required: true })} type="text" id="birth_date" required />
              <label className="Sell_item_label SpecialLabel" htmlFor="content">Informations complémentaires :</label>
              <textarea {...register('content', { required: true })} id="content" 
                rows="5" cols="33">
              </textarea>
              <label className="Sell_item_label SpecialLabel" htmlFor="avatar">Ajouter une image :</label>

              <input {...register('Sell_item_upload_image', { required: false })} type="file"
                id="img" 
                accept="image/png, image/jpeg"></input>
              <label htmlFor="img"><PhotoCameraIcon /></label>
              <label className="Sell_item_label" htmlFor="price">Prix : </label>
              <input {...register('price', { required: true })} type="text" id="price" required />
              <input type="submit" value="Envoyer le formulaire"/>
            </form>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
