import { useState, useEffect } from "react";

const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i === text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;
