import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css'
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart className='cartWidget' size={32} />
      {cartQuantity() > 0 && < Badge variant="danger" className="cart-badge">{cartQuantity()}</Badge>}
    </div >
  );
}

export default CartWidget;
