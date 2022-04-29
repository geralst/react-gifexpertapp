import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

//Se crea el componente grid de gif o imagenes.
export const GifGrid = ({ category }) => {
 //HOOK que permite cambiar el estado de las imagenes gifs.
    //const [images, setImages] = useState([]);
const {data, loading} = useFetchGifs(category);
    //useEffect hace que el codigo se ejecute cuando el componente es renderizado por primera vez
     //HOOK que me permite renderizar solo la primera vez un cierto componente o funcion.
    //useEffect(() =>{
    //    getGifs(category)
    //    .then(imgs => setImages(imgs));
    //},[category])




  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading && <p className='animate__animated animate__flash'>Loading</p>}
        <div className='card-grid'>

                {//cuando no hay llaves es un return implicito
                    data.map( img  => (
                        <GifGridItem
                        key={img.id}
                        {...img}
                        />
                    ))
                }
        </div>
    </>
  )
}
