import React from 'react';

const ChooseChar = (props) => {
    const {characters, setMainPicker, pickedMain } = props;

    return (
        <div className="Moveset-box choose">
            <h3>Pick a Twin Peaks Guy</h3>

            <div className="Moves-box">
                {characters.map((char, index) => {    
                    const { name, charImg, missChance, damage} = char;          
                    return(
                        <div key={index} className="Moves">
                            <input 
                                type="radio" 
                                name='mainCar' 
                                onChange={()=> setMainPicker(index)} 
                                checked={pickedMain === index ? true : false} 
                            /> 
                            <img src={require("./img/"+charImg)} alt="char-img" className="Char-img pick" />
                            <h4>{`${name}`}</h4> 
                            <p>{`DMG: ${damage} | Miss Chance: ${missChance}%`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ChooseChar;