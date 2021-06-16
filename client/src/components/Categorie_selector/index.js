import React from 'react';
import './style.css'


const Categorie_selector = () => (

  <div className= "Selector_container">
<label className= "Label" for="htmlFor">Catégorie</label>
<select className= "Select" name="category" id="category">
 
    <option value="all">Toutes les catégories</option>
    <option value="Serpents">Serpents</option>
    <option value="Lézards">Lézards</option>
    <option value="Tortues">Tortues</option>
    <option value="Crocodiliens">Crocodiliens</option>
    <option value="Amphibiens">Amphibiens</option>
    
</select>

<label className= "Label" for="htmlFor">Thème</label>
<select className= "Select" name="theme" id="theme">
 
    <option value="all">Tous les thèmes</option>
    <option value="Terrarium">Terrarium</option>
    <option value="Alimentation">Alimentation</option>
    <option value="Génétique">Génétique</option>
    <option value="Anatomie">Anatomie </option>
    <option value="Biotope et histoire naturelle">Biotope et histoire naturelle</option>
    <option value="Législation">Législation </option>
    
</select>
</div>
)

export default Categorie_selector
