


import reactLogo from '../../assets/react.svg'
import NavBar from '../../componentes/Navbar'

const NavBarContainer = () => {


  const categories = ['Human', 'Alien', 'All'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <NavBar
      child1={<img src={reactLogo} alt="React Logo" />}
      data={categories}
      onCategoryChange={handleCategoryChange}
    />
  );
};

export default NavBarContainer;
