import React, { useEffect, useState } from "react";
import { GifGridItem } from "./components/GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  },[]);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?limit=10&q=Rick and Morty&api_key=5rcQkqYtNQ6XeT6rNrCfZDXUezspTzdX";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <div>
      <h3> {category} </h3>

      <li>Item</li>

      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
