import React, { useState } from 'react';


function StartScreen({ username, setUsername, setRoomId, handleCreateRoom, handleJoinRoom }) {
  const [showRoomIdInput, setShowRoomIdInput] = useState(false); // State untuk menampilkan/menyembunyikan input Room ID

  const handleJoinButtonClick = () => {
    setShowRoomIdInput(true); // Saat tombol "Join Room" ditekan, tampilkan input Room ID
    handleJoinRoom(); // Panggil fungsi handleJoinRoom
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div id="start-screen" className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-4xl font-comic-neue text-center mb-6">Suit Jreng</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700"></label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {showRoomIdInput && (
          <div className="mt-4 mb-4">
            <input
              type="text"
              id="room-id"
              placeholder="Enter Room ID to join"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              onChange={(e) => setRoomId(e.target.value)}
            />
          </div>
        )}
        <div className="mt-4 mb-4 flex flex-col space-y-4">
          <button
            id="create-room"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => { handleCreateRoom(); setShowRoomIdInput(false); }}
          >
            Create Room
          </button>
          <button
            id="join-room"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleJoinButtonClick}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
