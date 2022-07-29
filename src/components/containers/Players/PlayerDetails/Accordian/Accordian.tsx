import React from "react";
import { useComment } from "../useComments.hook";
import "./Accord.scss";

interface IProps {
  title: string;
  childComp: React.ReactNode;
  ppid : any
}

export const Accordion: React.FC<IProps> = (props: IProps) => {
 const {open,handleClick} = useComment()

  const { title, childComp ,ppid } = props;
  return (
    <div className={open ? " accordion-open-comment" : "accordion"}>
      <div className="accordion-title-comment " onClick={()=>{handleClick(ppid.ppid)} }>
        {title}
      </div>
      <div className="accordion-content-comment">{childComp}</div>
    </div>
  );
};
