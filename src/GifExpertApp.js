import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['High School DXD', 'Princess re:conected drive', 'Fate', 'Date a Live'];
    //const [categories, setcategories] = useState(['High School DXD', 'Princess re:conected drive', 'Fate', 'Date a Live']);
    const [categories, setcategories] = useState(['Date a Live']);

    //const handleAdd = () => setcategories(cate => [...cate, 'Dragon ball']);

    return (
        <>
            <h2 className='animate__animated animate__headShake'>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>

        </>
    );

}
