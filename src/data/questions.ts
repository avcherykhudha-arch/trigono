import { Question } from '../types/trigonometry';

export const TRIGONOMETRY_QUESTIONS: Question[] = [
  // =========================================================================
  // KELOMPOK 1: PEMBUKTIAN IDENTITAS TRIGONOMETRI (SOAL 1 - 5)
  // =========================================================================
  {
    id: 1,
    categoryId: 'identitas',
    questionText: 'Bentuk sederhana dan ekuivalen dari ekspresi pecahan trigonometri (sin² θ + cos² θ) / (tan θ + cot θ) untuk nilai θ di mana penyebut tidak bernilai nol adalah...',
    spokenQuestionText: 'Nomor satu. Bentuk sederhana dan ekuivalen dari ekspresi pecahan: kurung buka sinus kuadrat teta ditambah kosinus kuadrat teta kurung tutup, dibagi kurung buka tangen teta ditambah kotangen teta kurung tutup, untuk nilai teta di mana penyebut tidak sama dengan nol adalah...',
    stimulus: {
      type: 'identity_formula',
      title: 'Penyederhanaan Pecahan Identitas Dasar',
      description: 'Gunakan hubungan dasar sin² θ + cos² θ = 1 serta definisi tan θ dan cot θ dalam bentuk sin dan cos.',
      formulaLatex: '\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{\\tan \\theta + \\cot \\theta}'
    },
    options: [
      {
        id: 'A',
        label: 'sin θ · cos θ',
        spokenText: 'Pilihan A: sinus teta kali kosinus teta'
      },
      {
        id: 'B',
        label: 'tan² θ',
        spokenText: 'Pilihan B: tangen kuadrat teta'
      },
      {
        id: 'C',
        label: 'sec θ · csc θ',
        spokenText: 'Pilihan C: sekan teta kali kosekan teta'
      },
      {
        id: 'D',
        label: 'cos² θ - sin² θ',
        spokenText: 'Pilihan D: kosinus kuadrat teta dikurang sinus kuadrat teta'
      },
      {
        id: 'E',
        label: '1',
        spokenText: 'Pilihan E: satu'
      }
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Identitas Pythagoras Trigonometri (sin² θ + cos² θ = 1) dan Hubungan Hasil Bagi (tan θ = sin θ/cos θ, cot θ = cos θ/sin θ).',
      steps: [
        'Langkah 1: Sederhanakan pembilang menggunakan identitas Pythagoras dasar: sin² θ + cos² θ = 1.',
        'Langkah 2: Jabarkan penyebut ke dalam perbandingan sinus dan kosinus: tan θ + cot θ = (sin θ / cos θ) + (cos θ / sin θ).',
        'Langkah 3: Samakan penyebut pecahan di bawah: (sin² θ + cos² θ) / (sin θ · cos θ) = 1 / (sin θ · cos θ).',
        'Langkah 4: Bagi pembilang dengan penyebut: 1 / [1 / (sin θ · cos θ)] = sin θ · cos θ.'
      ],
      mathematicalReason: 'Karena pembilang bernilai 1 dan penyebut dapat disatukan menjadi 1/(sin θ · cos θ), pembalikan pecahan pembagi menghasilkan perkalian langsung sin θ · cos θ.',
      wrongOptionsExplanation: 'Pilihan C keliru karena sec θ · csc θ = 1/(sin θ · cos θ), yaitu kebalikan dari hasil yang sebenarnya. Pilihan E salah karena mengabaikan penyebut yang bukan bernilai 1.',
      proTip: 'Ketika menjumpai tan θ + cot θ pada penyebut, ingatlah pola instan: tan θ + cot θ = 1 / (sin θ · cos θ) = sec θ · csc θ.',
      conclusion: 'Jadi, bentuk paling sederhana dan ekuivalen adalah sin θ · cos θ (Pilihan A).',
      ttsExplanationScript: 'Mari kita bahas nomor satu. Pembilang sin kuadrat teta ditambah cos kuadrat teta bernilai satu. Penyebut tan teta ditambah cot teta diubah menjadi sin per cos ditambah cos per sin, yang disamakan penyebutnya menjadi satu per sin teta kali cos teta. Satu dibagi satu per sin teta cos teta sama dengan sin teta kali cos teta. Jawaban yang tepat adalah A.'
    }
  },
  {
    id: 2,
    categoryId: 'identitas',
    questionText: 'Diberikan bentuk aljabar pecahan (1 - cos θ) / sin θ. Manakah bentuk ekuivalen yang sah dan dapat dibuktikan dengan mengalikan pembilang dan penyebut dengan bentuk sekawan (1 + cos θ)?',
    spokenQuestionText: 'Nomor dua. Diberikan bentuk aljabar pecahan kurung buka satu dikurang kosinus teta kurung tutup dibagi sinus teta. Manakah bentuk ekuivalen yang sah dan dapat dibuktikan dengan mengalikan pembilang dan penyebut dengan bentuk sekawan satu ditambah kosinus teta?',
    stimulus: {
      type: 'identity_formula',
      title: 'Perkalian Sekawan pada Pecahan Trigonometri',
      description: 'Langkah rasionalisasi/perkalian sekawan: kalikan pembilang dan penyebut dengan (1 + cos θ).',
      formulaLatex: '\\frac{1 - \\cos \\theta}{\\sin \\theta} = \\text{?}'
    },
    options: [
      {
        id: 'A',
        label: 'sin θ / (1 - cos θ)',
        spokenText: 'Pilihan A: sinus teta per kurung buka satu dikurang kosinus teta'
      },
      {
        id: 'B',
        label: 'sin θ / (1 + cos θ)',
        spokenText: 'Pilihan B: sinus teta per kurung buka satu ditambah kosinus teta'
      },
      {
        id: 'C',
        label: 'cos θ / (1 + sin θ)',
        spokenText: 'Pilihan C: kosinus teta per kurung buka satu ditambah sinus teta'
      },
      {
        id: 'D',
        label: '(1 + cos θ) / sin θ',
        spokenText: 'Pilihan D: satu ditambah kosinus teta per sinus teta'
      },
      {
        id: 'E',
        label: '1 / (sin θ + cos θ)',
        spokenText: 'Pilihan E: satu per sinus teta ditambah kosinus teta'
      }
    ],
    correctAnswer: 'B',
    explanation: {
      concept: 'Teknik Aljabar Perkalian Bentuk Sekawan dan Identitas Pythagoras: 1 - cos² θ = sin² θ.',
      steps: [
        'Langkah 1: Kalikan ekspresi awal dengan pecahan bernilai 1 menggunakan sekawan pembilang: [(1 - cos θ) / sin θ] × [(1 + cos θ) / (1 + cos θ)].',
        'Langkah 2: Kalikan pembilang dengan prinsip selisih dua kuadrat (a - b)(a + b) = a² - b²: (1 - cos θ)(1 + cos θ) = 1 - cos² θ.',
        'Langkah 3: Ganti 1 - cos² θ dengan identitas dasar sin² θ: pembilang menjadi sin² θ.',
        'Langkah 4: Penyebut saat ini adalah sin θ(1 + cos θ).',
        'Langkah 5: Bagi pembilang dan penyebut dengan sin θ (karena sin θ ≠ 0): didapatkan sin θ / (1 + cos θ).'
      ],
      mathematicalReason: 'Faktorisasi selisih kuadrat menghasilkan sin² θ pada pembilang yang kemudian saling membagi satu faktor sin θ dengan penyebut.',
      wrongOptionsExplanation: 'Pilihan A adalah kebalikan dari bentuk awal. Pilihan D mengabaikan perubahan tanda dan penyederhanaan aljabar.',
      proTip: 'Identitas sudut paruh tan(θ/2) = (1 - cos θ)/sin θ = sin θ/(1 + cos θ). Kedua bentuk ini selalu ekuivalen!',
      conclusion: 'Bentuk ekuivalen yang sah adalah sin θ / (1 + cos θ) (Pilihan B).',
      ttsExplanationScript: 'Pembahasan nomor dua. Kalikan pembilang dan penyebut dengan sekawan satu ditambah kosinus teta. Pembilang menjadi satu dikurang kosinus kuadrat teta, yang sama dengan sinus kuadrat teta. Setelah sinus kuadrat teta dibagi sinus teta pada penyebut, tersisa sinus teta per satu ditambah kosinus teta. Kunci jawaban adalah B.'
    }
  },
  {
    id: 3,
    categoryId: 'identitas',
    questionText: 'Bentuk pecahan trigonometri (sec² θ - 1) / sec² θ dapat disederhanakan dengan menggunakan identitas dasar sekans menjadi bentuk tunggal...',
    spokenQuestionText: 'Nomor tiga. Bentuk pecahan trigonometri kurung buka sekan kuadrat teta dikurang satu kurung tutup dibagi sekan kuadrat teta dapat disederhanakan dengan identitas dasar sekans menjadi bentuk tunggal...',
    stimulus: {
      type: 'identity_formula',
      title: 'Identitas Sekans dan Penyederhanaan',
      description: 'Gunakan hubungan 1 + tan² θ = sec² θ sehingga sec² θ - 1 = tan² θ.',
      formulaLatex: '\\frac{\\sec^2 \\theta - 1}{\\sec^2 \\theta} = \\text{?}'
    },
    options: [
      {
        id: 'A',
        label: 'cos² θ',
        spokenText: 'Pilihan A: kosinus kuadrat teta'
      },
      {
        id: 'B',
        label: 'tan² θ',
        spokenText: 'Pilihan B: tangen kuadrat teta'
      },
      {
        id: 'C',
        label: 'sin² θ',
        spokenText: 'Pilihan C: sinus kuadrat teta'
      },
      {
        id: 'D',
        label: 'cot² θ',
        spokenText: 'Pilihan D: kotangen kuadrat teta'
      },
      {
        id: 'E',
        label: 'csc² θ',
        spokenText: 'Pilihan E: kosekan kuadrat teta'
      }
    ],
    correctAnswer: 'C',
    explanation: {
      concept: 'Identitas Sekans 1 + tan² θ = sec² θ dan definisi sec θ = 1/cos θ, tan θ = sin θ/cos θ.',
      steps: [
        'Cara 1 (Metode Pemisahan Pecahan): (sec² θ - 1) / sec² θ = (sec² θ / sec² θ) - (1 / sec² θ) = 1 - cos² θ.',
        'Berdasarkan identitas dasar sin² θ + cos² θ = 1, maka 1 - cos² θ = sin² θ.',
        'Cara 2 (Metode Substitusi Tangen): Ganti pembilang dengan tan² θ: tan² θ / sec² θ = (sin² θ / cos² θ) / (1 / cos² θ) = sin² θ.'
      ],
      mathematicalReason: 'Membagi masing-masing suku dengan sec² θ langsung menghasilkan 1 - cos² θ, yang terbukti identik dengan sin² θ.',
      wrongOptionsExplanation: 'Pilihan B keliru karena tan² θ hanyalah pembilangnya saja sebelum dibagi sec² θ. Pilihan A adalah 1 - sin² θ, bukan sin² θ.',
      proTip: 'Pecahan dengan penyebut tunggal (A - B)/C sangat cepat diselesaikan dengan memecahnya menjadi A/C - B/C.',
      conclusion: 'Hasil penyederhanaan bentuk tersebut adalah sin² θ (Pilihan C).',
      ttsExplanationScript: 'Pembahasan nomor tiga. Pecah bentuk pecahan menjadi sekan kuadrat teta per sekan kuadrat teta dikurang satu per sekan kuadrat teta. Hasilnya adalah satu dikurang kosinus kuadrat teta. Berdasarkan identitas Pythagoras, satu dikurang kosinus kuadrat teta sama dengan sinus kuadrat teta. Jawaban yang benar adalah C.'
    }
  },
  {
    id: 4,
    categoryId: 'identitas',
    questionText: 'Dalam membuktikan identitas (tan θ + cot θ)² = sec² θ + csc² θ, langkah pertama menjabarkan kuadrat suku dua: tan² θ + 2 tan θ cot θ + cot² θ. Karena tan θ · cot θ = 1, ekspresi menjadi tan² θ + 2 + cot² θ. Langkah penalaran aljabar selanjutnya yang paling tepat dan sah untuk membuktikan ruas kanan adalah...',
    spokenQuestionText: 'Nomor empat. Dalam membuktikan identitas kurung buka tangen teta ditambah kotangen teta kuadrat sama dengan sekan kuadrat teta ditambah kosekan kuadrat teta, langkah awal menghasilkan tangen kuadrat teta ditambah dua ditambah kotangen kuadrat teta. Langkah penalaran aljabar selanjutnya yang paling tepat untuk membuktikan ruas kanan adalah...',
    stimulus: {
      type: 'identity_formula',
      title: 'Langkah Pembuktian Aljabar Identitas Turunan',
      description: 'Perhatikan pemecahan konstanta 2 menjadi (1 + 1) untuk dipasangkan dengan tan² θ dan cot² θ.',
      formulaLatex: '(\\tan \\theta + \\cot \\theta)^2 = \\tan^2 \\theta + 2 + \\cot^2 \\theta'
    },
    options: [
      {
        id: 'A',
        label: 'Memecah konstanta 2 menjadi 1 + 1, lalu mengelompokkan (tan² θ + 1) + (cot² θ + 1)',
        spokenText: 'Pilihan A: Memecah konstanta dua menjadi satu ditambah satu, lalu mengelompokkan tangen kuadrat teta ditambah satu, ditambah kotangen kuadrat teta ditambah satu'
      },
      {
        id: 'B',
        label: 'Mengalikan semua suku dengan sin² θ · cos² θ sehingga konstanta 2 menjadi nol',
        spokenText: 'Pilihan B: Mengalikan semua suku dengan sinus kuadrat teta kali kosinus kuadrat teta'
      },
      {
        id: 'C',
        label: 'Mengganti tan² θ dengan sin² θ - 1 dan cot² θ dengan cos² θ - 1',
        spokenText: 'Pilihan C: Mengganti tangen kuadrat teta dengan sinus kuadrat teta dikurang satu'
      },
      {
        id: 'D',
        label: 'Menyamakan kedua ruas dan mencoret variabel θ secara langsung',
        spokenText: 'Pilihan D: Menyamakan kedua ruas dan mencoret variabel teta'
      },
      {
        id: 'E',
        label: 'Mengubah 2 menjadi 2(sin θ + cos θ) lalu melakukan pembagian silang',
        spokenText: 'Pilihan E: Mengubah dua menjadi dua kali sinus teta ditambah kosinus teta'
      }
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Identitas Pythagoras Turunan: tan² θ + 1 = sec² θ dan cot² θ + 1 = csc² θ.',
      steps: [
        'Langkah 1: Bentuk yang telah dijabarkan adalah: tan² θ + 2 + cot² θ.',
        'Langkah 2: Pecah angka 2 menjadi penjumlahan dua buah angka 1, yaitu 1 + 1.',
        'Langkah 3: Kelompokkan suku menggunakan sifat komutatif dan asosiatif: (tan² θ + 1) + (cot² θ + 1).',
        'Langkah 4: Terapkan identitas turunan dasar: tan² θ + 1 = sec² θ dan cot² θ + 1 = csc² θ.',
        'Langkah 5: Didapatkan hasil ruas kanan: sec² θ + csc² θ (TERBUKTI).'
      ],
      mathematicalReason: 'Pemecahan konstanta 2 menjadi 1 + 1 secara tepat memasangkan masing-masing suku dengan identitas Pythagoras sekans dan kosekans.',
      wrongOptionsExplanation: 'Pilihan C salah rumus (tan² θ ≠ sin² θ - 1). Pilihan B mengubah nilai ekspresi aljabar tanpa keabsahan matematis.',
      proTip: 'Memecah konstanta bulat menjadi 1 + 1 adalah trik aljabar klasik yang sering digunakan dalam identitas trigonometri tingkat lanjut.',
      conclusion: 'Langkah yang benar dan sah adalah memecah 2 menjadi 1 + 1 lalu mengelompokkan suku-sukunya (Pilihan A).',
      ttsExplanationScript: 'Pembahasan nomor empat. Angka dua dipecah menjadi satu ditambah satu. Kemudian kelompokkan tangen kuadrat teta ditambah satu yang bernilai sekan kuadrat teta, dan kotangen kuadrat teta ditambah satu yang bernilai kosekan kuadrat teta. Maka terbuktilah bahwa hasilnya sama dengan sekan kuadrat teta ditambah kosekan kuadrat teta. Pilihan A adalah langkah yang tepat.'
    }
  },
  {
    id: 5,
    categoryId: 'identitas',
    questionText: 'Manakah di antara persamaan berikut yang terbukti merupakan identitas trigonometri yang benar dan sah untuk semua nilai sudut θ pada daerah asal definisinya?',
    spokenQuestionText: 'Nomor lima. Manakah di antara persamaan berikut yang terbukti merupakan identitas trigonometri yang benar dan sah untuk semua nilai sudut teta pada daerah asal definisinya?',
    stimulus: {
      type: 'identity_formula',
      title: 'Uji Kebenaran Identitas Pecahan Trigonometri',
      description: 'Identitas harus bernilai sama di kedua ruas untuk semua sudut yang terdefinisi.',
      formulaLatex: '\\frac{1}{1 + \\sin \\theta} + \\frac{1}{1 - \\sin \\theta} = \\dots?'
    },
    options: [
      {
        id: 'A',
        label: 'sin⁴ θ - cos⁴ θ = 1',
        spokenText: 'Pilihan A: sinus pangkat empat teta dikurang kosinus pangkat empat teta sama dengan satu'
      },
      {
        id: 'B',
        label: '(sin θ + cos θ)² = 1 + sin θ · cos θ',
        spokenText: 'Pilihan B: kurung buka sinus teta ditambah kosinus teta kuadrat sama dengan satu ditambah sinus teta kali kosinus teta'
      },
      {
        id: 'C',
        label: '1 - tan² θ = sec² θ',
        spokenText: 'Pilihan C: satu dikurang tangen kuadrat teta sama dengan sekan kuadrat teta'
      },
      {
        id: 'D',
        label: '1 / (1 + sin θ) + 1 / (1 - sin θ) = 2 sec² θ',
        spokenText: 'Pilihan D: satu per satu ditambah sinus teta, ditambah satu per satu dikurang sinus teta, sama dengan dua sekan kuadrat teta'
      },
      {
        id: 'E',
        label: 'tan θ / sec θ = cot θ',
        spokenText: 'Pilihan E: tangen teta per sekan teta sama dengan kotangen teta'
      }
    ],
    correctAnswer: 'D',
    explanation: {
      concept: 'Penyamaan Penyebut Pecahan Rasional Trigonometri dan Sifat Selisih Kuadrat.',
      steps: [
        'Uji Pilihan D:',
        'Ruas kiri: [1 / (1 + sin θ)] + [1 / (1 - sin θ)].',
        'Samakan penyebut: [(1 - sin θ) + (1 + sin θ)] / [(1 + sin θ)(1 - sin θ)].',
        'Sederhanakan pembilang: 1 - sin θ + 1 + sin θ = 2.',
        'Sederhanakan penyebut: (1 + sin θ)(1 - sin θ) = 1 - sin² θ = cos² θ.',
        'Hasil bagi: 2 / cos² θ = 2 · (1 / cos² θ) = 2 sec² θ. Ruas kiri = ruas kanan (IDENTITAS BENAR!).'
      ],
      mathematicalReason: 'Pilihan D sah karena penjabaran aljabar menghasilkan pembilang 2 dan penyebut cos² θ yang setara dengan 2 sec² θ.',
      wrongOptionsExplanation: 'A salah karena sin⁴ θ - cos⁴ θ = (sin² θ - cos² θ)(sin² θ + cos² θ) = sin² θ - cos² θ ≠ 1. B salah karena koefisien tengahnya adalah 2 sin θ cos θ. C salah karena rumus sebenarnya 1 + tan² θ = sec² θ. E salah karena tan θ / sec θ = sin θ, bukan cot θ.',
      proTip: 'Bentuk 1/(1 + sin θ) + 1/(1 - sin θ) selalu menghasilkan 2/cos² θ = 2 sec² θ. Mirip dengan 1/(1 + cos θ) + 1/(1 - cos θ) = 2 csc² θ.',
      conclusion: 'Persamaan yang merupakan identitas sejati adalah Pilihan D.',
      ttsExplanationScript: 'Pembahasan nomor lima. Pada pilihan D, samakan penyebut pecahan menjadi satu dikurang sinus kuadrat teta yang bernilai kosinus kuadrat teta. Pembilangnya adalah satu dikurang sinus teta ditambah satu ditambah sinus teta yang menghasilkan dua. Dua dibagi kosinus kuadrat teta sama dengan dua sekan kuadrat teta. Jadi pilihan D adalah identitas yang benar.'
    }
  },

  // =========================================================================
  // KELOMPOK 2: MENENTUKAN FUNGSI DARI GRAFIK TRIGONOMETRI (SOAL 6 - 10)
  // =========================================================================
  {
    id: 6,
    categoryId: 'grafik_ke_fungsi',
    questionText: 'Perhatikan grafik trigonometri pada stimulus. Grafik melalui titik asal (0°, 0), mencapai nilai puncak 2 pada x = 90°, memotong sumbu X di x = 180°, mencapai nilai lembah -2 pada x = 270°, dan kembali ke 0 pada x = 360°. Persamaan fungsi grafik tersebut adalah...',
    spokenQuestionText: 'Nomor enam. Perhatikan grafik trigonometri pada stimulus. Amati titik awal kurva pada titik nol derajat koma nol, titik puncak pada sembilan puluh derajat koma dua, dan titik lembah pada dua ratus tujuh puluh derajat koma minus dua. Persamaan fungsi grafik tersebut adalah...',
    stimulus: {
      type: 'single_graph',
      title: 'Grafik Fungsi Trigonometri Gelombang Standar',
      description: 'Grafik sinus dasar pada interval [0°, 360°] dengan skala sumbu Y bernilai -2 hingga +2.',
      graph: {
        type: 'sin',
        amplitude: 2,
        frequency: 1,
        phaseShiftDeg: 0,
        verticalShift: 0,
        domainDeg: [0, 360],
        keyPoints: [
          { x: 0, y: 0, label: '(0°, 0)' },
          { x: 90, y: 2, label: 'Puncak (90°, 2)', isExtrema: true },
          { x: 180, y: 0, label: '(180°, 0)' },
          { x: 270, y: -2, label: 'Lembah (270°, -2)', isExtrema: true },
          { x: 360, y: 0, label: '(360°, 0)' }
        ],
        yMin: -3,
        yMax: 3
      }
    },
    options: [
      {
        id: 'A',
        label: 'y = 2 sin x',
        spokenText: 'Pilihan A: y sama dengan dua kali sinus x'
      },
      {
        id: 'B',
        label: 'y = sin 2x',
        spokenText: 'Pilihan B: y sama dengan sinus dua x'
      },
      {
        id: 'C',
        label: 'y = 2 cos x',
        spokenText: 'Pilihan C: y sama dengan dua kali kosinus x'
      },
      {
        id: 'D',
        label: 'y = -2 sin x',
        spokenText: 'Pilihan D: y sama dengan minus dua kali sinus x'
      },
      {
        id: 'E',
        label: 'y = sin x + 2',
        spokenText: 'Pilihan E: y sama dengan sinus x ditambah dua'
      }
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Bentuk Umum Grafik Sinus: y = A sin(Bx) di mana A = amplitudo dan Periode T = 360° / B.',
      steps: [
        'Langkah 1: Menentukan Amplitudo (A): A = (y_maks - y_min) / 2 = (2 - (-2)) / 2 = 4 / 2 = 2.',
        'Langkah 2: Menentukan Titik Awal: Pada x = 0°, nilai y = 0 dan kurva bergerak naik. Ini adalah ciri khas fungsi sinus positif (bukan cosinus dan bukan sinus negatif).',
        'Langkah 3: Menentukan Periode (T): Satu gelombang penuh (satu bukit dan satu lembah) selesai pada x = 360°. Maka T = 360°.',
        'Langkah 4: Menentukan Nilai B: B = 360° / T = 360° / 360° = 1.',
        'Langkah 5: Menggabungkan persamaan: y = A sin(Bx) = 2 sin(1x) = 2 sin x.'
      ],
      mathematicalReason: 'Kurva dimulai di titik nol, memiliki puncak bernilai 2 dan periode tepat 360°, sehingga memenuhi rumus dasar y = 2 sin x.',
      wrongOptionsExplanation: 'Pilihan B keliru karena periode sin 2x adalah 180° dan amplitudonya 1. Pilihan C salah karena kurva cosinus mulai dari puncak (0, 2). Pilihan D salah karena grafiknya naik ke atas dulu, bukan turun.',
      proTip: 'Cek cepat: masukkan x = 90°. Pada y = 2 sin 90° = 2(1) = 2. Cocok persis dengan titik puncak di grafik!',
      conclusion: 'Persamaan fungsi grafik tersebut adalah y = 2 sin x (Pilihan A).',
      ttsExplanationScript: 'Pembahasan nomor enam. Kurva melewati titik nol koma nol dan bergerak naik, yang merupakan karakteristik fungsi sinus positif. Nilai maksimum adalah dua dan nilai minimum minus dua, sehingga amplitudo adalah dua. Satu gelombang selesai pada tiga ratus enam puluh derajat sehingga periodenya satu. Jadi persamaannya adalah y sama dengan dua sinus x. Kunci jawaban A.'
    }
  },
  {
    id: 7,
    categoryId: 'grafik_ke_fungsi',
    questionText: 'Perhatikan grafik trigonometri pada stimulus. Kurva dimulai dari titik puncak (0°, 1), memotong sumbu X di 45°, mencapai lembah di (90°, -1), memotong sumbu X di 135°, dan kembali ke puncak di (180°, 1), lalu mengulang siklus yang sama hingga 360°. Persamaan grafik tersebut adalah...',
    spokenQuestionText: 'Nomor tujuh. Perhatikan grafik trigonometri pada stimulus. Amati bahwa satu gelombang penuh telah selesai hanya dalam rentang nol sampai seratus delapan puluh derajat, dengan titik awal dimulai dari puncak satu pada x sama dengan nol derajat. Persamaan grafik tersebut adalah...',
    stimulus: {
      type: 'single_graph',
      title: 'Grafik Trigonometri dengan Periode Dipercepat',
      description: 'Grafik menunjukkan 2 gelombang penuh terjadi dalam rentang 0° hingga 360°.',
      graph: {
        type: 'cos',
        amplitude: 1,
        frequency: 2,
        phaseShiftDeg: 0,
        verticalShift: 0,
        domainDeg: [0, 360],
        keyPoints: [
          { x: 0, y: 1, label: 'Puncak (0°, 1)', isExtrema: true },
          { x: 45, y: 0, label: '45°' },
          { x: 90, y: -1, label: 'Lembah (90°, -1)', isExtrema: true },
          { x: 180, y: 1, label: 'Puncak (180°, 1)', isExtrema: true },
          { x: 270, y: -1, label: 'Lembah (270°, -1)', isExtrema: true },
          { x: 360, y: 1, label: 'Puncak (360°, 1)', isExtrema: true }
        ],
        yMin: -2,
        yMax: 2
      }
    },
    options: [
      {
        id: 'A',
        label: 'y = 2 cos x',
        spokenText: 'Pilihan A: y sama dengan dua kali kosinus x'
      },
      {
        id: 'B',
        label: 'y = cos 2x',
        spokenText: 'Pilihan B: y sama dengan kosinus dua x'
      },
      {
        id: 'C',
        label: 'y = cos(x + 90°)',
        spokenText: 'Pilihan C: y sama dengan kosinus kurung buka x ditambah sembilan puluh derajat'
      },
      {
        id: 'D',
        label: 'y = 2 sin 2x',
        spokenText: 'Pilihan D: y sama dengan dua kali sinus dua x'
      },
      {
        id: 'E',
        label: 'y = cos(x/2)',
        spokenText: 'Pilihan E: y sama dengan kosinus setengah x'
      }
    ],
    correctAnswer: 'B',
    explanation: {
      concept: 'Frekuensi dan Periode Fungsi Cosinus: Periode T = 360° / B, sehingga B = 360° / T.',
      steps: [
        'Langkah 1: Menentukan Jenis Fungsi: Kurva berawal pada nilai puncak y = 1 saat x = 0°. Ini adalah bentuk baku fungsi kosinus y = A cos(Bx).',
        'Langkah 2: Menentukan Amplitudo (A): A = y_maks = 1.',
        'Langkah 3: Menentukan Periode (T): Satu gelombang lengkap (dari puncak ke puncak berikutnya) ditempuh dari x = 0° sampai x = 180°. Jadi T = 180°.',
        'Langkah 4: Menghitung Koefisien Sudut B: B = 360° / T = 360° / 180° = 2.',
        'Langkah 5: Menyusun Persamaan: y = 1 · cos(2x) = cos 2x.'
      ],
      mathematicalReason: 'Karena ada 2 siklus gelombang lengkap dalam rentang 360° dan berawal di puncak 1 pada x = 0°, maka fungsinya adalah y = cos 2x.',
      wrongOptionsExplanation: 'Pilihan A memiliki periode 360° dan amplitudo 2. Pilihan D adalah fungsi sinus dengan amplitudo 2. Pilihan E memiliki periode 720°.',
      proTip: 'Hitung banyaknya gelombang dari 0° sampai 360°. Tampak jelas ada 2 gelombang penuh, artinya B = 2!',
      conclusion: 'Persamaan fungsi yang sesuai dengan grafik adalah y = cos 2x (Pilihan B).',
      ttsExplanationScript: 'Pembahasan nomor tujuh. Kurva diawali dari nilai puncak satu pada x sama dengan nol, yang menandakan kurva kosinus dengan amplitudo satu. Puncak berikutnya terjadi di seratus delapan puluh derajat, artinya periodenya seratus delapan puluh derajat. Nilai B dihitung dari tiga ratus enam puluh dibagi seratus delapan puluh derajat, yaitu dua. Jadi persamaannya adalah y sama dengan kosinus dua x. Jawaban B.'
    }
  },
  {
    id: 8,
    categoryId: 'grafik_ke_fungsi',
    questionText: 'Perhatikan grafik trigonometri pada stimulus. Kurva memiliki titik balik minimum di (0°, -2), memotong sumbu X di 90°, mencapai titik balik maksimum di (180°, 2), memotong sumbu X di 270°, dan kembali ke lembah di (360°, -2). Persamaan fungsi yang paling tepat merepresentasikan grafik ini adalah...',
    spokenQuestionText: 'Nomor delapan. Perhatikan grafik pada stimulus. Kurva ini bermula dari lembah terdalam yaitu y sama dengan minus dua pada saat x sama dengan nol derajat, lalu naik menuju puncak dua pada seratus delapan puluh derajat. Persamaan fungsinya adalah...',
    stimulus: {
      type: 'single_graph',
      title: 'Grafik Fungsi Trigonometri dengan Amplitudo Negatif (Refleksi)',
      description: 'Grafik menunjukkan kurva kosinus yang direfleksikan terhadap sumbu X dengan simpangan maksimum 2.',
      graph: {
        type: 'cos',
        amplitude: -2,
        frequency: 1,
        phaseShiftDeg: 0,
        verticalShift: 0,
        domainDeg: [0, 360],
        keyPoints: [
          { x: 0, y: -2, label: 'Lembah (0°, -2)', isExtrema: true },
          { x: 90, y: 0, label: '(90°, 0)' },
          { x: 180, y: 2, label: 'Puncak (180°, 2)', isExtrema: true },
          { x: 270, y: 0, label: '(270°, 0)' },
          { x: 360, y: -2, label: 'Lembah (360°, -2)', isExtrema: true }
        ],
        yMin: -3,
        yMax: 3
      }
    },
    options: [
      {
        id: 'A',
        label: 'y = -2 sin x',
        spokenText: 'Pilihan A: y sama dengan minus dua kali sinus x'
      },
      {
        id: 'B',
        label: 'y = 2 cos(x - 180°)',
        spokenText: 'Pilihan B: y sama dengan dua kali kosinus x dikurang seratus delapan puluh derajat'
      },
      {
        id: 'C',
        label: 'y = -2 cos x',
        spokenText: 'Pilihan C: y sama dengan minus dua kali kosinus x'
      },
      {
        id: 'D',
        label: 'y = cos x - 2',
        spokenText: 'Pilihan D: y sama dengan kosinus x dikurang dua'
      },
      {
        id: 'E',
        label: 'y = -2 cos 2x',
        spokenText: 'Pilihan E: y sama dengan minus dua kali kosinus dua x'
      }
    ],
    correctAnswer: 'C',
    explanation: {
      concept: 'Refleksi Grafik Fungsi Trigonometri: Grafik y = -A cos x adalah hasil pencerminan y = A cos x terhadap sumbu X.',
      steps: [
        'Langkah 1: Menentukan Amplitudo dan Tanda: Kurva standar y = cos x memiliki puncak di x = 0°. Karena grafik ini justru berada di lembah y = -2 saat x = 0°, maka kurva mengalami refleksi (tanda negatif di depan amplitudo 2): A = -2.',
        'Langkah 2: Menentukan Garis Tengah: y_tengah = (2 + (-2)) / 2 = 0 (tidak ada pergeseran vertikal, D = 0).',
        'Langkah 3: Menentukan Periode (T): Satu gelombang lengkap dari lembah di 0° kembali ke lembah di 360°, sehingga T = 360° dan B = 360° / 360° = 1.',
        'Langkah 4: Menggabungkan rumus: y = -2 cos x.'
      ],
      mathematicalReason: 'Substitusi x = 0° menghasilkan y = -2 cos(0°) = -2(1) = -2. Substitusi x = 180° menghasilkan y = -2 cos(180°) = -2(-1) = +2. Keduanya sangat presisi dengan grafik.',
      wrongOptionsExplanation: 'Pilihan A salah karena -2 sin(0°) = 0, sedangkan di grafik y = -2. Pilihan D salah karena cos x - 2 memiliki rentang [-3, -1], bukan [-2, 2]. Pilihan E salah periode (180°).',
      proTip: 'Grafik cosinus normal: puncak di 0°. Grafik cosinus terbalik (-cos): lembah di 0°.',
      conclusion: 'Persamaan fungsi yang tepat adalah y = -2 cos x (Pilihan C).',
      ttsExplanationScript: 'Pembahasan nomor delapan. Kurva kosinus normal bernilai puncak di titik nol. Namun pada grafik ini, titik awal bernilai minimum minus dua. Hal ini menunjukkan bahwa kurva kosinus mengalami pembalikan tanda dengan amplitudo dua. Periodenya adalah tiga ratus enam puluh derajat. Sehingga persamaannya adalah y sama dengan minus dua kosinus x. Kunci jawaban C.'
    }
  },
  {
    id: 9,
    categoryId: 'grafik_ke_fungsi',
    questionText: 'Perhatikan grafik trigonometri pada stimulus. Kurva memiliki garis tengah (sumbu simetri horizontal) di y = 1. Titik-titik pentingnya adalah: (0°, 1), mencapai puncak di (90°, 2), memotong garis tengah di (180°, 1), mencapai lembah di (270°, 0), dan kembali ke (360°, 1). Persamaan fungsi grafik tersebut adalah...',
    spokenQuestionText: 'Nomor sembilan. Perhatikan grafik pada stimulus. Amati garis keseimbangan kurva yang terangkat ke atas setinggi satu satuan. Puncaknya berada di y sama dengan dua, dan lembahnya menyentuh sumbu X di y sama dengan nol. Persamaan fungsinya adalah...',
    stimulus: {
      type: 'single_graph',
      title: 'Grafik Fungsi Trigonometri dengan Pergeseran Vertikal',
      description: 'Grafik gelombang sinus dengan pergeseran vertikal ke atas 1 satuan.',
      graph: {
        type: 'sin',
        amplitude: 1,
        frequency: 1,
        phaseShiftDeg: 0,
        verticalShift: 1,
        domainDeg: [0, 360],
        keyPoints: [
          { x: 0, y: 1, label: '(0°, 1)' },
          { x: 90, y: 2, label: 'Puncak (90°, 2)', isExtrema: true },
          { x: 180, y: 1, label: '(180°, 1)' },
          { x: 270, y: 0, label: 'Lembah (270°, 0)', isExtrema: true },
          { x: 360, y: 1, label: '(360°, 1)' }
        ],
        yMin: -1,
        yMax: 3
      }
    },
    options: [
      {
        id: 'A',
        label: 'y = 2 sin x',
        spokenText: 'Pilihan A: y sama dengan dua kali sinus x'
      },
      {
        id: 'B',
        label: 'y = sin(x + 90°)',
        spokenText: 'Pilihan B: y sama dengan sinus kurung buka x ditambah sembilan puluh derajat'
      },
      {
        id: 'C',
        label: 'y = cos x + 1',
        spokenText: 'Pilihan C: y sama dengan kosinus x ditambah satu'
      },
      {
        id: 'D',
        label: 'y = sin x + 1',
        spokenText: 'Pilihan D: y sama dengan sinus x ditambah satu'
      },
      {
        id: 'E',
        label: 'y = sin 2x + 1',
        spokenText: 'Pilihan E: y sama dengan sinus dua x ditambah satu'
      }
    ],
    correctAnswer: 'D',
    explanation: {
      concept: 'Pergeseran Vertikal Grafik Fungsi Trigonometri: y = A sin(Bx) + D, di mana D adalah pergeseran sumbu keseimbangan vertikal.',
      steps: [
        'Langkah 1: Menentukan Nilai Ekstrem: Nilai maksimum y_maks = 2, nilai minimum y_min = 0.',
        'Langkah 2: Menentukan Garis Keseimbangan (D): D = (y_maks + y_min) / 2 = (2 + 0) / 2 = 1. Berarti grafik digeser ke atas sejauh 1 satuan (+1).',
        'Langkah 3: Menentukan Amplitudo (A): A = (y_maks - y_min) / 2 = (2 - 0) / 2 = 1.',
        'Langkah 4: Menentukan Jenis Kurva: Pada x = 0°, kurva bernilai 1 (garis tengah) dan sedang bergerak naik menuju puncak di x = 90°. Ini adalah perilaku dasar fungsi sinus.',
        'Langkah 5: Periode kurva adalah 360°, sehingga B = 1. Persamaannya: y = sin x + 1.'
      ],
      mathematicalReason: 'Setiap nilai y pada kurva y = sin x bertambah 1 satuan ke atas: sin 0° + 1 = 1, sin 90° + 1 = 2, sin 270° + 1 = 0.',
      wrongOptionsExplanation: 'Pilihan A memiliki rentang [-2, 2], sedangkan grafik ini [0, 2]. Pilihan C bernilai 2 saat x = 0°, tidak cocok dengan titik (0°, 1) pada grafik.',
      proTip: 'Cari garis tengahnya: garis tengah adalah rata-rata nilai maksimum dan minimum. Nilai D langsung diperoleh!',
      conclusion: 'Persamaan fungsi grafik adalah y = sin x + 1 (Pilihan D).',
      ttsExplanationScript: 'Pembahasan nomor sembilan. Nilai maksimum adalah dua dan minimum adalah nol. Garis tengah kurva adalah dua ditambah nol dibagi dua, yaitu satu. Amplitudo kurva adalah satu. Karena kurva mulai dari garis tengah di titik x sama dengan nol dan bergerak naik, ini adalah kurva sinus. Persamaannya adalah y sama dengan sinus x ditambah satu. Kunci jawaban D.'
    }
  },
  {
    id: 10,
    categoryId: 'grafik_ke_fungsi',
    questionText: 'Perhatikan grafik trigonometri pada stimulus. Kurva memiliki amplitudo 2 dengan pergeseran fase horizontal ke arah kanan. Kurva memotong sumbu X saat mulai naik di (30°, 0), mencapai titik puncak maksimum di (120°, 2), memotong sumbu X di (210°, 0), dan mencapai lembah minimum di (300°, -2). Persamaan fungsi grafik tersebut adalah...',
    spokenQuestionText: 'Nomor sepuluh. Perhatikan grafik pada stimulus. Kurva gelombang sinus dengan simpangan maksimum dua ini mengalami pergeseran fase horizontal ke arah kanan sebesar tiga puluh derajat. Persamaan fungsinya adalah...',
    stimulus: {
      type: 'single_graph',
      title: 'Grafik Sinus dengan Pergeseran Fase Horizontal',
      description: 'Grafik sinus dengan amplitudo 2 dan pergeseran fase ke kanan sejauh 30°.',
      graph: {
        type: 'sin',
        amplitude: 2,
        frequency: 1,
        phaseShiftDeg: 30,
        verticalShift: 0,
        domainDeg: [0, 360],
        keyPoints: [
          { x: 30, y: 0, label: 'Mulai Naik (30°, 0)' },
          { x: 120, y: 2, label: 'Puncak (120°, 2)', isExtrema: true },
          { x: 210, y: 0, label: '(210°, 0)' },
          { x: 300, y: -2, label: 'Lembah (300°, -2)', isExtrema: true }
        ],
        yMin: -3,
        yMax: 3
      }
    },
    options: [
      {
        id: 'A',
        label: 'y = 2 sin(x + 30°)',
        spokenText: 'Pilihan A: y sama dengan dua kali sinus kurung buka x ditambah tiga puluh derajat'
      },
      {
        id: 'B',
        label: 'y = 2 cos(x - 30°)',
        spokenText: 'Pilihan B: y sama dengan dua kali kosinus kurung buka x dikurang tiga puluh derajat'
      },
      {
        id: 'C',
        label: 'y = sin(2x - 30°)',
        spokenText: 'Pilihan C: y sama dengan sinus kurung buka dua x dikurang tiga puluh derajat'
      },
      {
        id: 'D',
        label: 'y = 2 sin x - 1',
        spokenText: 'Pilihan D: y sama dengan dua kali sinus x dikurang satu'
      },
      {
        id: 'E',
        label: 'y = 2 sin(x - 30°)',
        spokenText: 'Pilihan E: y sama dengan dua kali sinus kurung buka x dikurang tiga puluh derajat'
      }
    ],
    correctAnswer: 'E',
    explanation: {
      concept: 'Pergeseran Fase Horizontal: y = A sin(x - α). Jika grafik bergeser ke kanan sejauh α, tandanya adalah negatif (x - α).',
      steps: [
        'Langkah 1: Amplitudo grafik adalah A = 2.',
        'Langkah 2: Kurva sinus standar y = 2 sin x memotong sumbu X dan mulai bergerak naik di x = 0° serta mencapai puncak di x = 90°.',
        'Langkah 3: Pada grafik stimulus, titik awal naik berpindah ke x = 30°, dan puncak berpindah dari 90° ke 120° (90° + 30°).',
        'Langkah 4: Pergeseran ke kanan sejauh 30° berarti mengganti x dengan (x - 30°).',
        'Langkah 5: Menggabungkan rumus: y = 2 sin(x - 30°).'
      ],
      mathematicalReason: 'Uji titik puncak: saat x = 120°, y = 2 sin(120° - 30°) = 2 sin 90° = 2(1) = 2. Uji titik potong: saat x = 30°, y = 2 sin(30° - 30°) = 2 sin 0° = 0. Tepat sesuai grafik.',
      wrongOptionsExplanation: 'Pilihan A bergeser ke kiri sebesar 30°, puncaknya berada di 60°. Pilihan B adalah kurva kosinus yang puncaknya di 30°. Pilihan C salah amplitudo.',
      proTip: 'Ingat rumus arah pergeseran fase: geser ke kanan pakai minus (x - α), geser ke kiri pakai plus (x + α).',
      conclusion: 'Persamaan fungsi yang tepat adalah y = 2 sin(x - 30°) (Pilihan E).',
      ttsExplanationScript: 'Pembahasan nomor sepuluh. Amplitudo grafik adalah dua. Kurva sinus normal mulai naik di nol derajat dan mencapai puncak di sembilan puluh derajat. Pada grafik ini, kurva mulai naik di tiga puluh derajat dan puncaknya bergeser ke seratus dua puluh derajat, yang berarti bergeser ke kanan sebesar tiga puluh derajat. Pergeseran ke kanan dinyatakan dengan tanda minus di dalam sudut. Jadi fungsinya adalah y sama dengan dua sinus kurung buka x dikurang tiga puluh derajat. Kunci jawaban E.'
    }
  },

  // =========================================================================
  // KELOMPOK 3: MENENTUKAN GRAFIK DARI FUNGSI TRIGONOMETRI (SOAL 11 - 15)
  // =========================================================================
  {
    id: 11,
    categoryId: 'fungsi_ke_grafik',
    questionText: 'Diberikan fungsi trigonometri y = 3 sin x untuk interval 0° ≤ x ≤ 360°. Manakah alternatif grafik yang paling akurat menggambarkan kurva fungsi tersebut?',
    spokenQuestionText: 'Nomor sebelas. Diberikan fungsi trigonometri y sama dengan tiga kali sinus x untuk interval nol sampai tiga ratus enam puluh derajat. Perhatikan kelima grafik pilihan A sampai E, lalu pilih grafik yang memiliki amplitudo tiga dan bentuk gelombang sinus standar.',
    stimulus: {
      type: 'identity_formula',
      title: 'Fungsi Diberikan: y = 3 sin x',
      description: 'Domain: 0° ≤ x ≤ 360°. Tentukan grafik dengan amplitudo 3, puncak di (90°, 3), dan lembah di (270°, -3).',
      formulaLatex: 'y = 3 \\sin x, \\quad 0^\\circ \\le x \\le 360^\\circ'
    },
    options: [
      {
        id: 'A',
        label: 'Grafik Sinus dengan Puncak di (90°, 3) dan Lembah di (270°, -3)',
        spokenText: 'Pilihan A: Grafik sinus dengan puncak di sembilan puluh derajat koma tiga dan lembah di dua ratus tujuh puluh derajat koma minus tiga',
        graphConfig: { type: 'sin', amplitude: 3, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'B',
        label: 'Grafik Sinus dengan Amplitudo 1 (Puncak di (90°, 1))',
        spokenText: 'Pilihan B: Grafik sinus dengan puncak di sembilan puluh derajat koma satu',
        graphConfig: { type: 'sin', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'C',
        label: 'Grafik Kosinus dengan Puncak di (0°, 3) dan (360°, 3)',
        spokenText: 'Pilihan C: Grafik kosinus dengan puncak awal di nol derajat koma tiga',
        graphConfig: { type: 'cos', amplitude: 3, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'D',
        label: 'Grafik Sinus Terbalik dengan Lembah di (90°, -3)',
        spokenText: 'Pilihan D: Grafik sinus terbalik dengan lembah di sembilan puluh derajat koma minus tiga',
        graphConfig: { type: 'sin', amplitude: -3, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'E',
        label: 'Grafik Dua Gelombang Sinus Penuh y = 3 sin 2x',
        spokenText: 'Pilihan E: Grafik sinus berfrekuensi ganda dengan dua gelombang penuh',
        graphConfig: { type: 'sin', amplitude: 3, frequency: 2, phaseShiftDeg: 0, verticalShift: 0 }
      }
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Karakteristik Grafik Sinus Baku: Amplitudo A = 3, Periode T = 360°, Titik Nol di 0°, 180°, 360°.',
      steps: [
        'Langkah 1: Identifikasi Amplitudo: Nilai pengali di depan sin adalah 3, sehingga y_maks = 3 dan y_min = -3.',
        'Langkah 2: Identifikasi Periode: Koefisien x adalah 1, sehingga T = 360° / 1 = 360° (satu siklus penuh dari 0° sampai 360°).',
        'Langkah 3: Hitung Titik-titik Kunci:',
        '• x = 0° → y = 3 sin 0° = 0',
        '• x = 90° → y = 3 sin 90° = 3 (titik puncak)',
        '• x = 180° → y = 3 sin 180° = 0 (titik potong sumbu X)',
        '• x = 270° → y = 3 sin 270° = -3 (titik lembah)',
        '• x = 360° → y = 3 sin 360° = 0',
        'Langkah 4: Cocokkan dengan pilihan: Grafik A memenuhi seluruh karakteristik tersebut dengan sempurna.'
      ],
      mathematicalReason: 'Grafik A dimulai dari (0,0), bergerak ke atas menuju nilai maksimum 3 di x = 90°, lalu turun ke nilai minimum -3 di x = 270°, sesuai persamaan y = 3 sin x.',
      wrongOptionsExplanation: 'Grafik B salah karena amplitudo hanya 1. Grafik C adalah fungsi kosinus. Grafik D adalah y = -3 sin x. Grafik E memiliki periode 180° (y = 3 sin 2x).',
      proTip: 'Periksa amplitudo di sumbu Y dan nilai awal di x = 0°. Untuk sinus murni, kurva wajib bermula dari (0, 0).',
      conclusion: 'Grafik yang tepat adalah Grafik A (Pilihan A).',
      ttsExplanationScript: 'Pembahasan nomor sebelas. Fungsi y sama dengan tiga sinus x memiliki amplitudo tiga dan periode tiga ratus enam puluh derajat. Kurva dimulai dari nol koma nol, naik ke puncak tiga pada sembilan puluh derajat, dan turun ke lembah minus tiga pada dua ratus tujuh puluh derajat. Ciri-ciri ini sesuai persis dengan grafik pilihan A.'
    }
  },
  {
    id: 12,
    categoryId: 'fungsi_ke_grafik',
    questionText: 'Diberikan fungsi trigonometri y = 2 cos 2x untuk interval 0° ≤ x ≤ 360°. Manakah alternatif grafik yang paling tepat merepresentasikan fungsi tersebut?',
    spokenQuestionText: 'Nomor dua belas. Diberikan fungsi trigonometri y sama dengan dua kali kosinus dua x untuk rentang nol sampai tiga ratus enam puluh derajat. Perhatikan grafik pilihan A sampai E, carilah grafik yang memiliki amplitudo dua dan menyelesaikan dua gelombang penuh dalam tiga ratus enam puluh derajat.',
    stimulus: {
      type: 'identity_formula',
      title: 'Fungsi Diberikan: y = 2 cos 2x',
      description: 'Domain: 0° ≤ x ≤ 360°. Amplitudo = 2, Periode T = 360°/2 = 180° (2 siklus penuh).',
      formulaLatex: 'y = 2 \\cos 2x, \\quad 0^\\circ \\le x \\le 360^\\circ'
    },
    options: [
      {
        id: 'A',
        label: 'Grafik Kosinus dengan 1 Gelombang Penuh Saja y = 2 cos x',
        spokenText: 'Pilihan A: Grafik kosinus satu gelombang saja y sama dengan dua kosinus x',
        graphConfig: { type: 'cos', amplitude: 2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'B',
        label: 'Grafik Kosinus dengan 2 Gelombang Penuh, Puncak di (0°, 2), (180°, 2), dan (360°, 2)',
        spokenText: 'Pilihan B: Grafik kosinus dengan dua gelombang penuh, puncak di nol derajat, seratus delapan puluh derajat, dan tiga ratus enam puluh derajat',
        graphConfig: { type: 'cos', amplitude: 2, frequency: 2, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'C',
        label: 'Grafik Kosinus 2 Gelombang dengan Amplitudo 1 y = cos 2x',
        spokenText: 'Pilihan C: Grafik kosinus dua gelombang tetapi dengan amplitudo satu',
        graphConfig: { type: 'cos', amplitude: 1, frequency: 2, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'D',
        label: 'Grafik Sinus 2 Gelombang y = 2 sin 2x (Mulai di Nol)',
        spokenText: 'Pilihan D: Grafik sinus dua gelombang yang dimulai dari titik nol',
        graphConfig: { type: 'sin', amplitude: 2, frequency: 2, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'E',
        label: 'Grafik Kosinus Terbalik y = -2 cos 2x (Mulai di Lembah -2)',
        spokenText: 'Pilihan E: Grafik kosinus terbalik yang dimulai dari lembah minus dua',
        graphConfig: { type: 'cos', amplitude: -2, frequency: 2, phaseShiftDeg: 0, verticalShift: 0 }
      }
    ],
    correctAnswer: 'B',
    explanation: {
      concept: 'Periode dan Amplitudo Fungsi Kosinus: y = A cos(Bx), Amplitudo = |A|, Periode = 360° / B.',
      steps: [
        'Langkah 1: Menentukan Amplitudo: A = 2, sehingga rentang nilai y adalah dari -2 hingga +2.',
        'Langkah 2: Menentukan Titik Awal: Karena fungsi cosinus murni, saat x = 0°, y = 2 cos(0°) = 2(1) = 2 (harus mulai di puncak (0°, 2)).',
        'Langkah 3: Menghitung Periode (T): T = 360° / B = 360° / 2 = 180°. Artinya, satu siklus penuh berulang setiap 180°.',
        'Langkah 4: Dalam interval 0° hingga 360°, terbentuk tepat 2 gelombang kosinus penuh (360° / 180° = 2 gelombang).',
        'Langkah 5: Puncak terjadi pada x = 0°, 180°, dan 360°. Lembah y = -2 terjadi pada x = 90° dan 270°.'
      ],
      mathematicalReason: 'Grafik B memiliki amplitudo 2, mulai dari puncak (0, 2), dan menghasilkan 2 gelombang penuh di rentang 360°.',
      wrongOptionsExplanation: 'Grafik A hanya memiliki 1 siklus gelombang (periode 360°). Grafik C amplitudonya 1. Grafik D berawal dari titik asal (0,0) yang merupakan sinus. Grafik E mulai dari lembah (0, -2).',
      proTip: 'Cek dua hal: (1) Saat x = 0, y harus sama dengan 2. (2) Jumlah gelombang sampai 360° harus tepat 2!',
      conclusion: 'Grafik yang tepat adalah Grafik B (Pilihan B).',
      ttsExplanationScript: 'Pembahasan nomor dua belas. Pada fungsi y sama dengan dua kosinus dua x, nilai amplitudo adalah dua dan periode adalah seratus delapan puluh derajat. Ini berarti dari nol sampai tiga ratus enam puluh derajat terdapat dua gelombang penuh. Kurva dimulai dari puncak y sama dengan dua di titik x sama dengan nol. Ciri-ciri ini tepat dimiliki oleh grafik pilihan B.'
    }
  },
  {
    id: 13,
    categoryId: 'fungsi_ke_grafik',
    questionText: 'Diberikan fungsi trigonometri y = -2 sin x untuk domain 0° ≤ x ≤ 360°. Manakah bentuk grafik yang paling akurat mewakili fungsi tersebut?',
    spokenQuestionText: 'Nomor tiga belas. Diberikan fungsi trigonometri y sama dengan minus dua kali sinus x untuk domain nol sampai tiga ratus enam puluh derajat. Perhatikan bahwa ada tanda negatif di depan sinus, yang menyebabkan kurva bergerak ke lembah terlebih dahulu sebelum naik ke puncak.',
    stimulus: {
      type: 'identity_formula',
      title: 'Fungsi Diberikan: y = -2 sin x',
      description: 'Domain: 0° ≤ x ≤ 360°. Nilai awal y(0°) = 0, lalu bergerak ke bawah menuju lembah y(90°) = -2.',
      formulaLatex: 'y = -2 \\sin x, \\quad 0^\\circ \\le x \\le 360^\\circ'
    },
    options: [
      {
        id: 'A',
        label: 'Grafik Sinus Biasa y = 2 sin x (Naik Menuju Puncak 2 di 90°)',
        spokenText: 'Pilihan A: Grafik sinus biasa yang naik menuju puncak dua di sembilan puluh derajat',
        graphConfig: { type: 'sin', amplitude: 2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'B',
        label: 'Grafik Kosinus Terbalik y = -2 cos x (Mulai di Titik (0°, -2))',
        spokenText: 'Pilihan B: Grafik kosinus terbalik yang dimulai dari titik nol derajat koma minus dua',
        graphConfig: { type: 'cos', amplitude: -2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'C',
        label: 'Grafik Sinus Terbalik dengan Lembah di (90°, -2) dan Puncak di (270°, 2)',
        spokenText: 'Pilihan C: Grafik sinus terbalik dengan lembah di sembilan puluh derajat koma minus dua dan puncak di dua ratus tujuh puluh derajat koma dua',
        graphConfig: { type: 'sin', amplitude: -2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'D',
        label: 'Grafik Sinus Terbalik Amplitudo 1 y = -sin x',
        spokenText: 'Pilihan D: Grafik sinus terbalik dengan simpangan hanya satu',
        graphConfig: { type: 'sin', amplitude: -1, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'E',
        label: 'Grafik Sinus Terbalik 2 Gelombang y = -2 sin 2x',
        spokenText: 'Pilihan E: Grafik sinus terbalik dengan dua gelombang penuh',
        graphConfig: { type: 'sin', amplitude: -2, frequency: 2, phaseShiftDeg: 0, verticalShift: 0 }
      }
    ],
    correctAnswer: 'C',
    explanation: {
      concept: 'Refleksi Fungsi Sinus terhadap Sumbu X: y = -A sin x membalikkan bukit menjadi lembah dan sebaliknya.',
      steps: [
        'Langkah 1: Menghitung Titik-titik Kunci:',
        '• x = 0° → y = -2 sin(0°) = 0.',
        '• x = 90° → y = -2 sin(90°) = -2(1) = -2 (titik lembah/minimum pertama terjadi di 90°).',
        '• x = 180° → y = -2 sin(180°) = 0 (memotong sumbu X).',
        '• x = 270° → y = -2 sin(270°) = -2(-1) = +2 (titik puncak/maksimum terjadi di 270°).',
        '• x = 360° → y = -2 sin(360°) = 0.',
        'Langkah 2: Amati arah kurva: Dari (0,0), grafik langsung bergerak turun menuju lembah di -2, kemudian naik melewati 0 ke puncak 2 di 270°.'
      ],
      mathematicalReason: 'Tanda negatif di depan angka 2 membalik arah kurva sinus standar sehingga lembah mendahului puncak pada kuadran pertama.',
      wrongOptionsExplanation: 'Grafik A adalah y = 2 sin x (bukit dulu baru lembah). Grafik B adalah kosinus (berawal di -2, bukan 0). Grafik D amplitudonya 1. Grafik E periodenya 180°.',
      proTip: 'Untuk fungsi sinus dengan tanda negatif (-A sin x), ingat gerakannya: dari 0 langsung terjun ke bawah!',
      conclusion: 'Bentuk grafik yang akurat adalah Grafik C (Pilihan C).',
      ttsExplanationScript: 'Pembahasan nomor tiga belas. Fungsi y sama dengan minus dua sinus x melewati titik nol koma nol. Karena ada tanda negatif, kurva langsung melengkung ke bawah menuju lembah minus dua pada sembilan puluh derajat, lalu naik ke puncak dua pada dua ratus tujuh puluh derajat. Bentuk ini persis ditunjukkan oleh grafik pilihan C.'
    }
  },
  {
    id: 14,
    categoryId: 'fungsi_ke_grafik',
    questionText: 'Diberikan fungsi trigonometri y = cos x - 1 untuk interval 0° ≤ x ≤ 360°. Manakah alternatif grafik yang paling akurat menggambarkan kurva tersebut?',
    spokenQuestionText: 'Nomor empat belas. Diberikan fungsi trigonometri y sama dengan kosinus x dikurang satu untuk interval nol sampai tiga ratus enam puluh derajat. Karena dikurang satu, seluruh kurva bergeser ke bawah sejauh satu satuan, sehingga nilai tertingginya tepat menyentuh sumbu X di titik nol.',
    stimulus: {
      type: 'identity_formula',
      title: 'Fungsi Diberikan: y = cos x - 1',
      description: 'Domain: 0° ≤ x ≤ 360°. Nilai maksimum y = 1 - 1 = 0, nilai minimum y = -1 - 1 = -2.',
      formulaLatex: 'y = \\cos x - 1, \\quad 0^\\circ \\le x \\le 360^\\circ'
    },
    options: [
      {
        id: 'A',
        label: 'Grafik Kosinus Tergeser ke Atas y = cos x + 1 (Berada di Atas Sumbu X)',
        spokenText: 'Pilihan A: Grafik kosinus tergeser ke atas satu satuan',
        graphConfig: { type: 'cos', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: 1 }
      },
      {
        id: 'B',
        label: 'Grafik Sinus Tergeser ke Bawah y = sin x - 1',
        spokenText: 'Pilihan B: Grafik sinus tergeser ke bawah satu satuan',
        graphConfig: { type: 'sin', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: -1 }
      },
      {
        id: 'C',
        label: 'Grafik Kosinus Baku Tanpa Pergeseran y = cos x',
        spokenText: 'Pilihan C: Grafik kosinus baku tanpa pergeseran',
        graphConfig: { type: 'cos', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'D',
        label: 'Grafik Kosinus Bergeser ke Bawah: Puncak Menyentuh Sumbu X di (0°, 0) dan (360°, 0), Lembah di (180°, -2)',
        spokenText: 'Pilihan D: Grafik kosinus bergeser ke bawah dengan puncak menyentuh sumbu X di nol dan tiga ratus enam puluh derajat, serta lembah di minus dua pada seratus delapan puluh derajat',
        graphConfig: { type: 'cos', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: -1 }
      },
      {
        id: 'E',
        label: 'Grafik Kosinus Tergeser ke Bawah 2 Satuan y = cos x - 2',
        spokenText: 'Pilihan E: Grafik kosinus tergeser ke bawah dua satuan',
        graphConfig: { type: 'cos', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: -2 }
      }
    ],
    correctAnswer: 'D',
    explanation: {
      concept: 'Translasi Vertikal Kurva Trigonometri: y = cos x + D. Bila D = -1, kurva ditranslasikan 1 satuan ke bawah.',
      steps: [
        'Langkah 1: Tentukan nilai batas kurva cos x: -1 ≤ cos x ≤ 1.',
        'Langkah 2: Kurangkan 1 pada seluruh pertidaksamaan: -1 - 1 ≤ cos x - 1 ≤ 1 - 1 → -2 ≤ y ≤ 0.',
        'Langkah 3: Hitung nilai titik penting:',
        '• x = 0° → y = cos 0° - 1 = 1 - 1 = 0 (puncak di sumbu X).',
        '• x = 90° → y = cos 90° - 1 = 0 - 1 = -1 (garis tengah).',
        '• x = 180° → y = cos 180° - 1 = -1 - 1 = -2 (titik lembah terendah).',
        '• x = 270° → y = cos 270° - 1 = 0 - 1 = -1.',
        '• x = 360° → y = cos 360° - 1 = 1 - 1 = 0.',
        'Langkah 4: Seluruh grafik berada pada atau di bawah sumbu X (y ≤ 0).'
      ],
      mathematicalReason: 'Grafik D tepat memiliki nilai maksimum 0 pada x = 0° dan 360°, serta nilai minimum -2 pada x = 180°, mencerminkan translasi ke bawah 1 satuan.',
      wrongOptionsExplanation: 'Grafik A bergeser ke atas (rentang 0 sampai 2). Grafik B adalah sinus (mulai di -1 saat x = 0°). Grafik C belum digeser. Grafik E puncaknya berada di -1.',
      proTip: 'Bila nilai maksimum kurva cos x adalah 1, maka cos x - 1 memiliki puncak tepat di 1 - 1 = 0 (menyinggung sumbu X).',
      conclusion: 'Grafik yang tepat adalah Grafik D (Pilihan D).',
      ttsExplanationScript: 'Pembahasan nomor empat belas. Nilai kosinus x bergerak antara minus satu sampai satu. Ketika dikurangi satu, nilainya menjadi antara minus dua sampai nol. Pada x sama dengan nol dan tiga ratus enam puluh derajat, nilainya tepat menyentuh sumbu X di titik nol. Pada seratus delapan puluh derajat, nilainya mencapai lembah di minus dua. Grafik pilihan D paling tepat merepresentasikan kurva ini.'
    }
  },
  {
    id: 15,
    categoryId: 'fungsi_ke_grafik',
    questionText: 'Diberikan fungsi trigonometri dengan pergeseran fase y = 2 cos(x - 90°) untuk interval 0° ≤ x ≤ 360°. Berdasarkan identitas trigonometri relasi sudut cos(x - 90°) = sin x, manakah alternatif grafik yang paling akurat?',
    spokenQuestionText: 'Nomor lima belas. Diberikan fungsi trigonometri y sama dengan dua kali kosinus kurung buka x dikurang sembilan puluh derajat. Berdasarkan relasi sudut, kosinus x dikurang sembilan puluh derajat identik dengan sinus x. Oleh karena itu, carilah grafik yang setara dengan y sama dengan dua sinus x.',
    stimulus: {
      type: 'identity_formula',
      title: 'Fungsi Diberikan: y = 2 cos(x - 90°)',
      description: 'Domain: 0° ≤ x ≤ 360°. Hubungan relasi sudut: cos(x - 90°) = cos(-(90° - x)) = cos(90° - x) = sin x.',
      formulaLatex: 'y = 2 \\cos(x - 90^\\circ) = 2 \\sin x'
    },
    options: [
      {
        id: 'A',
        label: 'Grafik Kosinus Tanpa Pergeseran y = 2 cos x (Puncak di (0°, 2))',
        spokenText: 'Pilihan A: Grafik kosinus tanpa pergeseran yang puncaknya di nol derajat koma dua',
        graphConfig: { type: 'cos', amplitude: 2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'B',
        label: 'Grafik Kosinus Tergeser ke Kiri y = 2 cos(x + 90°) = -2 sin x',
        spokenText: 'Pilihan B: Grafik kosinus tergeser ke kiri yang bernilai minus dua sinus x',
        graphConfig: { type: 'sin', amplitude: -2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'C',
        label: 'Grafik Sinus dengan Amplitudo 1 y = sin x',
        spokenText: 'Pilihan C: Grafik sinus biasa tetapi dengan amplitudo satu',
        graphConfig: { type: 'sin', amplitude: 1, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      },
      {
        id: 'D',
        label: 'Grafik Kosinus Bergeser Vertikal y = 2 cos x - 1',
        spokenText: 'Pilihan D: Grafik kosinus bergeser vertikal',
        graphConfig: { type: 'cos', amplitude: 2, frequency: 1, phaseShiftDeg: 0, verticalShift: -1 }
      },
      {
        id: 'E',
        label: 'Grafik Sinus Beramplitudo 2: Mulai di (0°, 0), Puncak di (90°, 2), Lembah di (270°, -2)',
        spokenText: 'Pilihan E: Grafik sinus beramplitudo dua yang mulai di nol koma nol, puncak di sembilan puluh derajat koma dua, dan lembah di dua ratus tujuh puluh derajat koma minus dua',
        graphConfig: { type: 'sin', amplitude: 2, frequency: 1, phaseShiftDeg: 0, verticalShift: 0 }
      }
    ],
    correctAnswer: 'E',
    explanation: {
      concept: 'Relasi Sudut dan Pergeseran Fase: cos(x - 90°) = sin x, sehingga y = 2 cos(x - 90°) identik dengan y = 2 sin x.',
      steps: [
        'Langkah 1: Gunakan sifat fungsi genap kosinus: cos(-A) = cos A.',
        'Maka cos(x - 90°) = cos(-(90° - x)) = cos(90° - x).',
        'Langkah 2: Gunakan relasi sudut berpenyiku: cos(90° - x) = sin x.',
        'Langkah 3: Persamaan berubah menjadi fungsi sinus murni: y = 2 sin x.',
        'Langkah 4: Karakteristik grafik y = 2 sin x:',
        '• Titik awal: (0°, 0).',
        '• Titik puncak: (90°, 2).',
        '• Titik potong sumbu: (180°, 0) dan (360°, 0).',
        '• Titik lembah: (270°, -2).'
      ],
      mathematicalReason: 'Pergeseran grafik kosinus sejauh 90° ke kanan mengubah posisi puncak dari x = 0° ke x = 90°, yang menjadikannya identik dengan grafik sinus beramplitudo 2.',
      wrongOptionsExplanation: 'Grafik A adalah cosinus yang belum digeser fase. Grafik B bergeser ke kiri sehingga menjadi -2 sin x. Grafik C salah amplitudo.',
      proTip: 'Grafik kosinus digeser ke kanan 90° = kurva sinus positif. Grafik sinus digeser ke kiri 90° = kurva kosinus.',
      conclusion: 'Grafik yang tepat adalah Grafik E (Pilihan E).',
      ttsExplanationScript: 'Pembahasan nomor lima belas. Pergeseran kosinus ke kanan sebesar sembilan puluh derajat menghasilkan fungsi sinus yang identik, yaitu dua sinus x. Kurva ini berawal dari nol koma nol, naik ke puncak dua pada sembilan puluh derajat, dan turun ke lembah minus dua pada dua ratus tujuh puluh derajat. Grafik yang tepat adalah pilihan E.'
    }
  },

  // =========================================================================
  // KELOMPOK 4: MENENTUKAN NILAI FUNGSI TRIGONOMETRI BENTUK PEMBAGIAN (SOAL 16 - 20)
  // =========================================================================
  {
    id: 16,
    categoryId: 'nilai_pembagian',
    questionText: 'Perhatikan diagram segitiga siku-siku ABC pada stimulus yang siku-siku di B. Panjang sisi di depan sudut θ adalah BC = 8 cm dan panjang sisi di samping sudut θ adalah AB = 15 cm. Nilai perbandingan trigonometri sin θ dan sec θ berturut-turut adalah...',
    spokenQuestionText: 'Nomor enam belas. Perhatikan diagram segitiga siku-siku ABC pada stimulus. Sisi depan sudut teta memiliki panjang delapan sentimeter, dan sisi samping sudut teta memiliki panjang lima belas sentimeter. Tentukan nilai sinus teta dan sekan teta berturut-turut dalam bentuk pecahan.',
    stimulus: {
      type: 'triangle_diagram',
      title: 'Segitiga Siku-Siku ABC',
      description: 'Siku-siku di titik B. Sisi samping AB = 15 cm, sisi depan BC = 8 cm. Sudut θ berada di titik A.',
      triangle: {
        angleThetaPosition: 'bottom-left',
        sideOpposite: { length: 8, label: 'BC = 8' },
        sideAdjacent: { length: 15, label: 'AB = 15' },
        sideHypotenuse: { length: 17, label: 'AC = ?' },
        showRightAngleMark: true
      }
    },
    options: [
      {
        id: 'A',
        label: 'sin θ = 8/17 dan sec θ = 17/15',
        spokenText: 'Pilihan A: sinus teta sama dengan delapan per tujuh belas, dan sekan teta sama dengan tujuh belas per lima belas'
      },
      {
        id: 'B',
        label: 'sin θ = 15/17 dan sec θ = 17/8',
        spokenText: 'Pilihan B: sinus teta sama dengan lima belas per tujuh belas, dan sekan teta sama dengan tujuh belas per delapan'
      },
      {
        id: 'C',
        label: 'sin θ = 8/15 dan sec θ = 15/17',
        spokenText: 'Pilihan C: sinus teta sama dengan delapan per lima belas, dan sekan teta sama dengan lima belas per tujuh belas'
      },
      {
        id: 'D',
        label: 'sin θ = 17/8 dan sec θ = 8/17',
        spokenText: 'Pilihan D: sinus teta sama dengan tujuh belas per delapan, dan sekan teta sama dengan delapan per tujuh belas'
      },
      {
        id: 'E',
        label: 'sin θ = 8/17 dan sec θ = 15/17',
        spokenText: 'Pilihan E: sinus teta sama dengan delapan per tujuh belas, dan sekan teta sama dengan lima belas per tujuh belas'
      }
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Teorema Pythagoras dan Perbandingan Dasar Trigonometri pada Segitiga Siku-Siku.',
      steps: [
        'Langkah 1: Hitung panjang sisi miring (AC) dengan Teorema Pythagoras:',
        'AC = √(AB² + BC²) = √(15² + 8²) = √(225 + 64) = √289 = 17 cm.',
        'Langkah 2: Hitung nilai sin θ:',
        'sin θ = sisi depan / sisi miring = BC / AC = 8 / 17.',
        'Langkah 3: Hitung nilai cos θ:',
        'cos θ = sisi samping / sisi miring = AB / AC = 15 / 17.',
        'Langkah 4: Hitung nilai sec θ:',
        'sec θ = 1 / cos θ = sisi miring / sisi samping = 17 / 15.'
      ],
      mathematicalReason: 'Sisi miring bernilai 17. Sesuai definisi pembagian rasio sisi, sin θ = depan/miring = 8/17 dan sec θ = miring/samping = 17/15.',
      wrongOptionsExplanation: 'Pilihan B tertukar antara sisi depan dan samping. Pilihan C menggunakan definisi tan θ = 8/15. Pilihan E menyebutkan nilai cos θ, bukan sec θ.',
      proTip: 'Tripel Pythagoras terkenal: (8, 15, 17). Sisi miring langsung diketahui 17 tanpa menghitung manual panjang!',
      conclusion: 'Nilai perbandingannya adalah sin θ = 8/17 dan sec θ = 17/15 (Pilihan A).',
      ttsExplanationScript: 'Pembahasan nomor enam belas. Menggunakan tripel Pythagoras delapan, lima belas, dan tujuh belas, didapatkan panjang sisi miring adalah tujuh belas sentimeter. Sinus teta adalah sisi depan dibagi sisi miring, yaitu delapan per tujuh belas. Sekan teta adalah kebalikan dari kosinus, yaitu sisi miring dibagi sisi samping yang bernilai tujuh belas per lima belas. Kunci jawaban A.'
    }
  },
  {
    id: 17,
    categoryId: 'nilai_pembagian',
    questionText: 'Diketahui sudut θ terletak di Kuadran II (90° < θ < 180°) dengan nilai perbandingan sin θ = 3/5. Nilai dari operasi pembagian pecahan tan θ + cos θ adalah...',
    spokenQuestionText: 'Nomor tujuh belas. Diketahui sudut teta terletak di Kuadran Dua dengan nilai sinus teta sama dengan tiga per lima. Tentukan nilai dari tangen teta ditambah kosinus teta dalam bentuk pecahan paling sederhana.',
    stimulus: {
      type: 'cartesian_point',
      title: 'Sudut di Kuadran II',
      description: 'Di Kuadran II: sin θ > 0 (positif), sedangkan cos θ < 0 (negatif) dan tan θ < 0 (negatif).',
      cartesian: {
        x: -4,
        y: 3,
        quadrant: 2,
        showAngleArc: true
      }
    },
    options: [
      {
        id: 'A',
        label: '-7/20',
        spokenText: 'Pilihan A: minus tujuh per dua puluh'
      },
      {
        id: 'B',
        label: '-31/20',
        spokenText: 'Pilihan B: minus tiga puluh satu per dua puluh'
      },
      {
        id: 'C',
        label: '31/20',
        spokenText: 'Pilihan C: positif tiga puluh satu per dua puluh'
      },
      {
        id: 'D',
        label: '-1/20',
        spokenText: 'Pilihan D: minus satu per dua puluh'
      },
      {
        id: 'E',
        label: '-11/20',
        spokenText: 'Pilihan E: minus sebelas per dua puluh'
      }
    ],
    correctAnswer: 'B',
    explanation: {
      concept: 'Tanda Perbandingan Trigonometri Berdasarkan Kuadran (ASTC: All - Sin - Tan - Cos) dan Tripel Pythagoras (3, 4, 5).',
      steps: [
        'Langkah 1: Menentukan komponen segitiga referensi:',
        'sin θ = sisi depan / sisi miring = 3 / 5. Maka sisi depan y = 3, sisi miring r = 5.',
        'Sisi samping x = √(5² - 3²) = √(25 - 9) = √16 = 4.',
        'Langkah 2: Menentukan tanda di Kuadran II (90° < θ < 180°):',
        '• x bernilai negatif: x = -4.',
        '• cos θ = x / r = -4 / 5.',
        '• tan θ = y / x = 3 / (-4) = -3 / 4.',
        'Langkah 3: Menghitung operasi pecahan tan θ + cos θ:',
        'tan θ + cos θ = (-3/4) + (-4/5) = (-15/20) + (-16/20) = -31/20.'
      ],
      mathematicalReason: 'Karena sudut berada di Kuadran II, baik tangen maupun kosinus bernilai negatif. Penjumlahan dua pecahan negatif menghasilkan pecahan negatif -31/20.',
      wrongOptionsExplanation: 'Pilihan A keliru karena salah tanda (+3/4 - 4/5 = -1/20 atau -3/4 + 4/5 = 1/20). Pilihan C salah karena mengabaikan tanda minus di Kuadran II.',
      proTip: 'Di Kuadran II, hanya SINUS yang bertanda positif. Kosinus dan tangen pasti negatif!',
      conclusion: 'Nilai dari tan θ + cos θ adalah -31/20 (Pilihan B).',
      ttsExplanationScript: 'Pembahasan nomor tujuh belas. Diketahui sinus teta sama dengan tiga per lima di Kuadran Dua. Sisi samping adalah empat. Karena berada di Kuadran Dua, nilai kosinus bernilai minus empat per lima, dan tangen bernilai minus tiga per empat. Jumlahkan minus tiga per empat dengan minus empat per lima dengan menyamakan penyebut menjadi dua puluh. Hasilnya adalah minus lima belas dikurang enam belas per dua puluh, sama dengan minus tiga puluh satu per dua puluh. Kunci jawaban B.'
    }
  },
  {
    id: 18,
    categoryId: 'nilai_pembagian',
    questionText: 'Diketahui nilai cos θ = -5/13 dengan 180° < θ < 270° (Kuadran III). Nilai dari hasil kali fungsi pecahan csc θ · tan θ adalah...',
    spokenQuestionText: 'Nomor delapan belas. Diketahui nilai kosinus teta sama dengan minus lima per tiga belas pada Kuadran Tiga. Nilai dari hasil kali kosekan teta dikalikan tangen teta adalah...',
    stimulus: {
      type: 'cartesian_point',
      title: 'Sudut di Kuadran III',
      description: 'Di Kuadran III: cos θ < 0, sin θ < 0, tan θ > 0. csc θ · tan θ = (1/sin θ) · (sin θ/cos θ) = 1/cos θ = sec θ.',
      cartesian: {
        x: -5,
        y: -12,
        quadrant: 3,
        showAngleArc: true
      }
    },
    options: [
      {
        id: 'A',
        label: '13/5',
        spokenText: 'Pilihan A: positif tiga belas per lima'
      },
      {
        id: 'B',
        label: '-5/13',
        spokenText: 'Pilihan B: minus lima per tiga belas'
      },
      {
        id: 'C',
        label: '-13/5',
        spokenText: 'Pilihan C: minus tiga belas per lima'
      },
      {
        id: 'D',
        label: '-12/5',
        spokenText: 'Pilihan D: minus dua belas per lima'
      },
      {
        id: 'E',
        label: '5/12',
        spokenText: 'Pilihan E: lima per dua belas'
      }
    ],
    correctAnswer: 'C',
    explanation: {
      concept: 'Penyederhanaan Identitas Pembagian csc θ · tan θ = sec θ dan Evaluasi Nilai di Kuadran III.',
      steps: [
        'Cara Cepat (Analisis Identitas):',
        'csc θ · tan θ = (1 / sin θ) · (sin θ / cos θ) = 1 / cos θ = sec θ.',
        'Diketahui langsung dari soal bahwa cos θ = -5/13.',
        'Maka sec θ = 1 / (-5/13) = -13/5.',
        'Cara Perhitungan Sisi (Verifikasi):',
        'Di Kuadran III, x = -5, r = 13. Sisi y = -√(13² - (-5)²) = -√(169 - 25) = -12.',
        'sin θ = -12/13 → csc θ = -13/12.',
        'tan θ = -12 / -5 = 12/5.',
        'csc θ · tan θ = (-13/12) · (12/5) = -13/5.'
      ],
      mathematicalReason: 'Faktor sin θ pada pembilang tangen dan penyebut kosekan saling membagi habis, menyisakan sec θ = 1/cos θ = -13/5.',
      wrongOptionsExplanation: 'Pilihan A salah tanda (lupa tanda minus pada Kuadran III). Pilihan B adalah cos θ bukan kebalikannya. Pilihan D adalah nilai tan θ negatif.',
      proTip: 'Sebelum menghitung sisi segitiga, sederhanakan ekspresi secara aljabar terlebih dahulu! csc θ · tan θ = sec θ.',
      conclusion: 'Nilai dari csc θ · tan θ adalah -13/5 (Pilihan C).',
      ttsExplanationScript: 'Pembahasan nomor delapan belas. Kosekan teta dikali tangen teta dapat disederhanakan dengan identitas aljabar: satu per sinus teta dikali sinus teta per kosinus teta sama dengan satu per kosinus teta, atau sekan teta. Karena kosinus teta diketahui minus lima per tiga belas, maka sekan teta adalah kebalikannya, yaitu minus tiga belas per lima. Kunci jawaban C.'
    }
  },
  {
    id: 19,
    categoryId: 'nilai_pembagian',
    questionText: 'Perhatikan diagram sudut istimewa pada segitiga siku-siku 30°-60°-90° di stimulus. Nilai eksak dari bentuk pembagian pecahan (sin 60° + tan 30°) / cos 30° adalah...',
    spokenQuestionText: 'Nomor sembilan belas. Perhatikan diagram sudut istimewa pada stimulus. Nilai eksak dari bentuk pembagian pecahan kurung buka sinus enam puluh derajat ditambah tangen tiga puluh derajat kurung tutup dibagi kosinus tiga puluh derajat adalah...',
    stimulus: {
      type: 'triangle_diagram',
      title: 'Segitiga Siku-Siku Sudut Istimewa 30° - 60°',
      description: 'Panjang sisi segitiga: sisi depan 30° = 1, sisi samping 30° = √3, sisi miring = 2.',
      triangle: {
        angleThetaPosition: 'bottom-left',
        sideOpposite: { length: '1', label: '1' },
        sideAdjacent: { length: '√3', label: '√3' },
        sideHypotenuse: { length: '2', label: '2' },
        showRightAngleMark: true
      }
    },
    options: [
      {
        id: 'A',
        label: '4/3',
        spokenText: 'Pilihan A: empat per tiga'
      },
      {
        id: 'B',
        label: '√3',
        spokenText: 'Pilihan B: akar tiga'
      },
      {
        id: 'C',
        label: '7/6',
        spokenText: 'Pilihan C: tujuh per enam'
      },
      {
        id: 'D',
        label: '5/3',
        spokenText: 'Pilihan D: lima per tiga'
      },
      {
        id: 'E',
        label: '2',
        spokenText: 'Pilihan E: dua'
      }
    ],
    correctAnswer: 'D',
    explanation: {
      concept: 'Nilai Eksak Perbandingan Sudut Istimewa Trigonometri (30° dan 60°) serta Operasi Pecahan Akar.',
      steps: [
        'Langkah 1: Tuliskan nilai eksak sudut istimewa:',
        '• sin 60° = √3 / 2',
        '• tan 30° = 1 / √3 = √3 / 3',
        '• cos 30° = √3 / 2',
        'Langkah 2: Sederhanakan pembilang:',
        'sin 60° + tan 30° = (√3 / 2) + (√3 / 3) = √3 (1/2 + 1/3) = √3 (3/6 + 2/6) = 5√3 / 6.',
        'Langkah 3: Bagi pembilang dengan penyebut cos 30°:',
        '[(5√3 / 6)] / [√3 / 2] = (5√3 / 6) × (2 / √3).',
        'Langkah 4: Faktor √3 saling membagi habis: (5 / 6) × 2 = 10 / 6 = 5 / 3.'
      ],
      mathematicalReason: 'Pecahan pembilang 5√3/6 dikalikan dengan kebalikan penyebut 2/√3 menghasilkan pembatalan faktor akar √3 dan penyederhanaan 10/6 menjadi 5/3.',
      wrongOptionsExplanation: 'Pilihan A keliru dalam menyamakan penyebut pembilang. Pilihan B tidak membagi penyebut cos 30°. Pilihan C salah dalam pemfaktoran akar.',
      proTip: 'Bisa juga dipecah: (sin 60° / cos 30°) + (tan 30° / cos 30°). Karena sin 60° = cos 30°, bagian pertama bernilai 1! Lalu 1 + (1/√3)/(√3/2) = 1 + 2/3 = 5/3.',
      conclusion: 'Nilai eksak bentuk pembagian tersebut adalah 5/3 (Pilihan D).',
      ttsExplanationScript: 'Pembahasan nomor sembilan belas. Sinus enam puluh derajat adalah setengah akar tiga, tangen tiga puluh derajat adalah sepertiga akar tiga, dan kosinus tiga puluh derajat adalah setengah akar tiga. Jumlahkan pembilang menjadi lima per enam akar tiga. Bagi dengan setengah akar tiga pada penyebut. Faktor akar tiga saling membagi habis, dan lima per enam dikali dua menghasilkan sepuluh per enam, yang disederhanakan menjadi lima per tiga. Kunci jawaban D.'
    }
  },
  {
    id: 20,
    categoryId: 'nilai_pembagian',
    questionText: 'Suatu titik P(-7, 24) terletak pada bidang koordinat Kartesius. Sudut α dibentuk oleh sumbu X positif menuju ruas garis OP (berada di Kuadran II). Nilai dari perbandingan pembagian pecahan sin α / (1 + cos α) dalam bentuk pecahan paling sederhana adalah...',
    spokenQuestionText: 'Nomor dua puluh. Suatu titik P minus tujuh koma dua puluh empat terletak pada bidang koordinat Kartesius. Sudut alfa dibentuk oleh sumbu X positif menuju ruas garis OP di Kuadran Dua. Tentukan nilai perbandingan pecahan sinus alfa dibagi satu ditambah kosinus alfa dalam bentuk pecahan paling sederhana.',
    stimulus: {
      type: 'cartesian_point',
      title: 'Titik Koordinat P(-7, 24)',
      description: 'x = -7, y = 24. Jari-jari r = √((-7)² + 24²) = √(49 + 576) = √625 = 25.',
      cartesian: {
        x: -7,
        y: 24,
        quadrant: 2,
        showAngleArc: true
      }
    },
    options: [
      {
        id: 'A',
        label: '-4/3',
        spokenText: 'Pilihan A: minus empat per tiga'
      },
      {
        id: 'B',
        label: '3/4',
        spokenText: 'Pilihan B: positif tiga per empat'
      },
      {
        id: 'C',
        label: '-3/4',
        spokenText: 'Pilihan C: minus tiga per empat'
      },
      {
        id: 'D',
        label: '7/24',
        spokenText: 'Pilihan D: tujuh per dua puluh empat'
      },
      {
        id: 'E',
        label: '4/3',
        spokenText: 'Pilihan E: positif empat per tiga'
      }
    ],
    correctAnswer: 'E',
    explanation: {
      concept: 'Koordinat Kartesius Sudut Trigonometri, Tripel Pythagoras (7, 24, 25), dan Identitas Sudut Paruh tan(α/2) = sin α / (1 + cos α).',
      steps: [
        'Langkah 1: Hitung jarak titik P ke pusat O(0,0):',
        'r = √(x² + y²) = √((-7)² + 24²) = √(49 + 576) = √625 = 25.',
        'Langkah 2: Tentukan perbandingan trigonometri dasar:',
        '• sin α = y / r = 24 / 25.',
        '• cos α = x / r = -7 / 25.',
        'Langkah 3: Hitung penyebut 1 + cos α:',
        '1 + cos α = 1 + (-7/25) = 25/25 - 7/25 = 18/25.',
        'Langkah 4: Hitung nilai pecahan pembagian:',
        'sin α / (1 + cos α) = (24/25) / (18/25) = 24 / 18.',
        'Langkah 5: Sederhanakan dengan membagi pembilang dan penyebut dengan 6:',
        '24/18 = 4 / 3.'
      ],
      mathematicalReason: 'Penyebut 1 + cos α bernilai positif 18/25 dan pembilang sin α bernilai positif 24/25. Pembagian pecahan dengan penyebut sama menyisakan 24/18 = 4/3.',
      wrongOptionsExplanation: 'Pilihan A salah tanda (hasilnya bernilai positif karena pembilang dan penyebut keduanya bernilai positif di kuadran ini). Pilihan B adalah kebalikannya.',
      proTip: 'Bentuk sin α / (1 + cos α) adalah rumus identitas sudut paruh tan(α/2). Karena α berada di Kuadran II (90° < α < 180°), maka α/2 berada di Kuadran I (45° < α/2 < 90°), sehingga tan(α/2) WAJIB bernilai positif!',
      conclusion: 'Nilai perbandingan pecahan tersebut adalah 4/3 (Pilihan E).',
      ttsExplanationScript: 'Pembahasan nomor dua puluh. Jarak titik P ke pusat koordinat dihitung dengan tripel Pythagoras tujuh, dua puluh empat, dan dua puluh lima, sehingga r sama dengan dua puluh lima. Sinus alfa adalah dua puluh empat per dua puluh lima, dan kosinus alfa adalah minus tujuh per dua puluh lima. Satu ditambah kosinus alfa menghasilkan delapan belas per dua puluh lima. Dua puluh empat per dua puluh lima dibagi delapan belas per dua puluh lima sama dengan dua puluh empat per delapan belas, yang disederhanakan menjadi empat per tiga. Kunci jawaban E.'
    }
  }
];
