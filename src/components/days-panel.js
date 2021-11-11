import React from 'react';
import SearchPanel from './search-panel';
import ButtonsPanel from './buttons-panel';
import DaysContainer from './days-container';


const DaysPanel = ({activeCity, setActiveCity, weatherDays, dateBuilder,isValidate,weather}) => {
    

    return (
        <div className="app">
            <SearchPanel 
                isValidate={isValidate} 
                setActiveCity={setActiveCity} />
            <ButtonsPanel
                setActiveCity={setActiveCity}
                activeCity={activeCity} />
            <DaysContainer
                temp={weather}
                activeCity={activeCity}
                dateBuilder={dateBuilder}
                weatherDays={weatherDays}
            />
        </div>
    );
};

export default DaysPanel;
