import "./cart-dropdown.styles.scss";
import Button from "../sign-up-form/Button/Button.component";

const Cartdropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
};
export default Cartdropdown;
