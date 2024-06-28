import React, {
  Fragment,
  Children,
  useEffect,
  useState,
  isValidElement,
  cloneElement,
} from "react";

const GenericLoader = ({ url, dataProp, refresh, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData?.data);
    })();
  }, [url, refresh]);

  console.log("data", data);

  return (
    <Fragment>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            [dataProp]: data,
          });
        }
        return child;
      })}
    </Fragment>
  );
};
export default GenericLoader;
