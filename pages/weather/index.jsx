import Layout from '../../components/layout';
import Tabs from '../../components/tabs';
import Weather from '../../components/weather';
import Calendar from '../../components/calendar'
import { cities } from '../../services/mock.service';
import React, { useEffect } from 'react';
import { WeatherServiceAPI, WeatherServiceForecastAPI } from '../../services/wheather.service';
import { initialState, WheatherReducer } from '../../reducers'
import styles from '../../styles/Home.module.css'
const WeatherPage = () => {
    const [city, setCity] = React.useState('new york');
    const [date, setDate] = React.useState(new Date())
    const [state, dispatch] = React.useReducer(WheatherReducer, initialState);

    const onHandleCity = React.useCallback((city) => {
        setCity(city)
    }, [city])

    useEffect(() => {
        WeatherServiceAPI(city)
            .then((res) => {
                dispatch({ type: 'MAIN', payload: res.data.main });
                dispatch({ type: 'WIND', payload: res.data.wind });
                dispatch({ type: 'WEATHER', payload: res.data.weather[0] })
            })
            .catch((err) => console.log(err))
    }, [city])

    const forecastDays = (e) => {
        WeatherServiceForecastAPI(city, '15')
            .then((res) => {
                dispatch({ type: 'MAIN', payload: res.data.main });
                dispatch({ type: 'WIND', payload: res.data.wind });
                dispatch({ type: 'WEATHER', payload: res.data.weather[0] })
            })
            .catch((err) => console.log(err))
    }
    return (
        <Layout>
            <div className={`flex flex-row  ${styles.borderBottomTabs}`}>
                {cities.map((city, index) => (
                    <Tabs key={index} tabname={city} onClick={() => onHandleCity(city)} />
                ))}
            </div>
            <div className="container mx-8 my-16 flex flex-row">
                <Weather weather={state.weather.main} temperature={state.main.temp} wind={state.wind.speed} humidity={state.main.humidity} />
                <Calendar date={date} onChange={(e) => {
                    setDate(e);
                    forecastDays(e);
                }} />
            </div>
        </Layout>
    )
}
export default WeatherPage;