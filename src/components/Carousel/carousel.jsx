import './carousel.css'
import movie1 from '../../images/rescate_imposible.jpg';
import movie2 from '../../images/inmaculada.jpg';
import serie2 from '../../images/married_with_my_husband.png';
import serie3 from '../../images/quenn_tears.jpg';

import Card from '../card/tarjeta';

function SlideImage() {
  return (
    <div>
      <div className="slide-frame">
        <h2>Estrenos</h2>
        <ul>
          <li><img src={movie1} /></li>
          <li><img src={movie2} /></li>
          <li><img src={serie2} /></li>
          <li><img src={serie3} /></li>
        </ul>
      </div>
      <div class="card-container row">
        <h2>Accion</h2>
        <Card />
      </div>
      <div class="card-container row">
        <h2>Terror</h2>
        <Card />
      </div>
      <div class="card-container row">
        <h2>Drama</h2>
        <Card />
      </div>
    </div>
  );
}

export default SlideImage;