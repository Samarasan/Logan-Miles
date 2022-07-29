import React from "react";
import "./Accordian.scss";

interface IProps {
  title: string;
  childComp: React.ReactNode;
}

export const Accordion: React.FC<IProps> = (props: IProps) => {
  const [open, setOpen] = React.useState(true);

  const { title, childComp } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? " accordion-open" : "accordion"}>
      <div className="accordion-title " onClick={handleClick}>
        {title}
      </div>
      <div className="accordion-content">{childComp}</div>
    </div>
  );
};
