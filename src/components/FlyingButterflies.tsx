"use client";

import { useEffect, useRef } from "react";

const TINTS: Record<string, string> = {
  monarch: "none",
  sulphur: "hue-rotate(28deg) saturate(1.35) brightness(1.12)",
  saffron: "hue-rotate(14deg) saturate(1.2) brightness(1.06)",
  azure: "hue-rotate(178deg) saturate(0.85) brightness(1.05)",
  rose: "hue-rotate(-38deg) saturate(1.1)",
  jade: "hue-rotate(96deg) saturate(0.75) brightness(0.98)",
  dusk: "hue-rotate(212deg) saturate(0.5) brightness(0.8)",
};

type Variant = keyof typeof TINTS;

interface FlyingButterfliesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  variants?: Variant[];
  position?: "absolute" | "fixed";
  zIndex?: number;
  srcLeft?: string;
  srcRight?: string;
}

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

interface Bug {
  el: HTMLDivElement;
  x: number;
  y: number;
  a: number;          // heading angle
  targetA: number;    // target heading for smooth steering
  v: number;          // base speed
  currentV: number;   // current speed (smoothed)
  targetV: number;    // target speed
  t: number;          // time accumulator
  phase: number;      // unique phase offset for organic variation
  bob: number;        // bobbing frequency
  bobAmp: number;     // bobbing amplitude
  glideTimer: number; // time until next direction change
  glideDur: number;   // how long between direction changes
}

