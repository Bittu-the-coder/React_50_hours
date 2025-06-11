import axios from "axios";
import React, { useEffect, useState, ReactNode } from "react";
interface ResourceLoaderProps {
  resourceUrl: string;
  resourceName: string;
  children: ReactNode;
}

const ResourceLoader = ({
  resourceUrl,
  resourceName,
  children,
}: ResourceLoaderProps) => {
  const [state, setState] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resourceUrl}`
        );
        setState(response.data);
      } catch (err) {
        setError("Failed to load resource");
      }
    })();
  }, [resourceUrl]);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            [resourceName]: state,
          });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
