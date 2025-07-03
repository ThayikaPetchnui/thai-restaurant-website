// src/Menu.js
function Menu() {
  return (
    <main>
      <section className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-item">
          <h3>Pad Thai</h3>
          <p>The classic Thai noodle dish with shrimp, tofu, and peanuts.</p>
          <strong>$14.99</strong>
        </div>
        <div className="menu-item">
          <h3>Green Curry</h3>
          <p>Spicy and aromatic curry with chicken and Thai eggplant.</p>
          <strong>$15.99</strong>
        </div>
        <div className="menu-item">
          <h3>Tom Yum Soup</h3>
          <p>Hot and sour soup with lemongrass, galangal, and mushrooms.</p>
          <strong>$8.99</strong>
        </div>
      </section>
    </main>
  );
}
export default Menu;