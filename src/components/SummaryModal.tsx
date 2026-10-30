import React from 'react';
import { QuizProgressReport, Question } from '../types/trigonometry';
import { MathView } from './MathView';
import { AudioPlayerBar } from './AudioPlayerBar';
import {
  Award,
  BarChart2,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles,
  X,
  GraduationCap
} from 'lucide-react';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: QuizProgressReport;
  questions: Question[];
  onRestartPractice: () => void;
  onReviewQuestion: (id: number) => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  onClose,
  report,
  questions,
  onRestartPractice,
  onReviewQuestion,
}) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'review'>('overview');
  const [selectedReviewQuestionId, setSelectedReviewQuestionId] = React.useState<number>(1);

  if (!isOpen) return null;

  const selectedReviewQuestion = questions.find((q) => q.id === selectedReviewQuestionId);

  const ttsSummaryScript = `Laporan perkembangan belajar Petualangan Trigonometri SMAS Tunas Baru Jin Seung Batam. Anda telah mempelajari ${report.completedQuestions} dari ${report.totalQuestions} soal. Sebanyak ${report.firstTryCorrectTotal} soal berhasil dijawab benar pada percobaan pertama, dan ${report.eventualCorrectTotal} soal berhasil dijawab benar hingga akhir latihan. Persentase penguasaan Anda adalah ${report.overallMasteryPercentage} persen. ${report.overallEvaluation}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Laporan Perkembangan Belajar Mandiri
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>SMAS TUNAS BARU JIN SEUNG BATAM • Trigonometri SMA</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Tutup Ringkasan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls: Overview vs Review */}
        <div className="flex items-center gap-2 mt-4 mb-4">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Ringkasan & Penguasaan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('review')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'review'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tinjau Semua Pembahasan (20 Soal)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto pr-1">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* TTS Audio Player for Summary */}
              <AudioPlayerBar
                currentText={ttsSummaryScript}
                label="Narator Hasil & Evaluasi Belajar"
              />

              {/* KPI Score Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Soal Dipelajari
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">
                    {report.completedQuestions}
                    <span className="text-xs text-slate-400 font-normal"> / {report.totalQuestions}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Soal latihan selesai</div>
                </div>

                <div className="bg-slate-800/60 border border-emerald-500/30 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    Benar Ke-1
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono">
                    {report.firstTryCorrectTotal}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Percobaan pertama</div>
                </div>

                <div className="bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    Benar Total
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">
                    {report.eventualCorrectTotal}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Termasuk latihan ulang</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-950/60 to-indigo-950/60 border border-cyan-400/50 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                    Tingkat Penguasaan
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {report.overallMasteryPercentage}%
                  </div>
                  <div className="text-[10px] text-cyan-200 mt-1">Berdasarkan coba ke-1</div>
                </div>
              </div>

              {/* Overall Evaluation Message */}
              <div className="bg-slate-800/70 border border-cyan-500/30 rounded-2xl p-5 leading-relaxed">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Analisis Perkembangan Murid:</span>
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {report.overallEvaluation}
                </p>
                <div className="mt-3 text-xs text-slate-400 italic">
                  *Catatan: Laporan ini merupakan indikator pemahaman latihan mandiri interaktif, bukan penilaian resmi atau nilai ujian.
                </div>
              </div>

              {/* Breakdown per Sub-materi */}
              <div className="space-y-3">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                  Ringkasan Hasil Per Submateri Trigonometri:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {report.categoryStats.map((stat) => (
                    <div
                      key={stat.categoryId}
                      className="bg-slate-800/50 border border-slate-700/70 rounded-2xl p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-bold text-sm text-white">{stat.title}</h4>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-bold font-mono ${
                              stat.masteryPercentage >= 80
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                                : stat.masteryPercentage >= 60
                                ? 'bg-cyan-950 text-cyan-300 border border-cyan-700'
                                : 'bg-amber-950 text-amber-300 border border-amber-700'
                            }`}
                          >
                            {stat.masteryPercentage}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden my-2 border border-slate-800">
                          <div
                            className={`h-full transition-all ${
                              stat.masteryPercentage >= 80
                                ? 'bg-emerald-500'
                                : stat.masteryPercentage >= 60
                                ? 'bg-cyan-400'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${stat.masteryPercentage}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                          <span>Benar Percobaan 1: {stat.firstTryCorrectCount} / {stat.totalQuestions}</span>
                          <span>Benar Total: {stat.eventualCorrectCount} / {stat.totalQuestions}</span>
                        </div>
                      </div>

                      <div className="mt-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                        <strong className="text-cyan-400 font-semibold block mb-0.5">Rekomendasi Belajar:</strong>
                        {stat.recommendation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Review Tab: Step-by-step reading of any question */
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {questions.map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setSelectedReviewQuestionId(q.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedReviewQuestionId === q.id
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
                    }`}
                  >
                    Soal #{q.id}
                  </button>
                ))}
              </div>

              {selectedReviewQuestion && (
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Soal Nomor {selectedReviewQuestion.id} • Kunci: Pilihan {selectedReviewQuestion.correctAnswer}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onReviewQuestion(selectedReviewQuestion.id);
                      }}
                      className="text-xs text-cyan-300 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Buka di Ruang Latihan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-slate-200 text-sm font-medium leading-relaxed">
                    <MathView expression={selectedReviewQuestion.questionText} />
                  </p>

                  <AudioPlayerBar
                    currentText={selectedReviewQuestion.explanation.ttsExplanationScript}
                    label={`Narasi Pembahasan Soal #${selectedReviewQuestion.id}`}
                  />

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Penyelesaian Lengkap:
                    </div>
                    <div className="space-y-2">
                      {selectedReviewQuestion.explanation.steps.map((st, i) => (
                        <div key={i} className="text-xs text-slate-300">
                          <MathView expression={st} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-800/40 p-3 rounded-xl">
                    <strong className="block mb-0.5 font-bold">Alasan Matematis:</strong>
                    <MathView expression={selectedReviewQuestion.explanation.mathematicalReason} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={onRestartPractice}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-cyan-400" />
            <span>Ulangi Latihan dari Awal</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl shadow-lg transition-all cursor-pointer ml-auto"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Lanjutkan Berlatih</span>
          </button>
        </div>
      </div>
    </div>
  );
};
