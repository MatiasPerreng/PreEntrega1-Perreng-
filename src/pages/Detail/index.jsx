
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../../componentes/itemDetailContainer';
import { useParams} from 'react-router-dom';

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
    </div>
  );
};

export default Detail;
