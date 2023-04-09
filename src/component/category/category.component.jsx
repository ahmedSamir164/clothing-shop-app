import "./category.component.styles.scss";
const Category = ({ category }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop NOw</p>
      </div>
    </div>
  );
};

export default Category;
