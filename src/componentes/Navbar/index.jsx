
import reactLogo from '../../assets/react.svg'
import Navbar from './Navbar';

const NavBarContainer = ({ selectedCategory, onSelectCategory }) => {

  const categories = ['Human', 'Alien', 'All'];

  const handleCategoryChange = (category) => {
    onSelectCategory(category === 'All' ? null : category);
    console.log('Hola Mundo')
  };

  return (

    <>
      <Navbar
        child1={<img src={reactLogo} alt="React Logo" />}
        data={categories}
        onCategoryChange={handleCategoryChange}
      />
   
    </>




  );
};

export default NavBarContainer;
