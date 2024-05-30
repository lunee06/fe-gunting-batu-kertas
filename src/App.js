import React, { useState, useEffect } from 'react';
import './tailwind.css'; // Import Tailwind CSS
import socket from './socket'; // Import socket.js
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';

function App() {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState('');

  const handleCreateRoom = () => {
    if (username) {
      socket.emit('createRoom', username);
    } else {
      alert('Please enter a username');
    }
  };

  const handleJoinRoom = () => {
    if (username && roomId) {
      socket.emit('joinRoom', { roomId, username });
    } else {
      alert('Please enter a username and room ID');
    }
  };

  const handleChoice = (choice) => {
    socket.emit('playerChoice', { roomId, username, choice });
  };

  const handleRestart = () => {
    socket.emit('restartGame', roomId);
  };

  useEffect(() => {
    socket.on('roomCreated', (id) => {
      setRoomId(id);
      alert(`Room created! Room ID: ${id}`);
      setGameStarted(true);
    });

    socket.on('roomJoined', (id) => {
      setRoomId(id);
      setGameStarted(true);
    });

    socket.on('startGame', (players) => {
      setPlayers(players);
    });

    socket.on('gameResult', (result) => {
      setResult(result);
    });

    socket.on('error', (message) => {
      alert(message);
    });

    socket.on('gameRestarted', () => {
      setResult('');
    });

    return () => {
      socket.off('roomCreated');
      socket.off('roomJoined');
      socket.off('startGame');
      socket.off('gameResult');
      socket.off('error');
      socket.off('gameRestarted');
    };
  }, []);

  return (
    <>
      {!gameStarted ? (
        <StartScreen
          username={username}
          roomId={roomId}
          setUsername={setUsername}
          setRoomId={setRoomId}
          handleCreateRoom={handleCreateRoom}
          handleJoinRoom={handleJoinRoom}
          containerClass="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" // Custom class for StartScreen container
        />
      ) : (
        <GameScreen
          players={players}
          result={result}
          handleChoice={handleChoice}
          handleRestart={handleRestart}
          containerClass="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" // Custom class for GameScreen container
        />
      )}
    </>
  );
}

export default App;
