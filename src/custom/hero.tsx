"use client";

// Example: app/page.tsx or pages/index.tsx
export default function Hero() {
  return (
    <div
      className="h-[150vh] w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg-2.jpg')" }}
    >
      {/* Optional content over background */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold backdrop-blur-md p-2 rounded-bl-xl rounded-tr-xl border-4 ">Onchain Chaos</h1>
      </div>
    </div>
  );
}

