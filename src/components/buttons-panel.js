const ButtonsPanel = (props) => {
   
    const changeCity = (e) => {
        if(e.target.value.length > 0) {
           props.setActiveCity(e.target.value); 
        }
    };

    return (
        <div className="buttons">
            <button value="Minsk" onClick={(e) => changeCity(e)}>
                Minsk
            </button>
            <button value="Moscow" onClick={(e) => changeCity(e)}>
                Moscow
            </button>
            <button value="Bratislava" onClick={(e) => changeCity(e)}>
                Bratislava
            </button>
        </div>
    );
};

export default ButtonsPanel;
