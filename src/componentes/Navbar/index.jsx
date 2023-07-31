
import reactLogo from '../../assets/react.svg'
import Navbar from './navbar';

const NavBarContainer = () => {

  const categories = [
    {name:'Human', path:'/category/Human', id:1},
    { name:'Alien', path:'/category/Alien', id:2},
    {name:'All', path:'/', id:3}

    ];


  return (



    <>
      <Navbar
        child1={<img src={reactLogo} alt="React Logo" />}
        data={categories}
      />
    </>

  );

};



export default NavBarContainer;
