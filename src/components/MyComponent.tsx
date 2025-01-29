import React from "react";

export interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return <div className="text-3xl font-bold underline">{text}</div>;
};

export default MyComponent;
