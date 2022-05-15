
 export const getGifs = async (category) => {
    //My Dress-Up Darling
    const url = `https://api.giphy.com/v1/gifs/search?limit=7&api_key=lLqVsEogBt7Jjugu4F7BdT4rC3KFBhoY&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            tittle: img.tittle,
            url: img.images?.downsized_medium.url,
        }
    })

   return gifs;

}