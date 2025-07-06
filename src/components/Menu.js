// src/components/Menu.js

import menuData from '../menuData';       // Import our menu data
import MenuItem from './MenuItem';       // Import our new single item component

function Menu() {
  // We'll filter the data to get a list of just the appetizers
  const appetizers = menuData.filter(item => item.category === 'Appetizer');
  const mainDishes = menuData.filter(item => item.category === 'Main Dish');
  const drinks = menuData.filter(item => item.category === 'Drink');

  return (
    <div className="menu-section">

      <h2>Appetizers</h2>
      {/* 
        .map() is a magical function for lists. 
        It goes through each 'item' in our 'appetizers' list 
        and turns it into a <MenuItem> component.
      */}
      {appetizers.map(item => (
        <MenuItem 
          key={item.id} // React needs a unique 'key' for lists
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}

      <h2>Main Dishes</h2>
      {mainDishes.map(item => (
        <MenuItem 
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}

      <h2>Drinks</h2>
      {drinks.map(item => (
        <MenuItem 
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
      
    </div>
  );
}

export default Menu;