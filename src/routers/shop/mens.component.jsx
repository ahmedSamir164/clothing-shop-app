import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../component/product-card/product-card.component";
const Mens = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        if (title === "mens") {
          return (
            <Fragment key={title}>
              <h2>{title}</h2>
              <div className="products-card-container">
                {categoriesMap[title].map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            </Fragment>
          );
        }
      })}
    </Fragment>
  );
};

export default Mens;
