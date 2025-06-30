"use client";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>{/* Add your hero content here */}</div>
    </div>
  );
}
