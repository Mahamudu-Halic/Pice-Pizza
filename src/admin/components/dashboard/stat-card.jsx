import { useEffect, useState } from "react";

const StatCardComponent = ({ Icon, title, total, bg, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up an interval to update the count every second
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < total) {
          return prevCount + 1;
        } else {
          clearInterval(interval); // Clear the interval when count reaches total
          return prevCount;
        }
      });
    }, 5);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [total]);

  

  return (
    <div className="statCard">
      <div className={`iconContainer ${bg}`}>
        <Icon color={color} size={23} />
      </div>

      <div className="containerItem">
        <p className="containerItemTitle">{title}</p>
        <h3 className="containerItemTotal">{count}</h3>
      </div>
    </div>
  );
};

export default StatCardComponent;
