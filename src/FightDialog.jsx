import React from 'react';

const FightDialog = (props) => {
    const { mainCharMoves, enemyCharMoves } = props;

    return (
        <div className="Fight-dialog">
            <p>{mainCharMoves}</p>
            <p>{enemyCharMoves}</p>
        </div>
    );
};

export default FightDialog;