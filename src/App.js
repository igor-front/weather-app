import {useState, useCallback, useEffect } from 'react';
import WeekPanel from './components/week-panel';
import DaysPanel from './components/days-panel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

    const [weatherDays, setWeatherDays] = useState([]);
    const [activeCity, setActiveCity] = useState('Minsk');
    const [isValidate, setValidate] = useState(true);
    const [weather, setWeather] = useState('');
    useEffect(() => {
            getWeather(activeCity)
            getWeatherDaysCallback(activeCity)
        
        
    }, []);
    useEffect(() => {
        
            getWeatherCallback(activeCity)
            getWeatherDaysCallback(activeCity)
 
    }, [activeCity]);


    const dateBuilder = (d) => {
        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    };



    const getWeather = (city) => {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=6e3d05edee91435f8f685303211111&q=${city}&aqi=no`
        )
            .then((response) => {
                return response.json();
                
            })
            .then((data) => {
               
                if (data.location.name) {
                    setWeather(Math.round(data.current.temp_c));
                    setActiveCity(data.location.name);
                    setValidate(true);
                } 
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const getWeatherCallback = useCallback(() => {
            getWeather(activeCity)
    }, [activeCity])

   
    const getWeatherDays = (city) => {
        fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=6e3d05edee91435f8f685303211111&q=${city}&days=3&aqi=no&alerts=no`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forecast.forecastday && setWeatherDays(data.forecast.forecastday);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const getWeatherDaysCallback = useCallback(
        () => {
            getWeatherDays(activeCity)
        },
        [activeCity],
      );
     


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DaysPanel isValidate={isValidate} weather={weather} weatherDays={weatherDays}  dateBuilder={dateBuilder} activeCity={activeCity} setActiveCity={setActiveCity} />} />
                <Route path="in/:slug" element={<WeekPanel weatherDays={weatherDays} getWeatherDays={getWeatherDaysCallback} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
