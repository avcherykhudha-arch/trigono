import React, { useState, useEffect } from 'react';
import { TRIGONOMETRY_QUESTIONS } from './data/questions';
import { UserAnswerRecord, CategoryId } from './types/trigonometry';
import { recordAnswerAttempt, calculateQuizReport, CATEGORY_DEFINITIONS } from './utils/quizLogic';
import { Header } from './components/Header';
import { QuestionNav } from './components/QuestionNav';
import { MathView } from './components/MathView';
import { StimulusRenderer } from './components/StimulusRenderer';
import { MultipleGraphsChoice } from './components/MultipleGraphsChoice';
import { ExplanationCard } from './components/ExplanationCard';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { WelcomeGuideModal } from './components/WelcomeGuideModal';
import { SummaryModal } from './components/SummaryModal';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Volume2
} from 'lucide-react';

export default function App() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerRecord>>({});
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState<boolean>(true);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  // Check ?autostart=1 in query params to bypass welcome screen if requested (ultra-mode testable app rule)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setIsWelcomeOpen(false);
      }
    }
  }, []);

  const currentQuestion = TRIGONOMETRY_QUESTIONS[currentIdx];
  const currentRecord = userAnswers[currentQuestion.id];

  // When changing question, restore previous answered state or reset selection
  useEffect(() => {
    if (currentRecord) {
      setSelectedOption(currentRecord.selectedOption);
      setIsAnswerChecked(true);
    } else {
      setSelectedOption(null);
      setIsAnswerChecked(false);
    }
  }, [currentIdx, currentRecord]);

  // Handle option selection
  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setSelectedOption(optId);
  };

  // Check answer action
  const handleCheckAnswer = () => {
    if (!selectedOption) return;

    const newRecord = recordAnswerAttempt(
      currentRecord,
      selectedOption,
      currentQuestion.correctAnswer
    );

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: newRecord,
    }));

    setIsAnswerChecked(true);
  };

  // Retry question action (allows student to try again without penalty)
  const handleRetryQuestion = () => {
    setIsAnswerChecked(false);
    setSelectedOption(null);
  };

  // Navigation handlers
  const handlePrevQuestion = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < TRIGONOMETRY_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsSummaryOpen(true);
    }
  };

  const handleJumpToQuestion = (questionId: number) => {
    const idx = TRIGONOMETRY_QUESTIONS.findIndex((q) => q.id === questionId);
    if (idx !== -1) {
      setCurrentIdx(idx);
    }
  };

  const handleSelectCategory = (categoryId: CategoryId) => {
    const targetIdx = TRIGONOMETRY_QUESTIONS.findIndex((q) => q.categoryId === categoryId);
    if (targetIdx !== -1) {
      setCurrentIdx(targetIdx);
    }
  };

  const handleRestartPractice = () => {
    setUserAnswers({});
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsSummaryOpen(false);
    setIsWelcomeOpen(false);
  };

  // Generate real-time report
  const quizReport = calculateQuizReport(TRIGONOMETRY_QUESTIONS, userAnswers);
  const currentCategoryDef = CATEGORY_DEFINITIONS[currentQuestion.categoryId];

  // Options speech combined script
  const spokenOptionsList = currentQuestion.options
    .map((o) => o.spokenText)
    .join('. ');
  const combinedSpokenQuestion = `${currentQuestion.spokenQuestionText} Pilihan jawaban adalah: ${spokenOptionsList}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Header with school identity & category shortcuts */}
      <Header
        currentQuestionId={currentQuestion.id}
        totalQuestions={TRIGONOMETRY_QUESTIONS.length}
        completedCount={quizReport.completedQuestions}
        activeCategoryId={currentQuestion.categoryId}
        onOpenGuide={() => setIsWelcomeOpen(true)}
        onOpenSummary={() => setIsSummaryOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6">
        {/* Question Selector Bar 1..20 */}
        <QuestionNav
          currentQuestionId={currentQuestion.id}
          totalQuestions={TRIGONOMETRY_QUESTIONS.length}
          userAnswers={userAnswers}
          onSelectQuestion={handleJumpToQuestion}
        />

        {/* Main Exercise Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Subtle Top Accent Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-sky-400" />

          {/* Subcategory & Question Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-sm">
                #{currentQuestion.id}
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                  {currentCategoryDef.title}
                </span>
                <span className="text-xs text-slate-400">
                  Soal {currentQuestion.id} dari {TRIGONOMETRY_QUESTIONS.length}
                </span>
              </div>
            </div>

            {/* Attempt badge if already attempted */}
            {currentRecord && (
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                    currentRecord.isCorrect
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                      : 'bg-amber-950 text-amber-300 border-amber-500/50'
                  }`}
                >
                  {currentRecord.isCorrect ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  )}
                  <span>
                    {currentRecord.isCorrect
                      ? currentRecord.firstTryCorrect
                        ? 'Benar (Percobaan 1)'
                        : `Benar (Percobaan ${currentRecord.attemptsCount})`
                      : `Belum Tepat (Percobaan ${currentRecord.attemptsCount})`}
                  </span>
                </span>
              </div>
            )}
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed">
              <MathView expression={currentQuestion.questionText} />
            </h2>
          </div>

          {/* Audio Player Bar for Question & Options */}
          <div className="mb-6">
            <AudioPlayerBar
              currentText={combinedSpokenQuestion}
              label={`Dengarkan Soal Nomor ${currentQuestion.id}`}
            />
          </div>

          {/* Visual Stimulus (Single Graph, Triangle, Cartesian Point, or Identity Formula) */}
          <div className="mb-8">
            <StimulusRenderer stimulus={currentQuestion.stimulus} />
          </div>

          {/* Options Section */}
          <div className="mb-6">
            {currentQuestion.categoryId === 'fungsi_ke_grafik' ? (
              /* Kelompok 3: 5 Distinct Graphical Options A–E */
              <MultipleGraphsChoice
                options={currentQuestion.options}
                selectedOption={selectedOption}
                onSelectOption={handleSelectOption}
                showCorrectKey={isAnswerChecked}
                correctAnswer={currentQuestion.correctAnswer}
                disabled={isAnswerChecked && currentRecord?.isCorrect}
              />
            ) : (
              /* Kelompok 1, 2, 4: Big Touch-friendly Multiple Choice Buttons */
              <div className="space-y-3">
                <div className="text-xs sm:text-sm text-cyan-300 font-semibold px-1">
                  Pilihlah salah satu jawaban berikut (A – E):
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    const isCorrect = currentQuestion.correctAnswer === opt.id;

                    let btnClass = 'bg-slate-800/60 border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-200';
                    let badgeClass = 'bg-slate-800 text-slate-300 border-slate-700';

                    if (isAnswerChecked) {
                      if (isCorrect) {
                        btnClass = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
                        badgeClass = 'bg-emerald-500 text-slate-950 font-bold border-emerald-400';
                      } else if (isSelected && !isCorrect) {
                        btnClass = 'bg-rose-950/40 border-rose-500 text-rose-200 ring-1 ring-rose-500/30';
                        badgeClass = 'bg-rose-500 text-white font-bold border-rose-400';
                      }
                    } else if (isSelected) {
                      btnClass = 'bg-cyan-950/40 border-cyan-400 text-cyan-100 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/50';
                      badgeClass = 'bg-cyan-400 text-slate-950 font-bold border-cyan-300';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${btnClass} ${
                          isAnswerChecked && currentRecord?.isCorrect ? 'cursor-default' : 'active:scale-[0.99]'
                        }`}
                        aria-label={`Pilihan ${opt.id}: ${opt.label}`}
                      >
                        <div className="flex items-center gap-3.5 flex-1">
                          <span
                            className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm border shrink-0 transition-colors ${badgeClass}`}
                          >
                            {opt.id}
                          </span>
                          <span className="text-sm sm:text-base font-semibold leading-relaxed">
                            <MathView expression={opt.label} />
                          </span>
                        </div>

                        {isSelected && !isAnswerChecked && (
                          <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 font-bold text-xs shrink-0">
                            ✓
                          </div>
                        )}
                        {isAnswerChecked && isCorrect && (
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs shrink-0">
                            ✓
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Primary Action Button: Periksa Jawaban */}
          {!isAnswerChecked && (
            <div className="flex items-center justify-end pt-3 border-t border-slate-800">
              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleCheckAnswer}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-200 ${
                  selectedOption
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-xl shadow-cyan-950/80 cursor-pointer active:scale-95'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/60'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Periksa Jawaban</span>
              </button>
            </div>
          )}

          {/* Explanation Card (Appears after answer is checked) */}
          {isAnswerChecked && (
            <ExplanationCard
              isCorrect={selectedOption === currentQuestion.correctAnswer}
              selectedOption={selectedOption || 'A'}
              correctAnswer={currentQuestion.correctAnswer}
              explanation={currentQuestion.explanation}
              onRetryQuestion={handleRetryQuestion}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={currentIdx === TRIGONOMETRY_QUESTIONS.length - 1}
            />
          )}

          {/* Navigation Controls between Questions */}
          <div className="flex items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-800 text-xs sm:text-sm">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={handlePrevQuestion}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold border transition-all ${
                currentIdx === 0
                  ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Soal Sebelumnya</span>
            </button>

            <span className="text-slate-400 font-mono hidden sm:inline-block">
              {currentIdx + 1} / {TRIGONOMETRY_QUESTIONS.length}
            </span>

            <button
              type="button"
              onClick={handleNextQuestion}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white rounded-xl font-bold border border-slate-700 transition-all cursor-pointer"
            >
              <span>
                {currentIdx === TRIGONOMETRY_QUESTIONS.length - 1
                  ? 'Ringkasan Belajar'
                  : 'Soal Selanjutnya'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900/60 border-t border-slate-800 py-4 px-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Petualangan Trigonometri Matematika SMA • SMAS Tunas Baru Jin Seung Batam</span>
          <span className="text-slate-400 font-medium">Latihan Mandiri Interaktif Berbasis Standar Kurikulum</span>
        </div>
      </footer>

      {/* Welcome & Instructions Modal */}
      <WelcomeGuideModal
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
        onStartPractice={() => setIsWelcomeOpen(false)}
      />

      {/* Progress & Summary Modal */}
      <SummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        report={quizReport}
        questions={TRIGONOMETRY_QUESTIONS}
        onRestartPractice={handleRestartPractice}
        onReviewQuestion={(id) => handleJumpToQuestion(id)}
      />
    </div>
  );
}
