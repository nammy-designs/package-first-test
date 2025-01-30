import React from "react";

export interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return <div style={{ padding: 10, border: "1px solid #ccc" }}>{text}</div>;
};

export default MyComponent;
