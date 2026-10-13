import { useReducer } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1000 }
];

function reducer(cart, action) {
  switch (action.type) {
    case "ADD":
      const item = cart.find(p => p.id === action.payload.id);

      if (item) {
        return cart.map(p =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...cart, { ...action.payload, quantity: 1 }];

    case "INCREASE":
      return cart.map(p =>
        p.id === action.payload
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );

    case "DECREASE":
      return cart
        .map(p =>
          p.id === action.payload
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter(p => p.quantity > 0);

    case "REMOVE":
      return cart.filter(p => p.id !== action.payload);

    case "CLEAR":
      return [];

    default:
      return cart;
  }
}

function App() {
  const [cart, dispatch] = useReducer(reducer, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>ShopEasy</h1>

      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => dispatch({ type: "ADD", payload: p })}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price} × {p.quantity}

          <button onClick={() => dispatch({ type: "INCREASE", payload: p.id })}>
            +
          </button>

          <button onClick={() => dispatch({ type: "DECREASE", payload: p.id })}>
            -
          </button>

          <button onClick={() => dispatch({ type: "REMOVE", payload: p.id })}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Cart
      </button>
    </div>
  );
}

export default App;