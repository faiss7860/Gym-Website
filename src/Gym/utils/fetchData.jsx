export const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
      };

export const fetchData = async (url , options) =>{
    const response = await fetch(url , options);
    const data = await response.json();
    console.log(data);
    return data;
}