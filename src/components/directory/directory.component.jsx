import "./directory.styles.scss";
import ListItems from "../list-items/list-items.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <ListItems category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
