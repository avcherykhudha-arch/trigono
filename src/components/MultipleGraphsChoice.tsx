import React from 'react';
import { Option } from '../types/trigonometry';
import { SingleGraphView } from './StimulusRenderer';
import { CheckCircle2, Circle } from 'lucide-react';

interface MultipleGraphsChoiceProps {
  options: Option[];
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E' | null;
  onSelectOption: (id: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  showCorrectKey?: boolean;
  correctAnswer?: 'A' | 'B' | 'C' | 'D' | 'E';
  disabled?: boolean;
}

export const MultipleGraphsChoice: React.FC<MultipleGraphsChoiceProps> = ({
  options,
  selectedOption,
  onSelectOption,
  showCorrectKey = false,
  correctAnswer,
  disabled = false,
}) => {
  return (
    <div className="space-y-4">
      <div className="text-xs sm:text-sm text-cyan-300 font-semibold px-1">
        Pilihlah salah satu dari lima kurva grafik berikut (A – E):
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = selectedOption === opt.id;
          const isCorrect = correctAnswer === opt.id;

          let cardBorder = 'border-slate-700/80 hover:border-cyan-500/50 bg-slate-900/60';
          let badgeBg = 'bg-slate-800 text-slate-300 border-slate-700';

          if (showCorrectKey) {
            if (isCorrect) {
              cardBorder = 'border-emerald-500 bg-emerald-950/20 ring-2 ring-emerald-500/40';
              badgeBg = 'bg-emerald-600 text-white border-emerald-400';
            } else if (isSelected && !isCorrect) {
              cardBorder = 'border-rose-500 bg-rose-950/20 ring-1 ring-rose-500/40';
              badgeBg = 'bg-rose-600 text-white border-rose-400';
            }
          } else if (isSelected) {
            cardBorder = 'border-cyan-400 bg-cyan-950/30 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/50';
            badgeBg = 'bg-cyan-500 text-slate-950 font-bold border-cyan-300';
          }

          return (
            <button
              key={opt.id}
              type="button"
              disabled={disabled}
              onClick={() => onSelectOption(opt.id)}
              aria-label={`Pilihan ${opt.id}: ${opt.label}`}
              className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${cardBorder} ${
                disabled ? 'cursor-default' : 'hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm border shadow-sm transition-colors ${badgeBg}`}
                  >
                    {opt.id}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1">
                    {opt.label}
                  </span>
                </div>

                <div className="text-slate-400">
                  {showCorrectKey && isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : isSelected ? (
                    <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 font-bold text-xs">
                      ✓
                    </div>
                  ) : (
                    <Circle className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </div>

              {opt.graphConfig && (
                <div className="mt-1 pointer-events-none">
                  <SingleGraphView
                    graph={{
                      ...opt.graphConfig,
                      domainDeg: [0, 360],
                      yMin: -3,
                      yMax: 3,
                    }}
                    compact={true}
                    overrideHeight={180}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
