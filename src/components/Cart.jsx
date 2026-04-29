export default function Cart({ cart, increment, decrement }) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>{item.image} {item.name}</span>

          <div className="cart-controls">
            <button onClick={() => decrement(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increment(item.id)}>+</button>
        </div>
        </div>
      ))}
    </div>
  );
}