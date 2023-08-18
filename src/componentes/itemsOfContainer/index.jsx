
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './styles.css';

function ItemContainer(props) {

  const character = props.character;

  return (


<div className="item card text-center">
  <img
    src={character.image}
    alt={character.name}
    className="item-image card-img-top mx-auto"
    height={100}
    width={100}
  />

  <div className="card-body d-flex flex-column justify-content-center">
    <h3 className="item-title card-title">{character.name}</h3>
    <p className="item-price">
      <strong>Precio:</strong> <span style={{color: 'darkgreen', fontSize: '19px'}}>${character.price}</span>
    </p>
    <h6 className="item-species card-title">{character.species}</h6>
    <div className="item-quantity form-group">
      <Link to={`/detail/${character.id}`} className="btn btn-success">
        Ver detalle
      </Link>
    </div>
  </div>
</div>

  );
}

export default ItemContainer;
