export default function Home() {
  return (
    <div>
      <div className="h-screen w-full px-2 py-2 flex">
        {/* Left side - Two stacked consortium divs */}
        <div className="w-[24.5%] flex flex-col space-y-2">
          {/* Top Consortium div */}
          <div className="bg-[#1A2C3D] h-[44.5%] flex flex-col p-6 text-white rounded-md">
            {/* Header section */}
            <div className="mb-6">
              <h1 className="text-3xl uppercase font-bold tracking-wider pb-3 text-[#00FFAA]">
                Consortiums
              </h1>
              <p className="text-sm tracking-widest">
                Builders grind. Degens rebel. Clans unite. Pick your side. Own
                the chaos.
              </p>
            </div>

            {/* Consortium list */}
            <ul className="space-y-4 w-full overflow-y-auto">
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Dead Wallet Society
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                DeSync Order
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Payload Assembly
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Satoshi&apos;s Syndicate
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Stealth Alliance
              </li>
            </ul>
          </div>

          {/* New Bottom Consortium div */}
          <div className="bg-[#1A2C3D] h-[55%] flex flex-col p-6 text-white rounded-md">
            {/* Header section */}
            <div className="mb-6">
              <h1 className="text-3xl uppercase font-bold tracking-wider pb-3 text-[#00FFAA]">
                Conduits
              </h1>
              <p className="text-sm tracking-widest">
                Protocol roles orchestrating chaos into onchain innovation and
                growth.
              </p>
            </div>

            {/* Conduits list */}
            <ul className="space-y-2.5 w-full overflow-y-auto">
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Marshal
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Sovereign
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Ghoul
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Catalyst
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Monarch
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Alchemist
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                SyncBreaker
              </li>
              <li className="text-lg font-medium hover:text-[#00FFAA] transition-colors cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-[#00FFAA] rounded-full mr-3"></span>
                Wanderer
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - Main content and three boxes */}
        <div className="w-[75%] ml-2 flex flex-col space-y-2">
          {/* Onchain Chaos box */}
          <div className="bg-[#3A0519] h-[82%] flex flex-col items-center justify-center text-white rounded-md">
            <h1 className="text-8xl font-extrabold uppercase">Onchain Chaos</h1>
            <p className="text-3xl font-bold uppercase font-stretch-extra-expanded antialiased">
              Born from Alpha, raised in Chaos
            </p>
          </div>

          {/* Three boxes below */}
          <div className="h-[18%] flex space-x-2">
            {/* Box 1 */}
            <div className="bg-[#02383C] flex-1 flex flex-col items-center justify-center text-white rounded-md p-4">
              <h2 className="text-2xl font-bold uppercase text-[#FFD700] mb-2">
                Clans
              </h2>
              <p className="text-sm text-center opacity-80">
                From stealth lords to syndicate coders — choose wisely.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#02383C] flex-1 flex flex-col items-center justify-center text-white rounded-md p-4">
              <h2 className="text-2xl font-bold uppercase text-[#FFD700] mb-2">
                Build
              </h2>
              <p className="text-sm text-center opacity-80">
                MVPs today. Startups tomorrow. Kages forever.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#02383C] flex-1 flex flex-col items-center justify-center text-white rounded-md p-4">
              <h2 className="text-2xl font-bold uppercase text-[#FFD700] mb-2">
                Alpha
              </h2>
              <p className="text-sm text-center opacity-80">
                Insider drops. Zero noise. 100% builder signal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
