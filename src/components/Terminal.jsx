import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const TerminalWrapper = styled.div`
  background-color: #1a1a1a;
  color: #00ff00;
  padding: 20px;
  font-family: "Courier New", Courier, monospace;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  white-space: pre-wrap;
`;

const TerminalText = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const BlinkingCursor = styled.span`
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: blink 1s step-end infinite;
`;

const Terminal = ({ text, audioSrc, timeline }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isPlaying) {
      const audio = audioRef.current;
      audio.play();

      let timeoutIds = [];

      timeline.forEach((time, index) => {
        const id = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
        }, time);
        timeoutIds.push(id);
      });

      return () => {
        timeoutIds.forEach(clearTimeout);
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [isPlaying, text, timeline]);

  return (
    <TerminalWrapper>
      <audio ref={audioRef} src={audioSrc} />
      <TerminalText>
        {displayedText}
        <BlinkingCursor>_</BlinkingCursor>
      </TerminalText>
      {!isPlaying && (
        <button onClick={() => setIsPlaying(true)} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#00ff00", border: "none", borderRadius: "5px", color: "#1a1a1a", fontFamily: "Courier New", cursor: "pointer" }}>
          Play
        </button>
      )}
    </TerminalWrapper>
  );
};

export default Terminal;
