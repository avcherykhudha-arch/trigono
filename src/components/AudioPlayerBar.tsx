import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Square, RotateCcw, Sparkles } from 'lucide-react';

interface AudioPlayerBarProps {
  currentText: string;
  label?: string;
  autoPlay?: boolean;
  onFinished?: () => void;
  className?: string;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentText,
  label = 'Narator Audio Bahasa Indonesia',
  className = '',
}) => {
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [voiceName, setVoiceName] = useState<string>('');
  const [rate, setRate] = useState<number>(0.95);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Check Web Speech API support and find Indonesian voice
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const idVoice = voices.find(
        (v) => v.lang.toLowerCase().includes('id') || v.name.toLowerCase().includes('indonesia')
      );
      if (idVoice) {
        setVoiceName(idVoice.name);
      } else if (voices.length > 0) {
        setVoiceName(voices[0].name + ' (Default)');
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Cancel any ongoing speech if text changes
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [currentText]);

  const speakText = () => {
    if (!isSupported || !currentText) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentText);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const indonesianVoice = voices.find(
      (v) => v.lang.toLowerCase().includes('id') || v.name.toLowerCase().includes('indonesia')
    );

    if (indonesianVoice) {
      utterance.voice = indonesianVoice;
      utterance.lang = 'id-ID';
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      // Ignore user-initiated cancel errors
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('SpeechSynthesis error:', e);
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (window.speechSynthesis && isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (window.speechSynthesis && isPlaying && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  if (!isSupported) {
    return (
      <div className={`p-3 bg-slate-800/80 rounded-xl text-xs text-amber-300 border border-amber-500/30 flex items-center gap-2 ${className}`}>
        <VolumeX className="w-4 h-4 shrink-0" />
        <span>Browser ini tidak mendukung Web Speech API bawaan. Fitur teks tetap dapat dibaca secara visual.</span>
      </div>
    );
  }

  return (
    <div
      className={`bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-3.5 shadow-lg backdrop-blur-md flex flex-wrap items-center justify-between gap-3 ${className}`}
    >
      <div className="flex items-center gap-2.5 min-w-[180px]">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
            isPlaying && !isPaused
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/50 animate-pulse'
              : 'bg-slate-800 text-cyan-400 border border-slate-700'
          }`}
        >
          <Volume2 className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
            <span>{label}</span>
            {isPlaying && !isPaused && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            )}
          </div>
          <div className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]">
            {isPlaying
              ? isPaused
                ? 'Suara dijeda'
                : 'Sedang membacakan...'
              : voiceName || 'Suara Bahasa Indonesia (Browser)'}
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {!isPlaying ? (
          <button
            type="button"
            onClick={speakText}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-cyan-900/40 transition-all cursor-pointer active:scale-95"
            aria-label="Putar Suara Narator"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Dengarkan Suara</span>
          </button>
        ) : (
          <>
            {isPaused ? (
              <button
                type="button"
                onClick={handleResume}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
                aria-label="Lanjutkan Suara"
                title="Lanjutkan"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Lanjut</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePause}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
                aria-label="Jeda Suara"
                title="Jeda"
              >
                <Pause className="w-3.5 h-3.5" />
                <span>Jeda</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleStop}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-700/80 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
              aria-label="Hentikan Suara"
              title="Hentikan"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Henti</span>
            </button>

            <button
              type="button"
              onClick={speakText}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
              aria-label="Ulangi Suara"
              title="Ulangi Pembacaan"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulang</span>
            </button>
          </>
        )}

        {/* Speed select */}
        <select
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="bg-slate-800/90 border border-slate-700 text-slate-300 text-xs rounded-xl px-2 py-1.5 outline-none cursor-pointer focus:border-cyan-400"
          aria-label="Pilih kecepatan suara"
        >
          <option value="0.8">0.8x (Tenang)</option>
          <option value="0.95">1.0x (Normal)</option>
          <option value="1.15">1.2x (Cepat)</option>
        </select>
      </div>
    </div>
  );
};
