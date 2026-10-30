import React from 'react';
import { AudioPlayerBar } from './AudioPlayerBar';
import { Compass, Sparkles, LineChart, Shapes, CheckCircle, GraduationCap, X, Play } from 'lucide-react';

interface WelcomeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPractice: () => void;
}

export const WelcomeGuideModal: React.FC<WelcomeGuideModalProps> = ({
  isOpen,
  onClose,
  onStartPractice,
}) => {
  if (!isOpen) return null;

  const welcomeNarration =
    'Selamat datang di Petualangan Trigonometri Matematika SMA, dipersembahkan untuk murid SMAS Tunas Baru Jin Seung Batam! Dalam aplikasi latihan mandiri interaktif ini, Anda akan menjelajahi empat submateri utama: satu, pembuktian identitas trigonometri; dua, menentukan fungsi dari grafik trigonometri; tiga, menentukan grafik dari fungsi trigonometri; dan empat, menentukan nilai perbandingan fungsi trigonometri dalam bentuk pembagian. Aplikasi ini bukan ujian, tidak ada batas waktu, dan Anda dapat mencoba kembali setiap soal setelah mempelajari pembahasannya. Tekan tombol Mulai Latihan untuk memulai petualangan belajar Anda!';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Tutup Panduan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* School & App Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-950">
            <Compass className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <GraduationCap className="w-4 h-4" />
              <span>SMAS TUNAS BARU JIN SEUNG BATAM</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Petualangan Trigonometri SMA
            </h2>
          </div>
        </div>

        {/* TTS Audio Player for Opening & Instructions */}
        <div className="mb-6">
          <AudioPlayerBar
            currentText={welcomeNarration}
            label="Narator Sambutan & Petunjuk Belajar"
          />
        </div>

        {/* Learning Objectives & 4 Subtopics */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            4 Submateri Pembelajaran (Tepat 20 Soal):
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-800">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-slate-200 block">1. Pembuktian Identitas (Soal 1–5)</strong>
                <span className="text-slate-400 text-xs">
                  Penalaran aljabar identitas sin²θ+cos²θ=1, sec², csc², dan penyederhanaan pecahan.
                </span>
              </div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-800">
                <LineChart className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-slate-200 block">2. Grafik ke Fungsi (Soal 6–10)</strong>
                <span className="text-slate-400 text-xs">
                  Menganalisis amplitudo, periode, frekuensi, fase, dan pergeseran dari kurva koordinat.
                </span>
              </div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800">
                <Shapes className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-slate-200 block">3. Fungsi ke Grafik (Soal 11–15)</strong>
                <span className="text-slate-400 text-xs">
                  Membandingkan 5 kurva presisi A–E untuk menemukan kurva yang cocok secara eksak.
                </span>
              </div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-slate-200 block">4. Nilai Bentuk Pembagian (Soal 16–20)</strong>
                <span className="text-slate-400 text-xs">
                  Perbandingan sisi segitiga siku-siku, tanda kuadran, dan pecahan rasional.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pedagogical Guidelines */}
        <div className="bg-gradient-to-r from-cyan-950/40 to-slate-800/60 border border-cyan-800/40 rounded-2xl p-4 mb-6 text-xs text-slate-300 leading-relaxed space-y-1.5">
          <p className="font-semibold text-cyan-200">Prinsip Latihan Mandiri Interaktif:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
            <li>Tidak ada batas waktu maupun hitung mundur. Belajarlah dengan tenang.</li>
            <li>Pilih jawaban, tekan <strong className="text-white">Periksa Jawaban</strong> untuk melihat pembahasan lengkap dan mendengarkan penjelasan audio.</li>
            <li>Bila jawaban belum tepat, Anda dapat mengulanginya kembali tanpa penalti.</li>
            <li>Perkembangan belajar Anda akan dirangkum di akhir untuk melihat materi yang sudah dikuasai.</li>
          </ul>
        </div>

        {/* Primary CTA */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onStartPractice}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-2xl shadow-xl shadow-cyan-950/80 transition-all cursor-pointer active:scale-95 text-sm sm:text-base"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Mulai Latihan Sekarang</span>
          </button>
        </div>
      </div>
    </div>
  );
};
