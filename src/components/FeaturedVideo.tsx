"use client";

import { useEffect, useRef, useState } from "react";

interface FeaturedVideoProps {
  src: string;
  title?: string;
  date?: string;
  description?: string;
}

export default function FeaturedVideo({
  src,
  title,
  date,
  description,
}: FeaturedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().then(() => {
              setIsPlaying(true);
              // Attempt to unmute after user gesture / autoplay policy
              video.muted = false;
              setIsMuted(false);
            }).catch(() => {
              // Browser blocked unmuted autoplay – play muted instead
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div ref={containerRef} className="relative rounded-3xl overflow-hidden sacred-glow aspect-video">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent pointer-events-none" />

      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-indigo-900/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-indigo-900/80 transition-colors duration-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mute / Unmute */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-indigo-900/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-indigo-900/80 transition-colors duration-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>

      {/* Text overlay at bottom */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 pointer-events-none">
          {date && (
            <span className="text-cream-200/80 text-xs font-semibold uppercase tracking-wider">
              {date}
            </span>
          )}
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mt-2">
            {title}
          </h3>
          {description && (
            <p className="text-cream-200/70 mt-2 text-sm font-light max-w-lg">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
