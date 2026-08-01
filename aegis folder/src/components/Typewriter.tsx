"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  words: string[];
};

export function Typewriter({ words }: TypewriterProps) {
  const safeWords = useMemo(() => (words.length ? words : ["Developer"]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[wordIndex];
    const doneTyping = letterCount === current.length;
    const doneDeleting = letterCount === 0;
    const delay = deleting ? 38 : doneTyping ? 1200 : 70;

    const timeout = window.setTimeout(() => {
      if (!deleting && doneTyping) {
        setDeleting(true);
        return;
      }
      if (deleting && doneDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % safeWords.length);
        return;
      }
      setLetterCount((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, letterCount, safeWords, wordIndex]);

  return (
    <span>
      {safeWords[wordIndex].slice(0, letterCount)}
      <span className="ml-1 animate-pulse text-white">|</span>
    </span>
  );
}
