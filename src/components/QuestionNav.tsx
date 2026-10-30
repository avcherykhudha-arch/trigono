import React from 'react';
import { UserAnswerRecord } from '../types/trigonometry';
import { Check, RotateCcw, HelpCircle } from 'lucide-react';

interface QuestionNavProps {
  currentQuestionId: number;
  totalQuestions: number;
  userAnswers: Record<number, UserAnswerRecord>;
  onSelectQuestion: (id: number) => void;
}

export const QuestionNav: React.FC<QuestionNavProps> = ({
  currentQuestionId,
  totalQuestions,
  userAnswers,
  onSelectQuestion,
}) => {
  const questionNumbers = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <div className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2 px-1 text-xs text-slate-400 font-semibold">
        <span>Peta 20 Soal Latihan:</span>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Benar Ke-1
          </span>
          <span className="flex items-center gap-1 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Benar Ulang
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-20 gap-1.5 sm:gap-2">
        {questionNumbers.map((num) => {
          const isCurrent = currentQuestionId === num;
          const record = userAnswers[num];
          const isAnswered = record !== undefined;
          const isCorrect = record?.isCorrect ?? false;
          const isFirstTry = record?.firstTryCorrect ?? false;

          let btnStyle = 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:border-slate-500';
          let icon = null;

          if (isAnswered) {
            if (isCorrect) {
              if (isFirstTry) {
                btnStyle = 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 shadow-sm shadow-emerald-950';
                icon = <Check className="w-2.5 h-2.5 text-emerald-400 stroke-[3]" />;
              } else {
                btnStyle = 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60 shadow-sm shadow-cyan-950';
                icon = <RotateCcw className="w-2.5 h-2.5 text-cyan-400 stroke-[2.5]" />;
              }
            } else {
              btnStyle = 'bg-amber-950/70 text-amber-300 border-amber-500/60';
              icon = <HelpCircle className="w-2.5 h-2.5 text-amber-400 stroke-[2.5]" />;
            }
          }

          if (isCurrent) {
            btnStyle += ' ring-2 ring-cyan-400 border-cyan-300 scale-105 shadow-md shadow-cyan-950';
          }

          return (
            <button
              key={num}
              type="button"
              onClick={() => onSelectQuestion(num)}
              aria-label={`Buka Soal Nomor ${num}`}
              className={`relative flex flex-col items-center justify-center h-10 rounded-xl border text-xs font-bold transition-all cursor-pointer ${btnStyle}`}
            >
              <span>{num}</span>
              {icon && <div className="absolute bottom-1">{icon}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
