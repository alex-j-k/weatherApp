const key = 'tFlfX5ZFpnWErhD84pVb2Vhrb4J66IW4';

// get current weather info

const getWeatherInfo = async (id) => {
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/`)

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

        return data[0];
}



// get city info

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

};




















// getCity('dublin')
//     .then(data => {
//         return getWeatherInfo(data.Key)
//     })
//     .then(data => {
//         console.log(data)
//     } )
//     .catch(err => console.log(err));

