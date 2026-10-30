export type CategoryId = 
  | 'identitas'
  | 'grafik_ke_fungsi'
  | 'fungsi_ke_grafik'
  | 'nilai_pembagian';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  questionRange: [number, number];
}

export interface Option {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  label: string; // Formatted text or math
  spokenText: string; // Speech synthesis friendly text in Indonesian
  // For Kelompok 3 (Fungsi ke Grafik), options have dedicated graph parameters:
  graphConfig?: {
    type: 'sin' | 'cos';
    amplitude: number; // e.g. 2, 3, -2
    frequency: number; // e.g. 1 (period 360), 2 (period 180)
    phaseShiftDeg: number; // horizontal shift in degrees
    verticalShift: number; // vertical shift
    highlightKeyPoints?: boolean;
  };
}

export type StimulusType = 
  | 'identity_formula'
  | 'single_graph'
  | 'triangle_diagram'
  | 'cartesian_point';

export interface SingleGraphConfig {
  type: 'sin' | 'cos';
  amplitude: number;
  frequency: number; // B where period = 360 / B
  phaseShiftDeg: number; // C in degrees
  verticalShift: number; // D
  domainDeg: [number, number]; // e.g. [0, 360]
  keyPoints?: Array<{
    x: number;
    y: number;
    label?: string;
    isExtrema?: boolean;
  }>;
  yMin?: number;
  yMax?: number;
}

export interface TriangleConfig {
  angleThetaPosition: 'bottom-left' | 'top-right';
  sideOpposite: { length: number | string; label: string };
  sideAdjacent: { length: number | string; label: string };
  sideHypotenuse?: { length: number | string; label: string };
  showRightAngleMark?: boolean;
}

export interface CartesianPointConfig {
  x: number;
  y: number;
  quadrant: 1 | 2 | 3 | 4;
  showAngleArc?: boolean;
}

export interface QuestionStimulus {
  type: StimulusType;
  title?: string;
  description?: string;
  formulaLatex?: string;
  graph?: SingleGraphConfig;
  triangle?: TriangleConfig;
  cartesian?: CartesianPointConfig;
}

export interface QuestionExplanation {
  concept: string; // Konsep matematika
  steps: string[]; // Langkah-langkah penyelesaian sistematis
  mathematicalReason: string; // Mengapa jawaban ini benar
  wrongOptionsExplanation?: string; // Mengapa pilihan lain tidak tepat
  proTip: string; // Tips atau cara cepat mengenali pola
  conclusion: string; // Kesimpulan akhir
  ttsExplanationScript: string; // Naskah pembacaan narator alami
}

export interface Question {
  id: number;
  categoryId: CategoryId;
  questionText: string;
  spokenQuestionText: string; // Natural Indonesian speech representation
  stimulus: QuestionStimulus;
  options: Option[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: QuestionExplanation;
}

export interface UserAnswerRecord {
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E';
  isCorrect: boolean;
  attemptsCount: number;
  firstTryCorrect: boolean;
  timestamp: number;
}

export interface SubCategoryStat {
  categoryId: CategoryId;
  title: string;
  totalQuestions: number;
  answeredCount: number;
  firstTryCorrectCount: number;
  eventualCorrectCount: number;
  masteryPercentage: number;
  recommendation: string;
}

export interface QuizProgressReport {
  totalQuestions: number;
  completedQuestions: number;
  firstTryCorrectTotal: number;
  eventualCorrectTotal: number;
  overallMasteryPercentage: number;
  categoryStats: SubCategoryStat[];
  overallEvaluation: string;
  strengths: string[];
  improvements: string[];
}
