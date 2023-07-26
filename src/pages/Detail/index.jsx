// Detail.js (en la carpeta "pages")
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../../componentes/itemDetailContainer';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      });
  }, [id]);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <ItemDetailContainer character={character} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/" className="btn btn-success" >
          Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default Detail;
