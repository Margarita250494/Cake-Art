import { TInputImage } from "@/utils/types";
import Image from "next/image";
import React from "react";

const InputImage = ({ handleImageUpload, imageUrl }: TInputImage) => {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        required
        className="border border-gray/30 focus:outline-0 py-2 px-1 h-[45px] flex justify-center items-center"
      />
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="preview"
          className="w-40 h-40 object-cover"
          width={300}
          height={200}
        />
      )}
    </>
  );
};
export default InputImage;
