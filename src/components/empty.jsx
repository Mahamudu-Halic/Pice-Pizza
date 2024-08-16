import empt from "../../public/empty.png";

export const Empty = ({ caption }) => {
  return (
    <div className="empty flex flex-col justify-center items-center">
      <img src={empt} alt="empty" />
      <p>{caption}</p>
    </div>
  );
};
