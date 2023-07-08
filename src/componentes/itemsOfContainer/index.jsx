
import './styles.css'

function ItemContainer() {

    return (
        <div className="item">
            <img src="ruta-a-la-imagen" alt="Imagen del producto" className="item-image" />
            <h3 className="item-title">Título del producto</h3>
            <p className="item-description">Descripción del producto</p>
            <div className="item-quantity">
                <label htmlFor="quantity-input">Cantidad:</label>
                <input type="number" id="quantity-input" className="quantity-input" min="1" defaultValue="1" />
            </div>
            <button className="add-to-cart-button">Agregar al carrito</button>
        </div>
    );
};


export default ItemContainer;