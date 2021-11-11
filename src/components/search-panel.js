import React, {useRef} from 'react';


const SearchPanel = (props) => {
    let searchIn = useRef(null)

    const search = (e) => {
        if(searchIn.current.value.length > 0) {
         props.setActiveCity(searchIn.current.value);   
        }
    };
    return (
        <>
            <div className="search-panel">
                <input
                    ref={searchIn}
                    className={props.isValidate ? 'search-input' : ' search-input error'}
                    type="text"
                    placeholder="Country"
                />
                <button onClick={() => search()} className="search-btn">
                    Search
                </button>
            </div>
            <p className={props.isValidate ? 'hide' : 'show'}> Write correct City </p>
        </>
    );
};

export default SearchPanel;
