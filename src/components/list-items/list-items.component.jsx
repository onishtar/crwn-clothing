import "./list-items.styles.scss";

const ListItems = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div
      className="category-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="category-body-container">
        <h2>title</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default ListItems;
