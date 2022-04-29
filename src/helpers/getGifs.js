//Creamos una constante asincrona para obtener la url de las imagenes
    export const getGifs = async(category) => {
        //encodeuri reemplaza los espacio por $
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=dMmoYuDjFTCScAp1mPI8BXPw0OF8RQob`;
        const resp = await fetch(url);
        const {data} = await resp.json();

//Se realiza un map de los datos obtenidos de la respuesta de la API de Gifs
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

//Se actualiza el state de las imagenes.
    return gifs;
    }