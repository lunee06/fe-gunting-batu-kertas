// GameScreen.js
import React from 'react';
import RoundButton from './RoundButton'; // Pastikan path sesuai dengan struktur proyek Anda

function GameScreen({ players, result, handleChoice, handleRestart }) {
    

  return (
    <div id="game-screen" className="flex flex-col items-center h-screen" style={{ backgroundImage: 'url(/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex justify-center items-center ">
        <RoundButton
          onClick={() => handleChoice('scissors')}
          color="blue"
          imageUrl="/gtg.jpg"
          altText="Image 1"
          className="m-4"
        />
        <RoundButton
          onClick={() => handleChoice('rock')}
          color="green"
          imageUrl="/btu.jpg"
          altText="Image 2"
          className="m-4"
        />
        <RoundButton
          onClick={() => handleChoice('paper')}
          color="red"
          imageUrl="/krt.jpg"
          altText="Image 3"
          className="m-4"
        />
      </div>
      {result ? (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 shadow-lg">
    <div className="bg-blue-800 rounded-lg p-8 max-w-md w-full shadow-2xl">
      <div className="text-4xl font-comic-neue text-center text-white mb-4">
        {players.join(' vs ')}
      </div>
      <div className="text-4xl font-comic-neue text-center text-white">
        {result}
      </div>
    </div>
  </div>
) : null}


    </div>
  );
}

export default GameScreen;
