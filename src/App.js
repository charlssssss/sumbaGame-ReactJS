import './App.css';
import FightScene from './FightScene';
import ChooseChar from './ChooseChar';
import Result from './Result';
import { useState } from 'react';

function App() {
  const characters = [
    {
      name: "Bob",
      charImg: "bob.PNG",
      hp: 100,
      damage: "High",
      missChance: 75,
      moveSets: [
        {
          moveName: "Stomach Punch",
          moveType: "basic",
          moveDamage: 15
        },
        {
          moveName: "Stealth Grab",
          moveType: "basic",
          moveDamage: 20
        },
        {
          moveName: "Possess Attack",
          moveType: "semi-SPECIAL",
          moveDamage: 35
        },
        {
          moveName: "Fire Walk",
          moveType: "SPECIAL",
          moveDamage: 55
        },
      ]
    },
    {
      name: "Agent Cooper",
      charImg: "cooper.PNG",
      hp: 100,
      damage: "High",
      missChance: 50,
      moveSets: [
        {
          moveName: "Rock Shot",
          moveType: "basic",
          moveDamage: 20
        },
        {
          moveName: "Call Diane",
          moveType: "basic",
          moveDamage: 15
        },
        {
          moveName: "Coffee Spit",
          moveType: "semi-SPECIAL",
          moveDamage: 25
        },
        {
          moveName: "Summon The Giant",
          moveType: "SPECIAL",
          moveDamage: 50
        },
      ]
    },
    {
        name: "Leland",
        charImg: "leland.PNG",
        hp: 100,
        damage: "Medium",
        missChance: 20,
        moveSets: [
          {
            moveName: "Golf Staff Smash",
            moveType: "basic",
            moveDamage: 13
          },
          {
            moveName: "Scary Cry",
            moveType: "basic",
            moveDamage: 18
          },
          {
            moveName: "Pillow-Faced",
            moveType: "semi-SPECIAL",
            moveDamage: 25
          },
          {
            moveName: "Lunatic Laugh",
            moveType: "SPECIAL",
            moveDamage: 41
          },
        ]
    },
    {
      name: "Dr.Jacoby",
      charImg: "jacoby.PNG",
      hp: 100,
      damage: "Low",
      missChance: 30,
      moveSets: [
        {
          moveName: "Sunglasses Stare",
          moveType: "basic",
          moveDamage: 14
        },
        {
          moveName: "Coconut Throw",
          moveType: "basic",
          moveDamage: 17
        },
        {
          moveName: "Bow Tie Choke",
          moveType: "semi-SPECIAL",
          moveDamage: 23
        },
        {
          moveName: "Syringe Bomb",
          moveType: "SPECIAL",
          moveDamage: 39
        },
      ]
    }
  ];

  const [play, setPlay] = useState(false);
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [enemyPicker, setEnemyPicker] = useState(0);
  const [mainPicker, setMainPicker] = useState(0);

  // On-Off play button && set winner back to null to reset game
  const handlePlay = () => {
    setEnemyPicker(Math.floor(Math.random() * 3));
    setPlay(!play);
    if(play) {
      setWinner(null);
    }
  };

  return (
    <div className="App">
      <div className='App-header'>
        <p className="App-title"><strong>sumbaGame</strong> (Simple Fighting Game)</p>
        
        {!play && <ChooseChar characters={characters} setMainPicker={setMainPicker} pickedMain={mainPicker}/>}

        <button onClick={handlePlay}>{ play ? "Quit" : "Play" }</button>

        {winner && <Result winner={winner} loser={loser} />}
      </div>
      {!winner && play && <FightScene 
        characters={characters} 
        setWinner={setWinner} 
        setLoser={setLoser} 
        pickedEnemy={enemyPicker} 
        pickedMain={mainPicker} />}
    </div>
  );
}

export default App;