import React from "react";
const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="shimmer">
      {Array(20)
        .fill("")
        .map((d,index) => (
          <div className="shimmer_card" key={index}>
            <div className="shimmer_img_div"></div>
            <div className="shimmer_title_div"></div>
            <div className="shimmer_title_div"></div>
            <div className="shimmer_title_div"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
