import React from 'react';
import cameleon from '../../assets/images/cameleon.png';
import profil from '../../assets/images/profil.png';
import Like_button from '../Like_button';
import './style.css';


const Article = () => {
  return (

    <div className='Article'>
      <div className='One_article_card'>
        <div className='Image_container'>
          <img className='One_article_picture'
            src={cameleon}
            alt="Image de l'article">
          </img>
        </div>
        <div className='Body_container'>
          <h1 className='Article_title'> La respiration cutanée chez les amphibiens</h1>
          <hr className="One_article_divider "></hr>
          <p className='One_article_body'>Du système respiratoire des amphibiens, on connait les branchies. Elles permettent à l'animal de respirer sous l'eau pendant sa phase larvaire. Souvent, ces organes sont abandonnés à mesure de la transformation en adulte. Au cours du processus, des poumons se développent et prennent le relais des branchies qui disparaissent alors.

          On pourrait penser qu'en ce point réside l'ingéniosité de la nature : un appareil adapté à chaque période de la vie et au milieu environnant.

          Mais non. Les gluants vont plus loin.

          On estime qu'au moins 30 % des échanges gazeux ont lieu au niveau de la peau. Certaines espèces respirent même exclusivement par ce procédé !
          En effet, l'enveloppe cutanée des amphibiens est perméable et fortement vascularisée. De ce fait, les molécules contenues dans l'air passent facilement dans le sang et inversement.
          Ceci explique comment des grenouilles peuvent survivre plusieurs mois en étant enterrées sous la vase.
 Mais cette capacité n'est pas uniquement avantageuse : elle induit une grande sensibilité aux pollutions atmosphériques. De nombreuses espèces sont en danger à cause des élément toxiques qui détériorent de plus en plus la qualité de l'air partout dans le monde.
 Du système respiratoire des amphibiens, on connait les branchies. Elles permettent à l'animal de respirer sous l'eau pendant sa phase larvaire. Souvent, ces organes sont abandonnés à mesure de la transformation en adulte. Au cours du processus, des poumons se développent et prennent le relais des branchies qui disparaissent alors.

          On pourrait penser qu'en ce point réside l'ingéniosité de la nature : un appareil adapté à chaque période de la vie et au milieu environnant.

          Mais non. Les gluants vont plus loin.

          On estime qu'au moins 30 % des échanges gazeux ont lieu au niveau de la peau. Certaines espèces respirent même exclusivement par ce procédé !
          En effet, l'enveloppe cutanée des amphibiens est perméable et fortement vascularisée. De ce fait, les molécules contenues dans l'air passent facilement dans le sang et inversement.
          Ceci explique comment des grenouilles peuvent survivre plusieurs mois en étant enterrées sous la vase.
 Mais cette capacité n'est pas uniquement avantageuse : elle induit une grande sensibilité aux pollutions atmosphériques. De nombreuses espèces sont en danger à cause des élément toxiques qui détériorent de plus en plus la qualité de l'air partout dans le monde.</p>
            
              <Like_button />
             

          <div className='Profil_picture_container'>
            <img className='Profil_picture'
              src={profil}
              alt="Image de profil"></img>
            <p className="Author_pseudo" >Pseudo</p>
          
          </div>
        </div>


      </div>
      <div className="Answers">

        <div className="Answer_container">
          <div className='Profil_picture_container_answer'>
            <img className='Profil_picture_answer'
              src={profil}
              alt="Image de profil"></img>

            
          </div>
          <p className='Answer_pseudo'>Pseudo</p>
          <p className="Answer"> Reponse de l'utilisateur qui dit que l' article est super trop bien wahou</p>

        </div>

        <div className="Answer_form_container">
<div className="Answer_form">

<form action="/ma-page-de-traitement" method="post">
       
    
        <textarea className= 'Form' placeholder="Inscrivez votre reponse"></textarea>
        <div className= 'Submit_container'>
        <input className= 'Submit' type="submit" value="Envoyer"></input>
        </div>

</form>
   </div>
        </div>
      </div>
    </div>

  )
};

export default Article;
