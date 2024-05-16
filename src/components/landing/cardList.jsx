import Card from "./card";
import { CardListItems } from "../../constant";

const CardList = () => {
  return (
    <div className="cardList">
      {CardListItems.map((item) => (
        <Card service={item} key={item?.title} />
      ))}
    </div>
  );
};

export default CardList;
