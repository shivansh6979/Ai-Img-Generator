import React, { useRef, useState } from "react";
import "./imageGen.css";
import default_image from "../assets/default_image.svg";

const ImageGen = () => {
  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef();

  const ImageGn = async () => {
    if (inputRef.current.value == "/") {
      return 0;
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "User-Agent": "Chrome",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );

    const data = await response.json();
    console.log("ressssss", data);
  };

  return (
    <div className="ai-image-generator">
      <h1>
        AI Image <span>Generator</span>
        <div className="image-wrapper">
          <img src={default_image} />
        </div>
        <div className="search-box">
          <input
            ref={inputRef}
            placeholder="Describe what you want to see"
            type="text"
          />
          <div className="gen-btn">
            <button onClick={ImageGn}>Generate</button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default ImageGen;
