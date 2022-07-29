import React from "react";
import Header from "../../header/Header.logic";

interface Iprops {
  name: string;
  childComp?: React.ReactNode;
}

export const WrapperView = (props: Iprops) => {
  const { name, childComp } = props;

  const containerName = `lcontainer ${name}`;

  return (
    <div>
      <Header />

      <div className={containerName}>
        <div>{childComp}</div>
      </div>
    </div>
  );
};
