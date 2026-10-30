import test from 'node:test';
import assert from 'node:assert/strict';
import { recordAnswerAttempt, calculateQuizReport, formatSpeechMathText } from './quizLogic';
import { Question, UserAnswerRecord } from '../types/trigonometry';

test('recordAnswerAttempt: marks first attempt as correct if selected matches correctAnswer', () => {
  const result = recordAnswerAttempt(undefined, 'A', 'A');
  assert.equal(result.isCorrect, true);
  assert.equal(result.firstTryCorrect, true);
  assert.equal(result.attemptsCount, 1);
  assert.equal(result.selectedOption, 'A');
});

test('recordAnswerAttempt: retains firstTryCorrect as false upon subsequent retry even if retry is correct', () => {
  const firstAttempt: UserAnswerRecord = recordAnswerAttempt(undefined, 'B', 'A');
  assert.equal(firstAttempt.isCorrect, false);
  assert.equal(firstAttempt.firstTryCorrect, false);
  assert.equal(firstAttempt.attemptsCount, 1);

  // Second attempt chooses the right answer
  const secondAttempt = recordAnswerAttempt(firstAttempt, 'A', 'A');
  assert.equal(secondAttempt.isCorrect, true);
  assert.equal(secondAttempt.firstTryCorrect, false); // Preserves original first-try reality
  assert.equal(secondAttempt.attemptsCount, 2);
});

test('calculateQuizReport: correctly breaks down stats across categories', () => {
  const dummyQuestions: Question[] = [
    {
      id: 1,
      categoryId: 'identitas',
      questionText: 'Q1',
      spokenQuestionText: 'Q1',
      stimulus: { type: 'identity_formula' },
      options: [{ id: 'A', label: 'Opt A', spokenText: 'A' }],
      correctAnswer: 'A',
      explanation: {
        concept: 'C',
        steps: ['S1'],
        mathematicalReason: 'R',
        proTip: 'P',
        conclusion: 'Done',
        ttsExplanationScript: 'T',
      },
    },
    {
      id: 6,
      categoryId: 'grafik_ke_fungsi',
      questionText: 'Q6',
      spokenQuestionText: 'Q6',
      stimulus: { type: 'single_graph' },
      options: [{ id: 'B', label: 'Opt B', spokenText: 'B' }],
      correctAnswer: 'B',
      explanation: {
        concept: 'C',
        steps: ['S1'],
        mathematicalReason: 'R',
        proTip: 'P',
        conclusion: 'Done',
        ttsExplanationScript: 'T',
      },
    },
  ];

  const userAnswers: Record<number, UserAnswerRecord> = {
    1: {
      selectedOption: 'A',
      isCorrect: true,
      attemptsCount: 1,
      firstTryCorrect: true,
      timestamp: 1000,
    },
    6: {
      selectedOption: 'B',
      isCorrect: true,
      attemptsCount: 2,
      firstTryCorrect: false, // Got it right on retry
      timestamp: 2000,
    },
  };

  const report = calculateQuizReport(dummyQuestions, userAnswers);

  assert.equal(report.totalQuestions, 2);
  assert.equal(report.completedQuestions, 2);
  assert.equal(report.firstTryCorrectTotal, 1);
  assert.equal(report.eventualCorrectTotal, 2);
  assert.equal(report.overallMasteryPercentage, 50); // 1 / 2 = 50%

  const identitasStat = report.categoryStats.find(c => c.categoryId === 'identitas');
  assert.ok(identitasStat);
  assert.equal(identitasStat.firstTryCorrectCount, 1);
  assert.equal(identitasStat.masteryPercentage, 100);

  const grafikStat = report.categoryStats.find(c => c.categoryId === 'grafik_ke_fungsi');
  assert.ok(grafikStat);
  assert.equal(grafikStat.firstTryCorrectCount, 0);
  assert.equal(grafikStat.eventualCorrectCount, 1);
  assert.equal(grafikStat.masteryPercentage, 0);
});

test('formatSpeechMathText: converts mathematical expressions to spoken Indonesian', () => {
  const raw = 'Buktikan sin² θ + cos² θ = 1';
  const spoken = formatSpeechMathText(raw);
  assert.ok(spoken.includes('sinus kuadrat teta'));
  assert.ok(spoken.includes('kosinus kuadrat teta'));
  assert.ok(spoken.includes('sama dengan'));
});

test('TRIGONOMETRY_QUESTIONS: exactly 20 valid questions with 5 options each and distinct categories', async () => {
  const { TRIGONOMETRY_QUESTIONS } = await import('../data/questions');
  assert.equal(TRIGONOMETRY_QUESTIONS.length, 20);

  const categories = {
    identitas: 0,
    grafik_ke_fungsi: 0,
    fungsi_ke_grafik: 0,
    nilai_pembagian: 0,
  };

  const optionKeys = ['A', 'B', 'C', 'D', 'E'];

  TRIGONOMETRY_QUESTIONS.forEach((q, idx) => {
    assert.equal(q.id, idx + 1);
    assert.ok(q.categoryId in categories);
    categories[q.categoryId] += 1;

    // Check options A-E
    assert.equal(q.options.length, 5);
    const ids = q.options.map(o => o.id);
    assert.deepEqual(ids, optionKeys);

    // Check correct answer is valid
    assert.ok(optionKeys.includes(q.correctAnswer));

    // Check stimulus and spoken texts are present
    assert.ok(q.stimulus);
    assert.ok(q.spokenQuestionText.length > 10);
    assert.ok(q.explanation.concept.length > 5);
    assert.ok(q.explanation.steps.length > 1);
    assert.ok(q.explanation.mathematicalReason.length > 5);
    assert.ok(q.explanation.ttsExplanationScript.length > 10);

    // Check category 3 has graphConfig for options
    if (q.categoryId === 'fungsi_ke_grafik') {
      q.options.forEach(opt => {
        assert.ok(opt.graphConfig, `Option ${opt.id} in question ${q.id} must have graphConfig`);
      });
    }

    // Check category 2 has single_graph
    if (q.categoryId === 'grafik_ke_fungsi') {
      assert.equal(q.stimulus.type, 'single_graph');
      assert.ok(q.stimulus.graph);
    }
  });

  // Exactly 5 per category
  assert.equal(categories.identitas, 5);
  assert.equal(categories.grafik_ke_fungsi, 5);
  assert.equal(categories.fungsi_ke_grafik, 5);
  assert.equal(categories.nilai_pembagian, 5);
});

