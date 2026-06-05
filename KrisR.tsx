'use client';
import React, { createContext, useContext, useState, useRef } from 'react';

const AudioContext = createContext<any>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (track: any) => {
    if (currentTrack?.id === track.id) {
      isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, playTrack, audioRef, setIsPlaying }}>
      {children}
      <audio 
        ref={audioRef} 
        src={currentTrack?.url} 
        onEnded={() => setIsPlaying(false)}
      />
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
