"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import { title } from "@/components/primitives";

export default function Home() {
  const t = useTranslations("Home");
  const [displayedText, setDisplayedText] = useState("");
  const fullText = t("welcome");

  useEffect(() => {
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="inline-block">
        <span className={title()}>
          user@portfolio:~$ {displayedText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
    </div>
  );
}