export default function FlyingButterflies({
  count = 8,
  minSize = 40,
  maxSize = 110,
  speed = 1,
  variants = ["monarch", "saffron", "sulphur"],
  position = "absolute",
  zIndex = 5,
  srcLeft = "/images/butterflies/monarch-left.png",
  srcRight = "/images/butterflies/monarch-right.png",
}: FlyingButterfliesProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const bugs: Bug[] = [];
    for (let i = 0; i < count; i++) {
      const span = rand(minSize, maxSize);
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.top = "0";
      el.style.left = "0";
      el.style.willChange = "transform";
      el.style.opacity = String(rand(0.85, 1));
      el.style.transition = "opacity 0.5s";
      const tint = TINTS[pick(variants)];
      const shadow = `drop-shadow(0 ${(span * 0.05).toFixed(1)}px ${(span * 0.08).toFixed(1)}px rgba(0,0,0,.2))`;
      el.style.filter = tint === "none" ? shadow : `${tint} ${shadow}`;

      const body = document.createElement("div");
      body.style.position = "relative";
      body.style.transformStyle = "preserve-3d";
      body.style.width = `${span}px`;
      body.style.height = `${span * 0.707}px`;
      body.style.margin = `${-span * 0.353}px 0 0 ${-span / 2}px`;
      body.style.perspective = `${span * 3}px`;

      // Slower, more varied wing flap
      const flapDur = rand(0.32, 0.55);
      body.style.setProperty("--open", `${rand(-10, 8).toFixed(0)}deg`);
      body.style.setProperty("--shut", `${rand(62, 80).toFixed(0)}deg`);
      body.style.setProperty("--dur", `${flapDur.toFixed(2)}s`);

      const wing = (side: "l" | "r") => {
        const w = document.createElement("div");
        w.style.position = "absolute";
        w.style.top = "0";
        w.style.width = "50%";
        w.style.height = "100%";
        w.style.backgroundRepeat = "no-repeat";
        w.style.backgroundSize = "100% 100%";
        w.style.backgroundImage = `url("${side === "l" ? srcLeft : srcRight}")`;
        if (side === "l") {
          w.style.left = "0";
          w.style.transformOrigin = "100% 50%";
          if (!reduce) w.style.animation = "bflyFlapL var(--dur) ease-in-out infinite";
        } else {
          w.style.left = "50%";
          w.style.transformOrigin = "0 50%";
          if (!reduce) w.style.animation = "bflyFlapR var(--dur) ease-in-out infinite";
        }
        return w;
      };
      body.append(wing("l"), wing("r"));
      el.appendChild(body);
      host.appendChild(el);

      const initAngle = rand(0, Math.PI * 2);
      const baseSpeed = rand(0.025, 0.06) * (1 / (0.6 + span / maxSize));

      bugs.push({
        el,
        x: rand(0.08, 0.92),
        y: rand(0.08, 0.92),
        a: initAngle,
        targetA: initAngle,
        v: baseSpeed,
        currentV: baseSpeed,
        targetV: baseSpeed,
        t: rand(0, 100),
        phase: rand(0, Math.PI * 2),
        bob: rand(0.4, 1.0),
        bobAmp: rand(3, 8),
        glideTimer: 0,
        glideDur: rand(2.5, 5),
      });
    }

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const W = host.clientWidth || window.innerWidth;
      const H = host.clientHeight || window.innerHeight;

      for (const b of bugs) {
        b.t += dt;
        b.glideTimer -= dt;

        // Pick a new target heading periodically — like a real butterfly choosing where to go
        if (b.glideTimer <= 0) {
          b.glideTimer = rand(2, 6);
          b.glideDur = b.glideTimer;
          // Gentle turn: usually within ±60° of current heading
          b.targetA = b.a + rand(-1.0, 1.0);
          // Vary speed: sometimes glide slowly, sometimes flutter faster
          b.targetV = b.v * rand(0.5, 1.5);
        }

        // Steer toward center if near edges — gentle curve, not a snap
        if (b.x < 0.06 || b.x > 0.94 || b.y < 0.06 || b.y > 0.94) {
          const want = Math.atan2(0.5 - b.y, 0.5 - b.x);
          b.targetA = want + rand(-0.3, 0.3);
          b.glideTimer = rand(1.5, 3);
        }

        // Smoothly interpolate heading — this is what makes the curves natural
        const steerRate = 0.8 * dt;
        let diff = ((b.targetA - b.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        b.a += diff * steerRate;

        // Smoothly interpolate speed
        b.currentV = lerp(b.currentV, b.targetV, 0.6 * dt);

        // Add gentle sinusoidal drift for organic waviness
        const wavyA = b.a
          + Math.sin(b.t * 0.4 + b.phase) * 0.12
          + Math.sin(b.t * 0.7 + b.phase * 2) * 0.06;

        const sp = b.currentV * speed * (reduce ? 0.35 : 1);
        b.x += Math.cos(wavyA) * sp * dt;
        b.y += Math.sin(wavyA) * sp * dt * 0.7;

        // Clamp loosely
        b.x = Math.min(1.05, Math.max(-0.05, b.x));
        b.y = Math.min(1.05, Math.max(-0.05, b.y));

        // Position with gentle bob
        const px = b.x * W;
        const py = b.y * H + Math.sin(b.t * b.bob * 2) * b.bobAmp;

        // Heading visual — the butterfly faces the direction it's actually moving
        const deg = (wavyA * 180) / Math.PI + 90;

        // Gentle banking on turns
        const turnAmount = diff * 0.3;
        const bank = Math.max(-0.6, Math.min(0.6, turnAmount));

        b.el.style.transform = `translate3d(${px.toFixed(1)}px,${py.toFixed(1)}px,0) rotate(${deg.toFixed(1)}deg) scaleX(${(1 - Math.abs(bank) * 0.3).toFixed(3)}) skewX(${(bank * 6).toFixed(1)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      bugs.forEach((b) => b.el.remove());
    };
  }, [count, minSize, maxSize, speed, variants, srcLeft, srcRight]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes bflyFlapL {
  0%,100% { transform: rotateY(var(--open)) }
  50%     { transform: rotateY(var(--shut)) }
}
@keyframes bflyFlapR {
  0%,100% { transform: rotateY(calc(var(--open) * -1)) }
  50%     { transform: rotateY(calc(var(--shut) * -1)) }
}`,
        }}
      />
      <div
        ref={hostRef}
        aria-hidden="true"
        style={{
          position,
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex,
        }}
      />
    </>
  );
}
