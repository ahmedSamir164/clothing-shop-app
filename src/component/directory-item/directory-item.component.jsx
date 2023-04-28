import {
  BackgroundImage,
  Body,
  DirectoryItemsContainer,
} from "./directory-item.component.styles";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  return (
    <DirectoryItemsContainer onClick={() => navigate(`shop/${category.title}`)}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemsContainer>
  );
};

export default DirectoryItem;
