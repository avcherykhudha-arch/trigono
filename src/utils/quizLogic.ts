import {
  CategoryId,
  Question,
  UserAnswerRecord,
  QuizProgressReport,
  SubCategoryStat
} from '../types/trigonometry';

export const CATEGORY_DEFINITIONS: Record<CategoryId, {
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  questionRange: [number, number];
}> = {
  identitas: {
    title: 'Pembuktian Identitas Trigonometri',
    shortTitle: 'Identitas',
    description: 'Penalaran aljabar hubungan sin, cos, tan, sec, csc, cot, serta faktorisasi pecahan.',
    iconName: 'Sparkles',
    questionRange: [1, 5],
  },
  grafik_ke_fungsi: {
    title: 'Menentukan Fungsi dari Grafik Trigonometri',
    shortTitle: 'Grafik ke Fungsi',
    description: 'Analisis amplitudo, periode, frekuensi, fase, dan pergeseran vertikal dari kurva.',
    iconName: 'LineChart',
    questionRange: [6, 10],
  },
  fungsi_ke_grafik: {
    title: 'Menentukan Grafik dari Fungsi Trigonometri',
    shortTitle: 'Fungsi ke Grafik',
    description: 'Memilih kurva visual yang tepat dari persamaan y = A sin/cos(Bx + C) + D.',
    iconName: 'Shapes',
    questionRange: [11, 15],
  },
  nilai_pembagian: {
    title: 'Nilai Fungsi Trigonometri Bentuk Pembagian',
    shortTitle: 'Nilai & Pembagian',
    description: 'Perbandingan sisi segitiga siku-siku, tanda kuadran, dan pecahan eksak.',
    iconName: 'Compass',
    questionRange: [16, 20],
  },
};

/**
 * Pure calculation to update user answer state.
 * Differentiates first attempt from retry attempts.
 */
export function recordAnswerAttempt(
  currentRecord: UserAnswerRecord | undefined,
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E',
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E'
): UserAnswerRecord {
  const isCorrect = selectedOption === correctAnswer;
  const attemptsCount = (currentRecord?.attemptsCount ?? 0) + 1;
  const firstTryCorrect = currentRecord === undefined ? isCorrect : currentRecord.firstTryCorrect;

  return {
    selectedOption,
    isCorrect,
    attemptsCount,
    firstTryCorrect,
    timestamp: Date.now(),
  };
}

/**
 * Computes comprehensive progress report across all 4 categories.
 */
export function calculateQuizReport(
  questions: Question[],
  userAnswers: Record<number, UserAnswerRecord>
): QuizProgressReport {
  const totalQuestions = questions.length;
  const answeredIds = Object.keys(userAnswers).map(Number);
  const completedQuestions = answeredIds.length;

  let firstTryCorrectTotal = 0;
  let eventualCorrectTotal = 0;

  for (const q of questions) {
    const record = userAnswers[q.id];
    if (record) {
      if (record.firstTryCorrect) {
        firstTryCorrectTotal += 1;
      }
      if (record.isCorrect) {
        eventualCorrectTotal += 1;
      }
    }
  }

  const overallMasteryPercentage = totalQuestions > 0
    ? Math.round((firstTryCorrectTotal / totalQuestions) * 100)
    : 0;

  // Category statistics breakdown
  const categoryKeys: CategoryId[] = [
    'identitas',
    'grafik_ke_fungsi',
    'fungsi_ke_grafik',
    'nilai_pembagian',
  ];

  const categoryStats: SubCategoryStat[] = categoryKeys.map((catId) => {
    const catQuestions = questions.filter((q) => q.categoryId === catId);
    const catTotal = catQuestions.length;
    let catAnswered = 0;
    let catFirstTry = 0;
    let catEventual = 0;

    for (const q of catQuestions) {
      const rec = userAnswers[q.id];
      if (rec) {
        catAnswered += 1;
        if (rec.firstTryCorrect) catFirstTry += 1;
        if (rec.isCorrect) catEventual += 1;
      }
    }

    const mastery = catTotal > 0 ? Math.round((catFirstTry / catTotal) * 100) : 0;

    let recommendation = '';
    if (mastery >= 80) {
      recommendation = 'Pemahaman konsep sangat kokoh. Pertahankan daya nalar aljabar dan visualmu!';
    } else if (mastery >= 60) {
      recommendation = 'Sudah memahami dasar dengan baik. Tingkatkan ketelitian pada tanda kuadran atau pergeseran fase.';
    } else {
      recommendation = 'Perlu latihan tambahan. Ulangi pembahasan pada bagian rumus identitas dan titik penting grafik.';
    }

    return {
      categoryId: catId,
      title: CATEGORY_DEFINITIONS[catId]?.title || catId,
      totalQuestions: catTotal,
      answeredCount: catAnswered,
      firstTryCorrectCount: catFirstTry,
      eventualCorrectCount: catEventual,
      masteryPercentage: mastery,
      recommendation,
    };
  });

  // Strengths and Improvements lists
  const strengths: string[] = [];
  const improvements: string[] = [];

  categoryStats.forEach((stat) => {
    if (stat.masteryPercentage >= 80) {
      strengths.push(`${stat.title} (${stat.masteryPercentage}% penguasaan)`);
    } else if (stat.masteryPercentage < 60) {
      improvements.push(`${stat.title} (perlu diperdalam lagi)`);
    }
  });

  let overallEvaluation = '';
  if (overallMasteryPercentage >= 85) {
    overallEvaluation = 'Luar Biasa! Kemampuan trigonometri Anda telah mencapai tingkat penguasaan tingkat lanjut dengan ketajaman analisis aljabar dan pemahaman grafik yang sangat prima.';
  } else if (overallMasteryPercentage >= 70) {
    overallEvaluation = 'Kerja Bagus! Sebagian besar konsep pokok trigonometri SMA telah dikuasai dengan tepat. Periksa kembali beberapa pembahasan untuk menyempurnakan pemahaman.';
  } else if (overallMasteryPercentage >= 50) {
    overallEvaluation = 'Perkembangan Cukup Baik. Anda sudah memahami alur dasar trigonometri, namun masih memerlukan penguatan pada identitas aljabar atau analisis grafik.';
  } else {
    overallEvaluation = 'Tetap Semangat! Latihan mandiri ini dirancang untuk membantumu belajar. Pelajari langkah-langkah di setiap pembahasan, lalu ulangi kembali soal yang belum tepat.';
  }

  return {
    totalQuestions,
    completedQuestions,
    firstTryCorrectTotal,
    eventualCorrectTotal,
    overallMasteryPercentage,
    categoryStats,
    overallEvaluation,
    strengths: strengths.length > 0 ? strengths : ['Semangat belajar yang tinggi dalam menuntaskan seluruh latihan.'],
    improvements: improvements.length > 0 ? improvements : ['Pertahankan ketelitian dalam menyelesaikan variasi soal yang lebih menantang.'],
  };
}

