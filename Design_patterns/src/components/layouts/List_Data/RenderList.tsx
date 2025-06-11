import { ReactElement } from "react";

interface RenderListProps<T> {
  data: T[];
  resourceName: string;
  dataToRender: (props: { [key: string]: T }) => ReactElement;
}

const RenderList = <T,>({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: RenderListProps<T>) => {
  return (
    <div>
      {data.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RenderList;
