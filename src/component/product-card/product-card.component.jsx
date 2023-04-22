import Button from "../sign-up-form/Button/Button.component";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  console.log(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;