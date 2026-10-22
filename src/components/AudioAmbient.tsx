"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Global audio state & tick player
let audioCtx: AudioContext | null = null;
let isAudioActive = false;

export const playMicroSound = (type: "hover" | "click" | "success" = "hover") => {
  if (!isAudioActive || !audioCtx || audioCtx.state !== "running") return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    if (type === "hover") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.04);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "click") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.06);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch (e) {
    // Ignore audio glitches safely
  }
};

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const nodesRef = useRef<{
    ctx: AudioContext;
    masterGain: GainNode;
    oscillators: OscillatorNode[];
  } | null>(null);

  const startAmbient = useCallback(() => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtx = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2.5);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      // Warm harmonic chord (D minor 9th: D3, F3, A3, C4, E4)
      const freqs = [146.83, 174.61, 220.0, 261.63, 329.63];
      const oscillators: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle detune for warmth
        osc.detune.setValueAtTime((idx - 2) * 4, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.18 / freqs.length, ctx.currentTime);

        // LFO for breathing movement
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.08 + idx * 0.03, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.05, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        oscillators.push(osc);
      });

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      nodesRef.current = { ctx, masterGain, oscillators };
      isAudioActive = true;
      setIsPlaying(true);
    } catch (e) {
      console.error("Audio initialization error:", e);
    }
  }, []);

  const stopAmbient = useCallback(() => {
    if (!nodesRef.current) return;
    const { ctx, masterGain, oscillators } = nodesRef.current;
    const now = ctx.currentTime;
    masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);
    setTimeout(() => {
      oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      ctx.close();
      nodesRef.current = null;
      audioCtx = null;
      isAudioActive = false;
      setIsPlaying(false);
    }, 1300);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  useEffect(() => {
    return () => {
      if (nodesRef.current) {
        try {
          nodesRef.current.ctx.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      onMouseEnter={() => playMicroSound("hover")}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-mono text-xs tracking-wider"
      style={{
        borderColor: isPlaying ? "var(--accent-primary)" : "var(--border-subtle)",
        background: isPlaying ? "rgba(144, 71, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
        color: isPlaying ? "var(--accent-teal)" : "var(--text-secondary)",
      }}
      title={isPlaying ? "Mute ambient audio" : "Enable atmospheric soundscape"}
      aria-label="Toggle ambient sound"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-teal-400 rounded-full animate-pulse" style={{ height: "60%" }} />
            <span className="w-0.5 bg-purple-400 rounded-full animate-pulse delay-75" style={{ height: "100%" }} />
            <span className="w-0.5 bg-teal-400 rounded-full animate-pulse delay-150" style={{ height: "40%" }} />
            <span className="w-0.5 bg-purple-400 rounded-full animate-pulse delay-200" style={{ height: "80%" }} />
          </div>
          <span className="text-[11px] uppercase tracking-wider font-medium">Sound ON</span>
        </>
      ) : (
        <>
          <VolumeX size={13} className="text-zinc-500" />
          <span className="text-[11px] uppercase tracking-wider">Sound OFF</span>
        </>
      )}
    </button>
  );
}
