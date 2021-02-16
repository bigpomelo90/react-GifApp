import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifRead = ({ category }) => {


    const { data:images } = useFetchGifs( category );
    

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

        <div className = 'card-grid animate__animated animate__fadeInLeftBig animate__fadeInLeftBig-1s'>
                {
                    images.map( img => (
                        <GifGridItem 
                        key = { img.id }
                        {...img }
                        />
                    ))
                }
        </div>
        </>
    )
}
