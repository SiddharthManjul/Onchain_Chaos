"use client";

// Example: app/page.tsx or pages/index.tsx
export default function Hero() {
  return (
    <div
      className="h-[120vh] w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Centered content over background */}
      <div className="h-[80vh] w-[80vw] flex items-center justify-center rounded-bl-xl rounded-tr-xl border-4 backdrop-blur-xs">
        <div className="text-white text-4xl w-fit font-bold uppercase">
          Onchain Chaos
        </div>
      </div>
    </div>
  );
}
