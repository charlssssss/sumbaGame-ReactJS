import React from 'react';

const Result = (props) => {
    const { winner, loser } = props;
    const { name:wName, charImg:wCharImg } = winner;
    const { name:lName, charImg:lCharImg } = loser;
    return (
        <div className="Result-box">
            <img src={require("./img/"+wCharImg)} alt="char-img" className="Char-img" />
            <h3>{`${wName} is the Winner!`}</h3>

            <img src={require("./img/"+lCharImg)} alt="char-img" className="Char-img" />
            <h4>{`${lName} lost the fight.`}</h4>
        </div>
    );
}

export default Result;