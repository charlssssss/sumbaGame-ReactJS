import React, { useEffect, useState } from 'react';
import Character from './Character';
import MoveSets from './MoveSets';
import FightDialog from './FightDialog';

const FightScene = (props) => {
    const { characters, setWinner, setLoser, pickedMain, pickedEnemy } = props;

    const [isTurnAtk, setIsTurnAtk] = useState(true);
    const [isTurnAtkBtn, setIsTurnAtkBtn] = useState(true);

    // Main Character Stats
    const [mainCharHp, setMainCharHp] = useState(characters[pickedMain].hp);
    const [mainMovePicked, setmainMovePicked] = useState(-1);
    const mainCharMoveSet = characters[pickedMain].moveSets;
    const mainCharName = characters[pickedMain].name;
    const mainCharImg = characters[pickedMain].charImg;
    const mainMissChance = characters[pickedMain].missChance;

    // Enemy Character Stats
    const [enemyCharHp, setEnemyCharHp] = useState(characters[pickedEnemy].hp);
    const enemyCharMoveSet = characters[pickedEnemy].moveSets;
    const enemyCharName = characters[pickedEnemy].name;
    const enemyCharImg = characters[pickedEnemy].charImg;
    const enemyMissChance = characters[pickedEnemy].missChance;

    // Main character dialog
    const [mainCharMoves, setMainCharMoves] = useState(mainCharName + "! What's your next move?");

    // Enemy character dialog
    const [enemyCharMoves, setEnemyCharMoves] = useState(enemyCharName + " is thinking....");

    // Main Character Attacks
    const hanndleAttacks = () => {
        setIsTurnAtk(!isTurnAtk);

        // Miss chance randomizer
        const random = Math.floor(Math.random() * 100) + 1;

        // Move picker randomizer
        const enemyCharMovePicker = Math.floor(Math.random() * 2);
        
        const { moveName:mMoveName, moveDamage:mMoveDamage, moveType:mMoveType } = mainCharMoveSet[mainMovePicked];
        const { moveName:eMoveName, moveDamage:eMoveDamage, moveType:eMoveType } = enemyCharMoveSet[enemyCharMovePicker];

        // Setting main character's success hit chance
        if(random >= 1 && random <= mainMissChance) {
            setMainCharMoves(mainCharName + " used " + mMoveName + " " + mMoveType + " move but missed.");
        }
        else {
            setEnemyCharHp(enemyCharHp - mMoveDamage);
            setMainCharMoves(mainCharName + " used " + mMoveName + " " + mMoveType + " move and deals " + mMoveDamage + " damage!");
        };
        
        // Setting enemy character's success hit chance
        setTimeout(() => {
            if(random >= 1 && random <= enemyMissChance) {
                setEnemyCharMoves(enemyCharName + " used " + eMoveName + " " + eMoveType + " move but missed.");
            }
            else {
                setMainCharHp(mainCharHp - eMoveDamage);
                setEnemyCharMoves(enemyCharName + " used " + eMoveName + " " + eMoveType + " move and deals " + eMoveDamage + " damage!");
    
            };
        }, 2000);

        setTimeout(() => {
            setMainCharMoves(mainCharName + "! What's your next move?");
            setEnemyCharMoves(enemyCharName + " is thinking....");
            setIsTurnAtkBtn(!isTurnAtkBtn);
        }, 4000);

    };

    // Set winner after game
    useEffect(() => {
        if(enemyCharHp <= 0) {
            setWinner(characters[pickedMain]);
            setLoser(characters[pickedEnemy]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enemyCharHp]);

    useEffect(() => {
        if(mainCharHp <= 0) {
            setWinner(characters[pickedEnemy]);
            setLoser(characters[pickedMain]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainCharHp]);    

    return (
        <div className="Fight-box">
            <h2>Fight Scene</h2>

            <Character
                    name={enemyCharName} 
                    hp={enemyCharHp} 
                    miss={enemyMissChance} 
                    charImg={enemyCharImg} 
                    damage={characters[pickedEnemy].damage} 
                    who="Enemy"/>
            <Character
                    name={mainCharName} 
                    hp={mainCharHp} 
                    miss={mainMissChance} 
                    charImg={mainCharImg} 
                    damage={characters[pickedMain].damage} 
                    who="You" />
            <div className='d-flex'>
                <button 
                    onClick={hanndleAttacks} 
                    className="Attack-btn" 
                    disabled={!isTurnAtk && mainMovePicked !== -1 ? false: true} >Attack Enemy
                </button>
                <button 
                    onClick={()=> {
                        setIsTurnAtk(!isTurnAtk); 
                        setIsTurnAtkBtn(!isTurnAtkBtn);
                    }} 
                    disabled={!isTurnAtkBtn ? true: false}>Fight
                </button>        
            </div>
            
            {isTurnAtk && <FightDialog mainCharMoves={mainCharMoves} enemyCharMoves={enemyCharMoves} />}
            {!isTurnAtk && <MoveSets mainMovePicked={mainMovePicked} setmainMovePicked={setmainMovePicked} mainCharMoveSet={mainCharMoveSet} />}
            
        </div>
    );
}

export default FightScene;