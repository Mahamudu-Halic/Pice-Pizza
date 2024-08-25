export const Empty = ({ caption }) => {
  return (
    <div className="empty flex flex-col justify-center items-center">
      <img src={"/empty.png"} alt="empty" />
      <p>{caption}</p>
    </div>
  );
};
