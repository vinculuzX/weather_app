import axios from 'axios';

export const WeatherServiceAPI = async (city) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aa2f51ad93ef2850da5598d5fdf2f80b`)
    return res
}

export const WeatherServiceForecastAPI = async (city, days) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=${days}&appid=aa2f51ad93ef2850da5598d5fdf2f80b`);
    return res;
}