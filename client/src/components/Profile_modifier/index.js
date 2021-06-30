import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "200",
    overflowY: "scroll",
  },
  paper3: {
    border: "none",
    backgroundColor: "#A5C6BA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: "none",
    },
    borderRadius: 5,
  },
  button3: {
    width: "10em",
    height: "2.5em",
    margin: "0 0 2rem 0",
    backgroundColor: "#A5C6BA",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#F9F7ED",
    border: "none",
    borderRadius: "0.3rem",
    boxShadow: "0px 1px 1px 0.5px rgba(107,102,97,0.7)",
    marginBottom: "2rem",

    "&:hover": {
      background: "rgb(249, 247, 237,0.5)",
      color: "#6B6661",
    },
  },
}));

export default function Profile_modifier(props) {
  console.log(props);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let token = localStorage.getItem("token");

  const [profildata, setProfildata] = useState("");
  console.log(profildata);

  useEffect(() => {
    setProfildata(props.data);
  }, [props.data]);
  console.log(profildata);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(profildata)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // Handling Image Upload: 
    
    if (data.profile_picture[0]){
      
      const formData = new FormData();
      formData.append('image', data.profile_picture[0]);
    
    
    axios.post('http://localhost:3000/image', formData, {
      headers: {
        authorization: token,
        Accept: "application/json",
        'content-type': 'multipart/form-data'
      },
    }).then((response) => {
      // On a notre objet response qui contient le chemin de l'image uploadée
      console.log(response)
      axios
        .put(
          "http://localhost:3000/profil",

          {
            data: {
              username: data.username,
              email: data.email,
              city: data.city,
              presentation: data.presentation,
              species: data.species,
              profile_picture: response.data.location
            },
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
          //handle success
          console.log(response);
          window.location.reload();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    })

    // Je peux faire ma requête ajax a cet endroit là:
  }else {
      axios
      .put(
        "http://localhost:3000/profil",

        {
          data: {
            username: data.username,
            email: data.email,
            city: data.city,
            presentation: data.presentation,
            species: data.species,

          },
         
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
        //handle success
        window.location.reload();
        //window.location.reload();
      })
      .catch(function (response) {
        //handle error
       
      });
    }
  };

  return (
    <div>
      <button className={classes.button3} type="button" onClick={handleOpen}>
        Modifier mon profil
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal3}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper3}>
            <form
              className="Profil_modifier_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="Profil_modifier_label" htmlFor="Pseudo">
                Pseudo :{" "}
              </label>
              <input {...register("username")} type="text" id="username" value={profildata.username} onChange={(e) => setProfildata(e.target.value)} />

              <label htmlFor="email"> Email:</label>
              <input {...register("email")} type="email" id="email" value={profildata.email} onChange={(e) => setProfildata(e.target.value)} />

              <label className="Profil_modifier_label" htmlFor="City">
                Ville :{" "}
              </label>
              <input {...register("city")} type="text" id="city" value={profildata.city} onChange={(e) => setProfildata(e.target.value)} />

              <label className="Profil_modifier_form" htmlFor="Presentation" >
                Présentation :{" "}
              </label>
              <input
                {...register("presentation")}
                type="text"
                id="Presentation"
                value={profildata.presentation} onChange={(e) => setProfildata(e.target.value)}
              />

              <label className="Profil_modifier_form" htmlFor="species">
                Mes animaux (Genre espèce) :{" "}
              </label>
              <input {...register("species")} type="text" id="species" value={profildata.species} onChange={(e) => setProfildata(e.target.value)} />

              <label className="Profil_modifier_form" htmlFor="Profile_img">
                Ajouter une image :
              </label>
              <input
                {...register("profile_picture")}
                type="file"
                id="Profile_img"
                accept="image/png, image/jpeg, image/jpg"

              ></input>
              <label htmlFor="img">
                <PhotoCameraIcon />
              </label>
              <input type="submit" value="Envoyer le formulaire" />
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );

  
}
