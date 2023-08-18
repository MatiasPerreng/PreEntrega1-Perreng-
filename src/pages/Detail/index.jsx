import React, { useEffect, useState, useContext } from 'react';
import ItemDetailContainer from '../../componentes/itemDetailContainer';
import { RotateLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { FirestoreContext } from '../../context/FirestoreContext';

const Detail = () => {
  const { id } = useParams();
  const { characters } = useContext(FirestoreContext);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const characterData = characters.find(
      (char) => char.id === parseInt(id)
    );

    setTimeout(() => {
      setCharacter(characterData);
    }, 1000);
  }, [characters, id]);

  if (!character) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RotateLoader
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div>
      <ItemDetailContainer character={character} />
    </div>
  );
};

export default Detail;
