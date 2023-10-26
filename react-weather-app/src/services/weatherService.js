const API_KEY = "161eb511bc48813f3efe48ac827d40fa";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// /onecall/day_summary?lat=60.45&lon=-38.67&date=2023-03-30&tz=+03:00&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    
    return fetch(url)
    .then((res) => res.json())
   
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]


    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed};
};

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map()
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat, lon, exclude: "current, minutely,alerts", units: searchParams.units,
    }).then({formatForecastWeather})

    return formattedCurrentWeather;

}
export default getFormattedWeatherData