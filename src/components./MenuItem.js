// src/components/MenuItem.js

// We receive 'props' which is an object containing all the data we pass in.
// We use { image, name, description, price } to unpack those props into variables.
function MenuItem({ image, name, description, price }) {
    return (
      <div className="menu-item">
        <img src={image} alt={name} className="menu-item-image" />
        <div className="menu-item-text">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <p className="menu-item-price"><strong>{price}</strong></p>
      </div>
    );
  }
  
  export default MenuItem;