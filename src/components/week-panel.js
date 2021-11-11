import React from 'react';
import { useParams,useNavigate} from "react-router-dom";
import { useEffect, } from 'react';
import DaysItem from './days-item';
import { v4 as uuidv4 } from 'uuid';
const WeekPanel = ({weatherDays,getWeatherDays}) => {
    const { slug } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        getWeatherDays(slug)
    }, []);
        
    function handleClick() {   
        navigate(`/`); 
 
      }
    return (
        <div className=" main week">
            <button onClick={handleClick}>Назад</button>
            <ul>
            {weatherDays.map((e, i) => (
                    <DaysItem key={uuidv4()} date={e.date} temp={e.day.avgtemp_c} />
                ))}
            </ul>
        </div>
    );
};

export default WeekPanel;
