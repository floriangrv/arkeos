import React from 'react';
import './style.css'


const Categorie_selector = () => (

  <div >
<label className= "Label" for="category">Catégorie</label>
<select className= "Select" name="category" id="category">
 
    <option value="goldfish">Toutes les catégories</option>
    <option value="dog">Serpents</option>
    <option value="cat">Lézards</option>
    <option value="hamster">Tortues</option>
    <option value="parrot">Crocodiliens</option>
    <option value="spider">Amphibiens</option>
    
</select>

<label className= "Label" for="theme">Thème</label>
<select className= "Select" name="theme" id="theme">
 
    <option value="goldfish">Tous les thème</option>
    <option value="dog">Terrarium</option>
    <option value="cat">Alimentation</option>
    <option value="hamster">Génétique</option>
    <option value="parrot">Anatomie </option>
    <option value="spider">Biotope et histoire naturelle</option>
    <option value="parrot">Législation </option>
    
</select>
</div>
)

export default Categorie_selector
