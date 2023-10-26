const API_KEY = "161eb511bc48813f3efe48ac827d40fa";
const BASE_URL = "https://api.openweathermap.org/data/3.0"

// /onecall/day_summary?lat=60.45&lon=-38.67&date=2023-03-30&tz=+03:00&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
}