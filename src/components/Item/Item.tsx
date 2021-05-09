import Button from "@material-ui/core/Button";

import { cartItemType } from "../../App";
import { Wrapper } from "./Item.styles";

type Props = {
  item: cartItemType;
  addToCart: (clickable: cartItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>${item.price}</span>
    </div>

    <Button onClick={() => addToCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
