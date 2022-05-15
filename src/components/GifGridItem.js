import React from 'react'

export const GifGridItem = ({ id, tittle, url }) => {

    return (
        <div className='card'>
            <img src={url} alt={tittle}></img>
            <p>{tittle}</p>
        </div>
    )
}
