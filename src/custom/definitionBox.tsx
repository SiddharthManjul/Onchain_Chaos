// components/ArchitectureBox.tsx
"use client";

export default function DefinitionBox() {
  return (
    <div className="px-2 pb-2">
        <div className="bg-[#02383C] h-[50vh] w-full rounded-md p-6 flex flex-col lg:flex-row">
      {/* Text content - left side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-6">
        <h1 className="text-3xl lg:text-4xl font-bold uppercase text-[#00FFAA] mb-4">
          Protocol Architecture
        </h1>
        <p className="text-white text-sm lg:text-base mb-4 opacity-90">
          The Onchain Chaos protocol is built on a decentralized network of
          nodes that communicate through encrypted channels. Our architecture
          ensures maximum uptime while maintaining complete anonymity for
          operators.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-[#00FFAA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-white text-sm lg:text-base opacity-90">
              Zero-knowledge proofs for all transactions
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-[#00FFAA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-white text-sm lg:text-base opacity-90">
              Byzantine fault tolerant consensus
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-[#00FFAA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-white text-sm lg:text-base opacity-90">
              Modular design for protocol upgrades
            </span>
          </li>
        </ul>
      </div>

      {/* Diagram - right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
        <div className="relative w-full h-full">
          {/* This is a placeholder for your architectural diagram */}
          {/* Replace this with your actual diagram component or SVG */}
          <div className="border-2 border-[#00FFAA] rounded-md w-full h-full flex items-center justify-center p-4">
            <div className="text-center">
              <p className="text-[#00FFAA] text-sm mb-2">
                [Architecture Diagram]
              </p>
              <p className="text-white text-xs opacity-70">
                Your network diagram or architectural visualization would appear
                here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
