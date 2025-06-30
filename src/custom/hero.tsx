"use client";

// Example: app/page.tsx or pages/index.tsx
export default function Hero() {
  return (
    <div
      className="h-[150vh] w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg-2.jpg')" }}
    >
      {/* Optional content over background */}
      <div className="flex flex-col top-2 left-2 absolute gap-y-2">
        <h1 className="text-white text-4xl w-fit font-bold backdrop-blur-xs p-2 rounded-bl-xl rounded-tr-xl border-4 uppercase">
          Onchain Chaos
        </h1>
        <p className="text-white text-4xl w-half font-bold backdrop-blur-xs p-2 rounded-bl-xl rounded-tr-xl border-4 uppercase">
          Trained in silence. Shipped in shadows. Now the terminal writes their prophecy.
        </p>
      </div>
    </div>
  );
}
