import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../services/admin/admin.context";
import { Loader } from "../../../components/loader";

const StatCardComponent = ({ Icon, title, total, bg, color }) => {
  const [count, setCount] = useState(0);

  const { isLoading } = useContext(AdminContext);

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="statCardItem flex align-center">
            <div className={`iconContainer ${bg}`}>
              <Icon color={color} size={23} />
            </div>

            <p className="containerItemTitle">{title}</p>
          </div>

          <div className="containerItem">
            <h3 className="containerItemTotal">{count}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default StatCardComponent;
