import React from "react";

const ColorPicker = ({ images, setImageSet }) => {
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
            setImageSet(image.id);
            document.querySelectorAll("#color").forEach((color) => {
              color.classList.remove("border-solid");
            });
            e.target.classList.add("border-solid");
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
