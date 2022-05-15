import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setimages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);


  const getGifs = async () => {

    const url = 'https://api.giphy.com/v1/gifs/search?limit=7&api_key=lLqVsEogBt7Jjugu4F7BdT4rC3KFBhoY&q=My Dress-Up Darling';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        tittle: img.tittle,
        url: img.images?.downsized_medium.url,
      }
    });

    console.log(gifs);
    setimages(gifs);

  }




  return (
    <div>

      <h3>{category}</h3>
      {
        images.map(img => (
          <GifGridItem
            key={img.id}
            {...img} />
        ))
      }

    </div>
  )
}
