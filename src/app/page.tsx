export default function Home() {
  return (
    <div className="h-screen w-full px-3 py-3 flex">
      {/* Left div (Consortiums) */}
      <div className="bg-[#02383C] h-[45%] w-[24%] flex flex-col p-6 text-white rounded-md">
        {/* Header section */}
        <div className="mb-6">
          <h1 className="text-3xl uppercase font-bold tracking-wider pb-3">
            Consortiums
          </h1>
          <p className="text-sm uppercase tracking-widest text-[#FFD700]">
            Builders grind. Degens rebel. Clans unite. Pick your side. Own the
            chaos.
          </p>
        </div>

        {/* Consortium list */}
        <ul className="space-y-4 w-full overflow-y-auto">
          <li className="text-lg uppercase font-medium hover:text-[#FFD700] transition-colors cursor-pointer flex items-center">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></span>
            Dead Wallet Society
          </li>
          <li className="text-lg uppercase font-medium hover:text-[#FFD700] transition-colors cursor-pointer flex items-center">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></span>
            Satoshi's Syndicate
          </li>
          <li className="text-lg uppercase font-medium hover:text-[#FFD700] transition-colors cursor-pointer flex items-center">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></span>
            DeSync Order
          </li>
          <li className="text-lg uppercase font-medium hover:text-[#FFD700] transition-colors cursor-pointer flex items-center">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></span>
            Stealth Space
          </li>
          <li className="text-lg uppercase font-medium hover:text-[#FFD700] transition-colors cursor-pointer flex items-center">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></span>
            Deadnet Assembly
          </li>
        </ul>
      </div>

      {/* Right div (Onchain Chaos) */}
      <div className="bg-[#3A0519] h-[80%] w-[75%] flex flex-col items-center justify-center text-white ml-auto rounded-md">
        <h1 className="text-8xl font-extrabold uppercase">Onchain Chaos</h1>
        <p className="text-3xl font-bold uppercase font-stretch-extra-expanded antialiased">
          Born from Alpha, raised in Chaos
        </p>
      </div>
    </div>
  );
}
