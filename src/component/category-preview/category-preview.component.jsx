import "./category-preview.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => navigate(`${title}`)}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview" key={title}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {/* <div className="products-card-container">
          {categoriesMap[title].map((product) => {
            if (categoriesMap[title].indexOf(product) <= 3) {
              return <ProductCard key={product.id} product={product} />;
            }
          })}
        </div> */}
      </div>
    </div>
  );
};

export default CategoryPreview;
