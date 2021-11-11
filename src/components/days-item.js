// import react from 'react';

const DaysItem = (props) => {
    return (
        <li className="days-item">
            <h3 className="">{props.date} </h3>
            <h3 className="">temperature <span> {Math.round(props.temp)} &#176; </span> </h3>
        </li>
    );
};


export default DaysItem;