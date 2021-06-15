import React from 'react';
import './style.css'


const Categorie_selector = () => (

  <div >
<label className= "Label" for="category">Catégorie</label>
<select className= "Select" name="category" id="category">
 
    <option value="goldfish">Toutes les catégories</option>
<<<<<<< HEAD
    <option value="dog">Serpents</option>
    <option value="cat">Lézards</option>
    <option value="hamster">Tortues</option>
    <option value="parrot">Crocodiliens</option>
    <option value="spider">Amphibiens</option>
=======
    <option value="Serpents">Serpents</option>
    <option value="Lézards">Lézards</option>
    <option value="Tortues">Tortues</option>
    <option value="Crocodiliens">Crocodiliens</option>
    <option value="Amphibiens">Amphibiens</option>
>>>>>>> Categories_button
    
</select>

<label className= "Label" for="theme">Thème</label>
<select className= "Select" name="theme" id="theme">
 
    <option value="goldfish">Tous les thème</option>
<<<<<<< HEAD
    <option value="dog">Terrarium</option>
    <option value="cat">Alimentation</option>
    <option value="hamster">Génétique</option>
    <option value="parrot">Anatomie </option>
    <option value="spider">Biotope et histoire naturelle</option>
    <option value="parrot">Législation </option>
=======
    <option value="Terrarium">Terrarium</option>
    <option value="Alimentation">Alimentation</option>
    <option value="Génétique">Génétique</option>
    <option value="Anatomie">Anatomie </option>
    <option value="Biotope et histoire naturelle">Biotope et histoire naturelle</option>
    <option value="Législation">Législation </option>
>>>>>>> Categories_button
    
</select>
</div>
)

export default Categorie_selector
