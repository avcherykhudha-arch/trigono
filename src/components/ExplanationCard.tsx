import React from 'react';
import { QuestionExplanation } from '../types/trigonometry';
import { MathView } from './MathView';
import { AudioPlayerBar } from './AudioPlayerBar';
import { CheckCircle, AlertCircle, Lightbulb, Compass, Award, RotateCcw, ArrowRight } from 'lucide-react';

interface ExplanationCardProps {
  isCorrect: boolean;
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E';
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: QuestionExplanation;
  onRetryQuestion?: () => void;
  onNextQuestion?: () => void;
  isLastQuestion?: boolean;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  isCorrect,
  selectedOption,
  correctAnswer,
  explanation,
  onRetryQuestion,
  onNextQuestion,
  isLastQuestion = false,
}) => {
  return (
    <div className="w-full mt-6 bg-slate-900/95 border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md transition-all">
      {/* 1. Status Banner */}
      <div
        className={`flex items-start sm:items-center justify-between gap-3 p-4 rounded-2xl border mb-6 ${
          isCorrect
            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
            : 'bg-amber-950/40 border-amber-500/50 text-amber-200'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'
            }`}
          >
            {isCorrect ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg">
              {isCorrect
                ? 'Bagus! Penalaranmu Tepat Sekali!'
                : 'Belum Tepat, Mari Pahami Langkahnya Bersama'}
            </h3>
            <p className="text-xs sm:text-sm opacity-90">
              Jawabanmu:{' '}
              <span className="font-bold underline">Pilihan {selectedOption}</span> • Kunci Jawaban:{' '}
              <span className="font-bold underline text-white">Pilihan {correctAnswer}</span>
            </p>
          </div>
        </div>

        {/* Retry button inside status banner if not correct */}
        {!isCorrect && onRetryQuestion && (
          <button
            type="button"
            onClick={onRetryQuestion}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Coba Lagi</span>
          </button>
        )}
      </div>

      {/* TTS Reader for Explanation */}
      <div className="mb-6">
        <AudioPlayerBar
          currentText={explanation.ttsExplanationScript}
          label="Narator Pembahasan Interaktif"
        />
      </div>

      {/* 2. Konsep Matematika */}
      <div className="mb-5 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">
          <Compass className="w-4 h-4" />
          <span>Konsep Matematika yang Digunakan</span>
        </div>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
          <MathView expression={explanation.concept} />
        </p>
      </div>

      {/* 3. Penyelesaian Langkah demi Langkah */}
      <div className="mb-5">
        <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
          Penyelesaian Langkah Demi Langkah:
        </h4>
        <div className="space-y-2.5">
          {explanation.steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="flex-1">
                <MathView expression={step} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Alasan Matematis Mengapa Jawaban Benar */}
      <div className="mb-5 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">
          <Award className="w-4 h-4" />
          <span>Alasan Matematis Mengapa Jawaban Benar</span>
        </div>
        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
          <MathView expression={explanation.mathematicalReason} />
        </p>
      </div>

      {/* 5. Mengapa Pilihan Lain Salah (Distraktor) */}
      {explanation.wrongOptionsExplanation && (
        <div className="mb-5 bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
          <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            Analisis Pilihan Lain:
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            <MathView expression={explanation.wrongOptionsExplanation} />
          </p>
        </div>
      )}

      {/* 6. Tips Cepat / Rumus Praktis */}
      <div className="mb-5 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 rounded-2xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wider mb-1">
            Tips Cepat & Pengenalan Pola
          </div>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
            <MathView expression={explanation.proTip} />
          </p>
        </div>
      </div>

      {/* 7. Kesimpulan Akhir */}
      <div className="p-3.5 bg-slate-800/80 rounded-xl text-center text-xs sm:text-sm font-semibold text-cyan-200 border border-slate-700 mb-6">
        <MathView expression={explanation.conclusion} />
      </div>

      {/* Action Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
        {onRetryQuestion && (
          <button
            type="button"
            onClick={onRetryQuestion}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-cyan-400" />
            <span>Coba Ulangi Soal Ini</span>
          </button>
        )}

        {onNextQuestion && (
          <button
            type="button"
            onClick={onNextQuestion}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-950/60 transition-all cursor-pointer ml-auto"
          >
            <span>{isLastQuestion ? 'Lihat Ringkasan Hasil Belajar' : 'Soal Berikutnya'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
