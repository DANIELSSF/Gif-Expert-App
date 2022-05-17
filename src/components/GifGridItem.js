import React from 'react'

export const GifGridItem = ({ id, tittle, url }) => {

    return (
        <div className='card animate__animated animate__bounceIn'>
            
            <img src={url} alt={tittle}></img>
            <p>{tittle}</p>
        </div>
    )
}
