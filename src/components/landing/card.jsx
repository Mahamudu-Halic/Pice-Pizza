import person from "../../assets/person.png";

const Card = ({ service = {} }) => {
  const {
    icon = person,
    title = "profile",
    desc = "Lorem ipsum dolor sit amet, consectetur..",
  } = service;
  return (
    <div className="card">
      <div className="cardIcon">
        <img src={icon} alt="" width={50} height={50} />
      </div>
      <div className="cardContent">
        <p className="cardTitle">{title}</p>
        <p className="cardDesc">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
