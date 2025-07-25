"use client";

export const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-20 animate-float ${
            i % 3 === 0
              ? "bg-pink-300"
              : i % 3 === 1
                ? "bg-rose-200"
                : "bg-purple-200"
          } ${
            i % 4 === 0
              ? "w-3 h-3"
              : i % 4 === 1
                ? "w-2 h-2"
                : i % 4 === 2
                  ? "w-4 h-4"
                  : "w-1 h-1"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};