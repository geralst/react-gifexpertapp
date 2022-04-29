import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    

    const [categories, setCategories] = useState (['One Punch'])
    
    // const handleAdd = () => {
    //     //primera solucion
    //     setCategories([...categories, 'HunterXHunter']);//genera un nuevo estado borrando el antiguo estado (Lista) anterior
    //     //segunda solucion
    //     //setCategories(categ => [...categ, 'HunterXHunter']);//guarda la categoria anterior en categ, y se agrega lo que lo continua en la antigua lista
    // }

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories ={setCategories}/>
        <hr />

        <ol>
            {
                //recorre el listado de categories en el html para generar un id category con su respectiva categoria
                categories.map(category => (
                    <GifGrid
                    key={category}
                    category= {category}
                    />
                ))
            }
        </ol>
        </>
    )
}

export default GifExpertApp