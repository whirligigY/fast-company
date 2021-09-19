import React from "react";

const Caret = ({ text, arrow }) => {
  return (
    <span>
      {text}
      <i
        className={"bi bi-caret-" + (arrow === "asc" ? "up" : "down") + "-fill"}
      />
    </span>
  );
};

export default Caret;
