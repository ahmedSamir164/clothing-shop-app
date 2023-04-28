import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../sign-up-form/Button/Button.component";
import CartItem from "../cart-item/cart-item.component";

const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      {cartItems ? (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>No cart items</EmptyMessage>
      )}

      <Button onClick={navigateHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};
export default Cartdropdown;
