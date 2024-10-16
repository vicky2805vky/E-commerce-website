import React from "react";

const List = ({ array }) => {
  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
