import React from "react";

const ColorPicker = ({ images, setCurrentImageIndex }) => {
  return (
    <div className="a-i-c gap-2">
      {images.map((image) => (
        <div
          className="w-7 h-7 rounded-lg cursor-pointer border-white transition-all"
          id="color"
          style={{
            backgroundColor: image.code,
          }}
          title={image.color}
          key={image.id}
          onClick={(e) => {
            ChangeImageSet(e, image, setCurrentImageIndex);
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;

const ChangeImageSet = (e, image, setCurrentImageIndex) => {
  setCurrentImageIndex(image.id);
  document.querySelectorAll("#color").forEach((color) => {
    color.classList.remove("border-solid");
  });
  e.target.classList.add("border-solid");
};
