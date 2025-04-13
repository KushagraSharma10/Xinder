import React from "react";
import "../stylesheets/Explore.css";

const Explore = () => {
  const para_check = [
    { icon: "src/assets/check.png", para: "Interdum volutpat turpis malesuada ac turpis." },
    { icon: "src/assets/check.png", para: "Tortor ipsum pretium quis nunc.." },
    { icon: "src/assets/check.png", para: "Vitae odio a id purus in." },
  ];

  return (
    <div className="explore">
      <div className="exp-img">
        <img src="src/assets/Col.png" alt="exp-image" />
      </div>
      <div className="txt-content">
        <p id="heading">Best solution for your demanding collection</p>
        <p id="desc">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
        <div className="paras">
            {para_check.map((para, index) => {
                return <div key={index} className="Para">
                    <img src={para.icon} alt="" />
                    <p>{para.para}</p>
                </div>
            })}
        </div>
        <button id="expXinder">Explore Xinder</button>
      </div>
    </div>
  );
};

export default Explore;
