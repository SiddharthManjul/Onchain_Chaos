"use client";

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen w-full px-2 py-2 flex flex-col lg:flex-row">
      {/* Main content - Moves to top on mobile */}
      <div className="w-full lg:w-[75%] lg:ml-2 order-1 lg:order-2">
        {/* Onchain Chaos box */}
        <div className="bg-[#3A0519] h-[50vh] lg:h-[81%] flex flex-col items-center justify-center text-white rounded-md text-center p-4 mb-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase">Onchain Chaos</h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase max-w-3xl text-center mt-4 lg:mt-6 text-[#00FFAA]">
            Trained in silence. Shipped in shadows. Now the terminal writes their prophecy.
          </p>
        </div>

        {/* Three boxes below - Stack vertically on mobile */}
        <div className="h-auto lg:h-[18%] flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
          {/* Box 1 */}
          <div className="bg-[#02383C] flex-1 flex flex-col items-center justify-center text-white rounded-md p-4">
            <h2 className="text-2xl font-bold uppercase text-[#FFD700] mb-2">知識</h2>
            <p className="text-sm text-center opacity-80">
              The ancient scripts weren&apos;t written in ink — they were forged in bugs, burns, and buried Git histories.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#02383C] flex-1 flex flex-col items-center justify-center text-white rounded-md p-4">
            <h2 className="text-2xl font-bold uppercase text-[#FFD700] mb-2">スキル</h2>
            <p className="text-sm text-center opacity-80">
              Some forge products. Others forge prophecy. Rise not just to launch — but to echo across dev legend.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[#02383C] flex-1 flex flex-col items-center justify-center text-white rounded-md p-4">
            <h2 className="text-2xl font-bold uppercase text-[#FFD700] mb-2">態度</h2>
            <p className="text-sm text-center opacity-80">
              True power isn&apos;t taught. It&apos;s summoned. From late nights, failed pushes, and chaos only the worthy survive.
            </p>
          </div>
        </div>
      </div>

      {/* Side panels - Move below main content on mobile */}
      <div className="w-full lg:w-[24.5%] flex flex-col space-y-2 order-2 lg:order-1 mt-2 lg:mt-0">
        {/* Consortium - Horizontal scroll on mobile */}
        <AutoScrollList 
          title="Consortiums" 
          description="Builders grind. Degens rebel. Clans unite. Pick your side. Own the chaos."
          items={['Dead Wallet Society', 'DeSync Order', 'Payload Assembly', "Satoshi's Syndicate", 'Stealth Alliance']}
          className="lg:h-[44.5%]"
        />

        {/* Conduits - Horizontal scroll on mobile */}
        <AutoScrollList
          title="Conduits"
          description="Protocol roles orchestrating chaos into onchain innovation and growth."
          items={['Marshal', 'Sovereign', 'Ghoul', 'Catalyst', 'Monarch', 'Alchemist', 'SyncBreaker', 'Wanderer']}
          className="lg:h-[55%]"
          itemSpacing="lg:space-y-2.5"
        />
      </div>
    </div>
  );
}

function AutoScrollList({ title, description, items, className = '', itemSpacing = 'lg:space-y-4' }: { title: string, description: string, items: string[], className?: string, itemSpacing?: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 50; // pixels per second

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 1024) return;

    const list = listRef.current;
    if (!list) return;

    let animationId: number;
    let startTime: number;
    let scrollLeft = 0;
    const maxScroll = list.scrollWidth - list.clientWidth;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (!isPaused && maxScroll > 0) {
        scrollLeft = (scrollLeft + (scrollSpeed * elapsed) / 1000) % (maxScroll * 2);
        const scrollPos = scrollLeft > maxScroll ? maxScroll * 2 - scrollLeft : scrollLeft;
        list.scrollLeft = scrollPos;
      }

      startTime = timestamp;
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, scrollSpeed]);

  return (
    <div className={`bg-[#1A2C3D] h-auto flex flex-col p-4 lg:p-6 text-white rounded-md ${className}`}>
      <div className="mb-4 lg:mb-6">
        <h1 className="text-2xl lg:text-3xl uppercase font-bold tracking-wider pb-3 text-[#00FFAA]">
          {title}
        </h1>
        <p className="text-sm tracking-widest">
          {description}
        </p>
      </div>

      <div 
        className="overflow-x-auto lg:overflow-y-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <ul 
          ref={listRef}
          className={`flex lg:flex-col space-x-4 lg:space-x-0 ${itemSpacing} w-max lg:w-full pb-2 lg:pb-0`}
        >
          {items.map((item) => (
            <li 
              key={item} 
              className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center min-w-max"
            >
              <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}