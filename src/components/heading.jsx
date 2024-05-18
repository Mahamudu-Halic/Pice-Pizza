const Heading = (props) => {
  const { fontFamily = "leckerliOne", title = "" } = props;
  return (
    <div className="headingContainer">
      <h2 className={`red headingTitle ${fontFamily}`}>{title}</h2>
    </div>
  );
};

export default Heading;
