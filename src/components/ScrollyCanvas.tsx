"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const TOTAL_FRAMES = 96;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Image preloading
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const index = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${index}_delay-0.062s.png`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Frame drawing logic
  const drawFrame = useCallback((img: HTMLImageElement) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;
    
    // object-fit: cover implementation
    const rCount = cw / ch;
    const rImg = iw / ih;

    let finalWidth, finalHeight, offsetX, offsetY;
    
    if (rCount > rImg) {
        finalWidth = cw;
        finalHeight = cw / rImg;
        offsetX = 0;
        offsetY = (ch - finalHeight) / 2;
    } else {
        finalWidth = ch * rImg;
        finalHeight = ch;
        offsetX = (cw - finalWidth) / 2;
        offsetY = 0;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, finalWidth, finalHeight);
  }, []);

  // Map scroll value to frame change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded && images.length > 0) {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(latest)));
      drawFrame(images[idx]);
    }
  });

  // Handle Resize and Initial Draw
  useEffect(() => {
    if (isLoaded && images.length > 0) {
      // initial draw
      drawFrame(images[0]);
    }

    const handleResize = () => {
      if (isLoaded && images.length > 0) {
        const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndex.get())));
        drawFrame(images[idx]);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, images, frameIndex, drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 bg-background">
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020617] z-50">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="text-white/50 text-sm tracking-[0.2em] font-light uppercase">
                Loading Experience {progress}%
              </p>
            </motion.div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-70"
        />
        
        {/* Overlays for contrast and blending */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-90 pointer-events-none z-20" />
      </div>
    </div>
  );
}