/**
 * Formats mathematical expressions into natural Indonesian text for Speech Synthesis.
 */
export function formatSpeechMathText(rawText: string): string {
  if (!rawText) return '';

  let speech = rawText;

  // Common replacements
  speech = speech
    .replace(/\\sin\^2\s*\\theta/g, 'sinus kuadrat teta')
    .replace(/\\cos\^2\s*\\theta/g, 'kosinus kuadrat teta')
    .replace(/\\tan\^2\s*\\theta/g, 'tangen kuadrat teta')
    .replace(/\\sec\^2\s*\\theta/g, 'sekan kuadrat teta')
    .replace(/\\csc\^2\s*\\theta/g, 'kosekan kuadrat teta')
    .replace(/\\cot\^2\s*\\theta/g, 'kotangen kuadrat teta')
    .replace(/\\sin\s*\\theta/g, 'sinus teta')
    .replace(/\\cos\s*\\theta/g, 'kosinus teta')
    .replace(/\\tan\s*\\theta/g, 'tangen teta')
    .replace(/\\sec\s*\\theta/g, 'sekan teta')
    .replace(/\\csc\s*\\theta/g, 'kosekan teta')
    .replace(/\\cot\s*\\theta/g, 'kotangen teta')
    .replace(/\\theta/g, 'teta')
    .replace(/\\alpha/g, 'alfa')
    .replace(/\\pi/g, 'pi')
    .replace(/\\sqrt\{([^}]+)\}/g, 'akar $1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2')
    .replace(/sin²\s*θ/g, 'sinus kuadrat teta')
    .replace(/cos²\s*θ/g, 'kosinus kuadrat teta')
    .replace(/tan²\s*θ/g, 'tangen kuadrat teta')
    .replace(/sec²\s*θ/g, 'sekan kuadrat teta')
    .replace(/csc²\s*θ/g, 'kosekan kuadrat teta')
    .replace(/cot²\s*θ/g, 'kotangen kuadrat teta')
    .replace(/sin\s*θ/g, 'sinus teta')
    .replace(/cos\s*θ/g, 'kosinus teta')
    .replace(/tan\s*θ/g, 'tangen teta')
    .replace(/sec\s*θ/g, 'sekan teta')
    .replace(/csc\s*θ/g, 'kosekan teta')
    .replace(/cot\s*θ/g, 'kotangen teta')
    .replace(/sin\s*x/g, 'sinus x')
    .replace(/cos\s*x/g, 'kosinus x')
    .replace(/tan\s*x/g, 'tangen x')
    .replace(/θ/g, 'teta')
    .replace(/α/g, 'alfa')
    .replace(/°/g, ' derajat')
    .replace(/≠/g, ' tidak sama dengan ')
    .replace(/≤/g, ' kurang dari atau sama dengan ')
    .replace(/≥/g, ' lebih dari atau sama dengan ')
    .replace(/±/g, ' plus minus ')
    .replace(/\+/g, ' ditambah ')
    .replace(/-(?=\s|\d|[a-zA-Z])/g, ' dikurang ')
    .replace(/=/g, ' sama dengan ')
    .replace(/\//g, ' per ')
    .replace(/\*/g, ' kali ')
    .replace(/·/g, ' kali ');

  // Clean duplicate spaces
  speech = speech.replace(/\s+/g, ' ').trim();

  return speech;
}
