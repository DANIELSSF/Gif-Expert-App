import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs.js';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setimages] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(img => console.log(img));
  }, [category]);

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
