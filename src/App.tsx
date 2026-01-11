import React from 'react';
import './styles-root/styles.scss';

function App() {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  return (
    <>
    <div className='playerindiccont'>
      <div  className='indicator'>Player {currentPlayer}'s turn</div>
    </div>
    <button onClick={()=>setCurrentPlayer(3-currentPlayer)}> Change Player</button>
    
    <div className='play-area'>
     {currentPlayer == 1? 
     (
      <>
      <div className='player-1'>
        <label>Enter Word </label>
        <input></input>
        <button onClick={()=>{}}>Submit</button>
      </div>
     </>):
     (<>
     <div className='player-2'>
      <div className='guess-count-display'></div>
      <label>Enter 1 Letter </label>
      <input></input>
      <button>Submit</button>
      </div></>)}
    </div>
    </>
  )
}

export default App
