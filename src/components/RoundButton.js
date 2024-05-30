import React from 'react';

function RoundButton({ onClick, color, imageUrl, altText, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-700 rounded-full shadow-lg w-24 h-24 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover rounded-full" />
      ) : (
        <span className="text-white">{altText}</span>
      )}
    </button>
  );
}

export default RoundButton;
