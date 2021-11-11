import DaysItem from './days-item';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate} from "react-router-dom"; 
const DaysContainer = (props) => {
    
    let navigate = useNavigate();  
    
    function handleClick() {   
        
      navigate(`/in/${props.activeCity}`); 
       
        
    } 
    return (
        <>
            <div className="main">
                <h2 className="date">{props.dateBuilder(new Date())}</h2>
                <h2 className="city">{props.activeCity}</h2>
                <button onClick={handleClick}>Узнать погоду</button>
                <h2 className="temp">{props.temp}</h2>
            </div>
            <ul className="days-list">
                {props.weatherDays.map((e, i) => (
                    <DaysItem key={uuidv4()} date={e.date} temp={e.day.avgtemp_c} />
                ))}
            </ul>
        </>
    );
};

export default DaysContainer;
