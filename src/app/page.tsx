"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@nextui-org/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ITypeWriter {
  text: string;
  speed: number;
  delay: number;
}

const TypeWriter = ({ text, speed, delay }: ITypeWriter) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarted]);

  return <span>{displayText}</span>;
};

const WelcomeScreen = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#e0f4f0] to-[#2d8374]">
      <div className="relative flex-1 w-full flex items-center justify-center">
        <div className="relative">
          <div className="absolute bottom-0 w-96 h-96 bg-white/20 rounded-full blur-xl transform -translate-x-1/2 left-1/2 animate-pulse"></div>
          
          <Image
            src="/images/oak.png"
            alt="Professor Oak"
            className="relative z-10 pixel-rendering transform -translate-x-1/2 left-1/2 hover:scale-110 transition-transform duration-300 animate-bounce-slow"
            height={250}
            width={250}
          />
        </div>
      </div>

      <div 
        className="w-full max-w-4xl px-4 mb-16 transform transition-all duration-300 hover:scale-105"
        onClick={() => router.push('pokemon/1')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className={`p-6 bg-white/95 border-2 border-gray-200 shadow-xl transition-all duration-300 ${
          isHovered ? 'shadow-2xl border-blue-400' : ''
        } animate-fade-in`}>
          <div className="flex items-start space-x-3">
            <p className="font-mono md:text-2xl text-gray-800 leading-relaxed">
              <TypeWriter
                text={`AYO, WELCOME TO THE WORLD OF POKÉMON, MY GUY 💀🔥💪! You're about to be built like a Level 1 Rattata but think you're Sigma-tier Arceus 💯🚶‍♂️🗿. Grab that Pokéball and start throwing hands—GOTTA CATCH 'EM ALL OR GET CAUGHT LACKIN' 🚨🎤📸. Skibidi toilet vibes, LET'S GOOOOO!`}
                speed={70}
                delay={1000}
              />
            </p>
          </div>
        </Card>
      </div>

      <style jsx global>{`
        .pixel-rendering {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;