"use client";

import React, { useEffect, useState, useRef } from "react";

const Banner: React.FC = () => {
  const [isInView, setIsInView] = useState(true); // Video mặc định hiển thị
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Video sẽ hiển thị cho đến khi toàn bộ phần tử ra khỏi viewport
        setIsInView(entry.isIntersecting || entry.boundingClientRect.top > 0);
      },
      { threshold: 0 } // Quan sát ngay khi bất kỳ phần nào của phần tử xuất hiện
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative h-screen overflow-hidden scroll-snap-y scroll-snap-mandatory overflow-y-auto w-auto"
    >
      {isInView && ( // Video chỉ bị ẩn khi toàn bộ phần tử ra khỏi viewport
        <video
          style={{ objectFit: "cover" }}
          autoPlay
          loop
          muted
          className="videoBanner relative top-0 left-0 h-svh lg:h-auto object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement!.style.backgroundColor = "black";
          }}
        >
          <source src="/assets/defaultBanner.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
          Sẽ gầy
        </h1>
      </div>
    </div>
  );
};

export default Banner;
