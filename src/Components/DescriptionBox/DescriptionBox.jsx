import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          CustomTees is the perfect destination for anyone looking to add a
          personal touch to their wardrobe. You'll find a wide variety of unique
          t-shirt designs, all created by talented individuals from around the
          world. Whether you're into bold graphics, minimalist styles, or quirky
          art, there's something for everyone. Simply choose a design that
          speaks to you, and you'll have a one-of-a-kind t-shirt delivered to
          your door, ready to make a statement wherever you go.
        </p>
        <p>
          We believe in standing out, not blending in. Why settle for ordinary when you can
          wear something that speaks to who you are? Every design is a
          reflection of creativity, and when you choose one, you're making it
          your own.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
