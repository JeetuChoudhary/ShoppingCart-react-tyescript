import { cartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: cartItemType[];
  addToCart: (clickedItem: cartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotalPrice = () =>
    cartItems.reduce((ack, item) => ack + item.amount * item.price, 0);

  console.log("Total price", calculateTotalPrice());

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>There is no item in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
    </Wrapper>
  );
};
export default Cart;
