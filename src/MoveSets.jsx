import React from 'react';

const MoveSets = (props) => {
    const { mainMovePicked, setmainMovePicked, mainCharMoveSet } = props;

    return (
        <div className="Moveset-box">
            <h4>Move Sets</h4>

            <div className="Moves-box">
                {mainCharMoveSet.map((move, index) => {    
                    const {moveName, moveDamage, moveType} = move;          
                    return(
                        <div key={index} className="Moves">
                            <input 
                                type="radio" 
                                name='moves' 
                                onChange={()=> setmainMovePicked(index)} 
                                checked={mainMovePicked === index ? true : false} 
                            />             
                            <h5>{`${moveName}`}</h5> 
                            <p>{`${moveDamage} dmg | ${moveType} move`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MoveSets;