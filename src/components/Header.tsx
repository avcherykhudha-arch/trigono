import React from 'react';
import { CategoryId } from '../types/trigonometry';
import { CATEGORY_DEFINITIONS } from '../utils/quizLogic';
import { Compass, BookOpen, BarChart3, GraduationCap, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentQuestionId: number;
  totalQuestions: number;
  completedCount: number;
  activeCategoryId: CategoryId;
  onOpenGuide: () => void;
  onOpenSummary: () => void;
  onSelectCategory?: (categoryId: CategoryId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentQuestionId,
  totalQuestions,
  completedCount,
  activeCategoryId,
  onOpenGuide,
  onOpenSummary,
  onSelectCategory,
}) => {
  const progressPercent = Math.round((completedCount / totalQuestions) * 100);

  const categories: CategoryId[] = [
    'identitas',
    'grafik_ke_fungsi',
    'fungsi_ke_grafik',
    'nilai_pembagian',
  ];

  return (
    <header className="w-full bg-slate-900/95 border-b border-cyan-500/20 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Identity & School Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-900/40 border border-cyan-400/30">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                    PETUALANGAN TRIGONOMETRI
                  </span>
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 rounded-md border border-cyan-800">
                  Latihan SMA
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>SMAS TUNAS BARU JIN SEUNG BATAM</span>
              </div>
            </div>
          </div>

          {/* Quick Header Buttons */}
          <div className="flex items-center gap-2 self-end md:self-center">
            <button
              type="button"
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all cursor-pointer shadow-sm active:scale-95"
              title="Buka Petunjuk Belajar & Narasi Sambutan"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Petunjuk</span>
            </button>

            <button
              type="button"
              onClick={onOpenSummary}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold rounded-xl border border-cyan-400/40 transition-all cursor-pointer shadow-md shadow-cyan-950/40 active:scale-95"
              title="Lihat Perkembangan & Laporan Belajar"
            >
              <BarChart3 className="w-3.5 h-3.5 text-cyan-200" />
              <span>Ringkasan Belajar</span>
              <span className="ml-1 bg-cyan-950/90 text-cyan-300 px-1.5 py-0.2 rounded-full text-[10px] font-mono border border-cyan-700">
                {completedCount}/{totalQuestions}
              </span>
            </button>
          </div>
        </div>

        {/* Subcategories Nav Badges */}
        <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {categories.map((catId) => {
              const def = CATEGORY_DEFINITIONS[catId];
              const isActive = activeCategoryId === catId;
              const [start, end] = def.questionRange;

              return (
                <button
                  key={catId}
                  type="button"
                  onClick={() => onSelectCategory && onSelectCategory(catId)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm'
                      : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>{def.shortTitle}</span>
                  <span
                    className={`text-[10px] px-1 rounded font-mono ${
                      isActive ? 'bg-cyan-950 text-cyan-300' : 'bg-slate-900 text-slate-500'
                    }`}
                  >
                    #{start}-{end}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Mini Bar */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <span className="text-[11px] text-slate-400 font-medium">
              Progres: <strong className="text-cyan-300">{progressPercent}%</strong>
            </span>
            <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
