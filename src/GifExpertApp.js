/**------------------------------------------------------------------------------------------------
 *                                         rafc
 *                                         rafce
 *------------------------------------------------------------------------------------------------**/
import React, { useState } from 'react'
import { AddCategory } from './Componets/AddCategory'
import { GifRead } from './Componets/GifGrid'


export const GifExpertApp = () => {


    const [categories, setCategories] = useState([''])

    return (
        <>
            <h1 className = 'animate__animated animate__fadeInDown '>
                <span role="img" aria-label="Panda">👾</span>Gif Search<span role="img" aria-label="Panda">👾</span>
            </h1>
            <AddCategory setCategories = { setCategories }/>
            <ol>
                {
                    categories.map(category => (
                        <GifRead 
                        key = { category }
                        category = { category }
                        />
                    ))
                }
            </ol>
            
        </>
    )
}


