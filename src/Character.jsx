import React from 'react';

const Character = (props) => {
    const { name, hp, miss, who, charImg, damage } = props;

    return (
        <div>
            <h5 className="who">{who}</h5>
            <div className="Char-box box d-flex">
                <div className="Char-detail d-flex">
                    <img src={require("./img/"+charImg)} alt="char-img" className="Char-img" />
                    <div>
                    <p>Name: <strong>{name}</strong></p>
                    <p>Miss chance: {miss}%</p>
                    <p>Damage: {damage}</p>
                    </div>
                </div>
                
                <p>HP: <strong>{hp}</strong> <progress value={hp} max="100"></progress></p>
                
            </div>
        </div>  
    );
}

export default Character;