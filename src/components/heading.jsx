const Heading = (props) => {
  const { fontFamily = "leckerliOne", title = "" } = props;
  return (
    <div className="headingContainer">
      <hr />
      <h2 className={`red headingTitle ${fontFamily}`}>{title}</h2>
      <hr />
    </div>
  );
};

export default Heading;
