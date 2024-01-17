import React, { useState } from "react";

type Props = {
  maxChar?: number;
  children: string;
};

const ExpandableText = ({ maxChar = 100, children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length < maxChar) return <p>{children}</p>;

  const text = isExpanded ? children : `${children.substring(0, maxChar)}...`;
  return (
    <p>
      {text}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
