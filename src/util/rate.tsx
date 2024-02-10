import React from "react";

interface RenderElementsProps {
  count: number;
}

const Rate: React.FC<RenderElementsProps> = ({ count }) => {
  let number = count % 6;
  const elements = Array.from({ length: 5 }, (_, index = 5) => (
    <li key={index}>
      <img src="starUnfill.png" alt="star" />
    </li>
  ));

  for (let i = 0; i < number; i++) {
    elements.splice(
      i,
      1,
      <li key={i}>
        <img src="starFill.png" alt="star" />
      </li>
    );
  }
  return <ul className="flex">{elements}</ul>;
};

export default Rate;
