const en = {
  levels: {
    // Common labels
    levelScale: 'Level Scale',
    evaluationIndex: 'Evaluation Index by Level',
    level: 'Level',
    internalScore: 'Internal Score',
    cefrAlignment: 'CEFR Alignment',
    cambridgeYLE: 'Cambridge YLE',
    notes: 'Notes',
    score: 'Score',
    cambridge: 'Cambridge',
    communicationAbility: 'Communication Ability',
    creativityDev: 'Creativity Development',
    socialSkillsDev: 'Social Skills Development',
    thinkingSkillsDev: 'Thinking Skills Development',
    expressionDev: 'Expression Development',
    cognitiveDev: 'Cognitive Development',

    // Stage names
    beginnerStage: 'BEGINNER STAGE',
    intermediateStage: 'INTERMEDIATE STAGE',
    advancedStage: 'ADVANCED STAGE',

    // Level names in tables
    lowBeginner: 'Low Beginner',
    middleBeginner: 'Middle Beginner',
    highBeginner: 'High Beginner',
    lowIntermediate: 'Low Intermediate',
    middleIntermediate: 'Middle Intermediate',
    highIntermediate: 'High Intermediate',
    lowAdvance: 'Low Advance',
    highAdvance: 'High Advance',

    // Program titles
    kinderProgram: 'KINDER Program',
    juniorProgramA: 'JUNIOR Program Level A',
    juniorProgramB: 'JUNIOR Program Level B',
    juniorProgramC: 'JUNIOR Program Level C',
    adultProgram: 'ADULT Program',

    // Age badges
    kinderAge: '4 to 7 Years Old',
    juniorAAge: '8 to 11 Years Old',
    juniorBAge: '11 to 14 Years Old',
    juniorCAge: '14 & Above Years Old',
    adultAge: '18 Years Old and Above',

    // Kinder class names
    classElephant: 'CLASS ELEPHANT',
    beginnerFoundation: 'Beginner Foundation Stage',
    classWhale: 'CLASS WHALE',
    preJuniorPrep: 'Pre-Junior Preparation Stage',

    // Kinder level names
    k1Name: 'Early Explorer',
    k2Name: 'Growing Communicator',
    k3Name: 'Confident Speaker',
    k4Name: 'Junior Ready',

    // Kinder table notes
    k1Note: 'Pre-literacy stage (alphabet not established)',
    k2Note: 'Oral exposure stage, limited word production',
    k3Note: 'Can respond orally, limited reading ability',
    k4Note: 'Ready to enter structured Junior curriculum',
    notMeasurable: 'Not Measurable',

    // ===== KINDER K1 =====
    k1Comm: [
      'Responds to simple gestures, single words, or short phrases',
      'Can follow very basic instructions with teacher support',
    ],
    k1Creat: [
      'Participates in sensory play, music, and movement activities.',
      'Shows curiosity and interest in creative tasks',
    ],
    k1Social: [
      'Follows simple classroom rules with guidance',
      'Engages in group activities with teacher assistance',
    ],
    k1Think: [
      'Recognizes colors, basic shapes, and simple numbers (1\u201310)',
      'Explores cause-and-effect relationships through play',
    ],
    k1Express: [
      'Uses single words or short phrases to express needs (\u201cwater,\u201d \u201chelp\u201d)',
      'Responds to songs, chants, and simple role-play',
    ],
    k1Cog: [
      'Engages actively in sensory experiences',
      'Demonstrates emerging ability to match, sort, and identify objects',
    ],

    // ===== KINDER K2 =====
    k2Comm: [
      'Vocabulary: ~100\u2013300 words',
      'Can answer simple questions (\u201cWhat is this?\u201d) with 2\u20133 word phrases',
      'Begins to initiate basic interactions',
    ],
    k2Creat: [
      'Expresses ideas through drawing and guided storytelling',
      'Participates actively in music, rhythm, and movement activities',
    ],
    k2Social: [
      'Takes turns in activities',
      'Interacts with peers using simple English phrases',
    ],
    k2Think: [
      'Counts 1\u201320 with guidance',
      'Follows simple story sequences',
      'Demonstrates early problem-solving skills',
    ],
    k2Express: [
      'Uses short sentences to describe familiar objects or routines',
      'Participates in guided role-play (\u201cI like red,\u201d \u201cThis is my bag\u201d)',
    ],
    k2Cog: [
      'Improves attention span and memory of words',
      'Begins to recognize patterns and categories',
    ],

    // ===== KINDER K3 =====
    k3Comm: [
      'Vocabulary: ~300\u2013600 words',
      'Speaks in short complete sentences',
      'Understands basic classroom conversations and instructions',
    ],
    k3Creat: [
      'Creates simple stories with teacher support',
      'Engages in drama and role-play activities',
    ],
    k3Social: [
      'Demonstrates cooperation in group projects',
      'Interacts Shows empathy and emotional awareness',
      'Responds appropriately to social cues',
    ],
    k3Think: [
      'Solves simple addition/subtraction problems',
      'Retells short stories in sequence',
      'Demonstrates basic logical reasoning',
    ],
    k3Express: [
      'Expresses feelings, preferences, and experiences in short sentences',
      'Participates confidently in structured activities',
    ],
    k3Cog: [
      'Understands cause-and-effect relationships in simple contexts',
      'Recognizes and recalls learned vocabulary accurately',
    ],

    // ===== KINDER K4 =====
    k4Comm: [
      'Vocabulary: ~600\u20131,000 words',
      'Can ask and answer WH-questions',
      'Describes daily routines, simple experiences, and preferences',
    ],
    k4Creat: [
      'Independently creates stories, drawings, or short performances',
      'Expresses ideas clearly through multiple media (art, music, drama)',
    ],
    k4Social: [
      'Follows classroom rules independently',
      'Participates in peer discussions using English',
      'Demonstrates cooperative problem-solving',
    ],
    k4Think: [
      'Performs basic addition/subtraction confidently',
      'Identifies main ideas in short stories',
      'Begins to organize thoughts in logical sequences',
    ],
    k4Express: [
      'Uses full sentences with basic grammar to convey ideas',
      'Can present short \u201cShow & Tell\u201d or narratives',
    ],
    k4Cog: [
      'Retains and recalls vocabulary and concepts accurately',
      'Demonstrates readiness for structured Junior curriculum',
    ],

    // ===== JUNIOR A Levels =====
    jaL01: [
      'Vocabulary: ~100\u2013200 words',
      'Can say simple greetings and introduce themselves',
      'Recognizes common classroom words',
      'Responds to yes/no or choice questions with help from teacher or visuals',
    ],
    jaL02: [
      'Vocabulary: ~200\u2013400 words',
      'Can describe familiar objects and basic needs',
      'Participates in short dialogues (greetings, routines, preferences)',
      'Listening comprehension improves with repetition and support',
    ],
    jaL03: [
      'Vocabulary: ~400\u2013700 words',
      'Can construct short sentences using simple grammar (e.g., \u201cand\u201d, \u201cbut\u201d)',
      'Engages in brief conversations on familiar topics',
      'Can describe past experiences and immediate needs in simple terms',
    ],
    jaL04: [
      'Vocabulary: ~700\u20131,200 words',
      'Can ask and answer questions with more detail',
      'Can narrate short personal experiences',
      'Uses adjectives and simple verb tenses, minor mistakes acceptable',
    ],
    jaL05: [
      'Vocabulary: ~1,200\u20132,000 words',
      'Can read short stories and summarize key points',
      'Can write simple paragraphs',
      'Can explain familiar topics in more structured sentences',
    ],
    jaL06: [
      'Vocabulary: ~2,000\u20133,500 words',
      'Can discuss everyday topics with improved fluency',
      'Can write short essays with logical sequencing',
      'Can express opinions with supporting details',
    ],
    jaL07: [
      'Vocabulary: ~3,500\u20135,000 words',
      'Communicates clearly in conversation and simple academic tasks',
      'Can present arguments and participate in structured discussions',
      'Begins to understand idiomatic expressions',
    ],
    jaL08: [
      'Vocabulary: ~3,500\u20135,000 words',
      'Communicates confidently in conversation and academic tasks',
      'Can write coherent essays',
      'Understands idiomatic expressions and nuanced meanings',
    ],

    // ===== JUNIOR B Levels =====
    jbL01: [
      'Vocabulary: ~300\u2013500 words',
      'Can introduce themselves with short sentences (name, age, school, interests)',
      'Can ask and answer simple WH-questions (who, what, where)',
      'Understands basic classroom instructions without visual support',
    ],
    jbL02: [
      'Vocabulary: ~500\u2013800 words',
      'Can describe daily routines and school life in short sentences',
      'Can participate in short role-plays (shopping, ordering food, asking directions)',
      'Can understand short conversations with reduced teacher support',
    ],
    jbL03: [
      'Vocabulary: ~800\u20131,200 words',
      'Can combine sentences using basic connectors (and, but, because, so)',
      'Can describe past events and future plans using simple tenses',
      'Can write short paragraphs about familiar topics',
    ],
    jbL04: [
      'Vocabulary: ~1,200\u20131,800 words',
      'Can express opinions with simple reasons',
      'Can narrate personal experiences with logical sequence',
      'Can read short articles and identify main ideas',
    ],
    jbL05: [
      'Vocabulary: ~1,800\u20132,500 words',
      'Can participate in group discussions on familiar academic topics',
      'Can write multi-paragraph compositions',
      'Can compare and contrast ideas using structured sentences',
    ],
    jbL06: [
      'Vocabulary: ~2,500\u20134,000 words',
      'Can explain abstract topics (friendship, success, environment, technology)',
      'Can support opinions with examples and evidence',
      'Can understand longer texts and summarize key arguments',
      'Can write structured essays with introduction, body, and conclusion',
    ],
    jbL07: [
      'Vocabulary: ~4,000\u20136,000 words',
      'Can engage in debates and structured discussions',
      'Can analyze problems and suggest solutions',
      'Understands figurative language and common idioms',
      'Can write persuasive and argumentative essays',
    ],
    jbL08: [
      'Vocabulary: ~5,000\u20138,000 words',
      'Communicates fluently and confidently in academic settings',
      'Can synthesize information from multiple sources',
      'Can critically evaluate ideas and present logical arguments',
      'Demonstrates advanced grammar accuracy and stylistic flexibility',
    ],

    // ===== JUNIOR C Levels =====
    jcL01: [
      'Vocabulary: ~400\u2013500 words',
      'Understands the alphabet and basic phonics',
      'Can use simple greetings and basic everyday expressions',
      'Can answer very simple questions using short phrases',
      'Can construct basic sentences with support',
    ],
    jcL02: [
      'Vocabulary: ~500\u20131,000 words',
      'Can participate in simple daily conversations',
      'Can express basic opinions using short sentences',
      'Is developing understanding of fundamental grammar structures',
      'Can handle predictable real-life situations (introductions, shopping, school topics)',
    ],
    jcL03: [
      'Vocabulary: ~1,000\u20131,500 words',
      'Can participate in conversations on familiar topics with growing confidence',
      'Can use slightly more complex sentence structures',
      'Can describe experiences, routines, and preferences',
      'May still make noticeable grammar and expression errors',
    ],
    jcL04: [
      'Vocabulary: ~1,500\u20132,500 words',
      'Can understand moderately complex texts',
      'Can express opinions on a variety of topics',
      'Can write short essays or personal narratives',
      'Demonstrates functional skills in reading, writing, listening, and speaking',
    ],
    jcL05: [
      'Vocabulary: ~2,500\u20134,000 words',
      'Communicates comfortably in everyday and academic contexts',
      'Can discuss more complex topics with logical reasoning',
      'Can present structured opinions and explanations',
      'Continues developing advanced grammar and vocabulary usage',
    ],
    jcL06: [
      'Vocabulary: ~4,000\u20136,000 words',
      'Understands nuances in American and British English',
      'Can read and write longer, more detailed texts',
      'Can engage in extended conversations across various topics',
      'Demonstrates increasing fluency and comprehension accuracy',
    ],
    jcL07: [
      'Vocabulary: ~6,000\u20138,000 words',
      'Uses advanced vocabulary and complex grammar structures',
      'Can participate in higher-level discussions and structured debates',
      'Can analyze, critique, and defend opinions',
      'Can comprehend and compose extended academic texts',
    ],
    jcL08: [
      'Vocabulary: 8,000+ words',
      'Demonstrates advanced accuracy and linguistic sophistication',
      'Can communicate effectively in specialized or academic fields',
      'Understands subtle nuances in American and British English',
      'Can engage in complex discussions, argumentation, and critical analysis',
    ],

    // ===== ADULT Levels =====
    adL01: [
      'Limited communication using very basic expressions',
      'Communicates mainly through single words or short phrases rather than full sentences',
      'Requires patient and cooperative conversation partners',
      'Interaction is possible only in very familiar situations',
    ],
    adL02: [
      'Understands and uses frequently used everyday expressions',
      'Can introduce oneself and others',
      'Can ask and answer simple personal questions (residence, belongings, acquaintances)',
      'Can interact when speech is slow, clear, and supportive',
    ],
    adL03: [
      'Understands common expressions related to daily life (family, shopping, interests, work)',
      'Can handle simple routine tasks requiring direct information exchange',
      'Can describe past experiences and immediate needs in simple terms',
      'Communicates in short but structured sentences',
    ],
    adL04: [
      'Understands and discusses familiar topics using connected sentences',
      'Can express opinions and provide basic explanations',
      'Can describe experiences, events, and plans',
      'Maintains conversations on topics of personal interest',
    ],
    adL05: [
      'Understands the main ideas of clear standard speech on work, study, or leisure topics',
      'Can handle most travel-related situations in English-speaking environments',
      'Can explain unfamiliar topics clearly and logically',
      'Can present advantages and disadvantages of different options',
    ],
    adL06: [
      'Speaks clearly, fluently, and naturally',
      'Understands complex discussions, including some technical topics',
      'Can communicate comfortably with native speakers',
      'Maintains detailed and structured discussions on abstract topics',
    ],
    adL07: [
      'Expresses ideas fluently and spontaneously with minimal hesitation',
      'Uses English flexibly and effectively for social, academic, and professional purposes',
      'Understands demanding and extended texts and implied meanings',
      'Produces clear, well-organized, and detailed communication on complex subjects',
    ],
    adL08: [
      'Understands virtually all spoken and written English',
      'Synthesizes information from multiple sources and presents it logically',
      'Speaks fluently with precise nuance, even in complex situations',
      'Demonstrates near-native level accuracy and sophistication',
    ],
    canNotMeasure: 'Can Not Measure',
  },
};

const ja = {
  levels: {
    levelScale: 'レベルスケール',
    evaluationIndex: 'レベル別評価指標',
    level: 'レベル',
    internalScore: '内部スコア',
    cefrAlignment: 'CEFR対応',
    cambridgeYLE: 'Cambridge YLE',
    notes: '備考',
    score: 'スコア',
    cambridge: 'Cambridge',
    communicationAbility: 'コミュニケーション能力',
    creativityDev: '創造性の発達',
    socialSkillsDev: '社会性の発達',
    thinkingSkillsDev: '思考力の発達',
    expressionDev: '表現力の発達',
    cognitiveDev: '認知能力の発達',

    beginnerStage: '初級段階',
    intermediateStage: '中級段階',
    advancedStage: '上級段階',

    lowBeginner: '初級下',
    middleBeginner: '初級中',
    highBeginner: '初級上',
    lowIntermediate: '中級下',
    middleIntermediate: '中級中',
    highIntermediate: '中級上',
    lowAdvance: '上級下',
    highAdvance: '上級上',

    kinderProgram: 'KINDERプログラム',
    juniorProgramA: 'JUNIORプログラム Level A',
    juniorProgramB: 'JUNIORプログラム Level B',
    juniorProgramC: 'JUNIORプログラム Level C',
    adultProgram: 'ADULTプログラム',

    kinderAge: '4歳〜7歳',
    juniorAAge: '8歳〜11歳',
    juniorBAge: '11歳〜14歳',
    juniorCAge: '14歳以上',
    adultAge: '18歳以上',

    classElephant: 'CLASS ELEPHANT',
    beginnerFoundation: '基礎段階',
    classWhale: 'CLASS WHALE',
    preJuniorPrep: 'ジュニア準備段階',

    k1Name: 'Early Explorer',
    k2Name: 'Growing Communicator',
    k3Name: 'Confident Speaker',
    k4Name: 'Junior Ready',

    k1Note: '読み書き前段階（アルファベット未習得）',
    k2Note: '口頭での接触段階、限定的な単語産出',
    k3Note: '口頭での応答が可能、読解力は限定的',
    k4Note: 'ジュニアカリキュラムへの準備完了',
    notMeasurable: '測定不可',

    k1Comm: [
      '簡単なジェスチャー、単語、短いフレーズに反応できる',
      '教師のサポートのもと、非常に基本的な指示に従える',
    ],
    k1Creat: [
      '感覚遊び、音楽、運動活動に参加する',
      '創造的な課題に好奇心と興味を示す',
    ],
    k1Social: [
      '指導のもとで簡単な教室のルールに従える',
      '教師の補助のもとでグループ活動に参加する',
    ],
    k1Think: [
      '色、基本的な形、簡単な数字（1〜10）を認識する',
      '遊びを通じて因果関係を探る',
    ],
    k1Express: [
      '単語や短いフレーズでニーズを表現する（「水」「助けて」）',
      '歌、チャンツ、簡単なロールプレイに反応する',
    ],
    k1Cog: [
      '感覚体験に積極的に取り組む',
      '物のマッチング、分類、識別の初期能力を示す',
    ],

    k2Comm: [
      '語彙：約100〜300語',
      '簡単な質問（「これは何？」）に2〜3語のフレーズで答えられる',
      '基本的なやり取りを始めることができる',
    ],
    k2Creat: [
      '絵を描いたりガイド付きストーリーテリングでアイデアを表現する',
      '音楽、リズム、運動活動に積極的に参加する',
    ],
    k2Social: [
      '活動で順番を守る',
      '簡単な英語のフレーズを使って仲間と交流する',
    ],
    k2Think: [
      '指導のもとで1〜20まで数える',
      '簡単な物語の順序を追う',
      '初期的な問題解決能力を示す',
    ],
    k2Express: [
      '身近な物や日課を短い文で説明する',
      'ガイド付きロールプレイに参加する（「赤が好き」「これは私のかばん」）',
    ],
    k2Cog: [
      '注意力と単語の記憶力が向上する',
      'パターンとカテゴリーの認識を始める',
    ],

    k3Comm: [
      '語彙：約300〜600語',
      '短い完全な文で話す',
      '基本的な教室での会話や指示を理解する',
    ],
    k3Creat: [
      '教師のサポートで簡単な物語を作る',
      '演劇やロールプレイ活動に参加する',
    ],
    k3Social: [
      'グループプロジェクトで協力を示す',
      '共感と感情的な認識を示す',
      '社会的な合図に適切に反応する',
    ],
    k3Think: [
      '簡単な足し算・引き算の問題を解く',
      '短い物語を順番に再話する',
      '基本的な論理的推論を示す',
    ],
    k3Express: [
      '感情、好み、経験を短い文で表現する',
      '構造化された活動に自信を持って参加する',
    ],
    k3Cog: [
      '簡単な文脈で因果関係を理解する',
      '学んだ語彙を正確に認識し想起する',
    ],

    k4Comm: [
      '語彙：約600〜1,000語',
      'WH疑問文に質問し答えられる',
      '日課、簡単な経験、好みを説明する',
    ],
    k4Creat: [
      '物語、絵、短いパフォーマンスを自主的に作成する',
      '複数のメディア（美術、音楽、演劇）を通じてアイデアを明確に表現する',
    ],
    k4Social: [
      '教室のルールを自主的に守る',
      '英語を使って仲間とのディスカッションに参加する',
      '協力的な問題解決を示す',
    ],
    k4Think: [
      '基本的な足し算・引き算を自信を持って行う',
      '短い物語の主旨を把握する',
      '論理的な順序で考えを整理し始める',
    ],
    k4Express: [
      '基本的な文法で完全な文を使ってアイデアを伝える',
      '短い「Show & Tell」や物語を発表できる',
    ],
    k4Cog: [
      '語彙と概念を正確に保持し想起する',
      'ジュニアカリキュラムへの準備ができていることを示す',
    ],

    jaL01: [
      '語彙：約100〜200語',
      '簡単な挨拶と自己紹介ができる',
      '一般的な教室の単語を認識する',
      '教師やビジュアルの助けを借りてはい/いいえまたは選択質問に答える',
    ],
    jaL02: [
      '語彙：約200〜400語',
      '身近な物や基本的なニーズを説明できる',
      '短い対話に参加する（挨拶、日課、好み）',
      '繰り返しとサポートでリスニング理解力が向上する',
    ],
    jaL03: [
      '語彙：約400〜700語',
      '簡単な文法を使って短い文を構成できる（例：「and」「but」）',
      '身近なトピックについて短い会話ができる',
      '過去の経験や当面のニーズを簡単な言葉で説明できる',
    ],
    jaL04: [
      '語彙：約700〜1,200語',
      'より詳細に質問し答えることができる',
      '短い個人的な経験を語れる',
      '形容詞や簡単な時制を使用し、軽微な間違いは許容範囲',
    ],
    jaL05: [
      '語彙：約1,200〜2,000語',
      '短い物語を読んで要点をまとめられる',
      '簡単な段落を書ける',
      '身近なトピックをより構造化された文で説明できる',
    ],
    jaL06: [
      '語彙：約2,000〜3,500語',
      '日常のトピックについて流暢さを向上させて話せる',
      '論理的な順序で短いエッセイを書ける',
      '裏付けとなる詳細とともに意見を述べられる',
    ],
    jaL07: [
      '語彙：約3,500〜5,000語',
      '会話や簡単な学術的課題で明確にコミュニケーションできる',
      '議論を展開し構造化されたディスカッションに参加できる',
      '慣用表現の理解を始める',
    ],
    jaL08: [
      '語彙：約3,500〜5,000語',
      '会話や学術的課題で自信を持ってコミュニケーションできる',
      '一貫性のあるエッセイを書ける',
      '慣用表現やニュアンスのある意味を理解する',
    ],

    jbL01: [
      '語彙：約300〜500語',
      '短い文で自己紹介できる（名前、年齢、学校、興味）',
      '簡単なWH疑問文に質問し答えられる（誰、何、どこ）',
      'ビジュアルサポートなしで基本的な教室の指示を理解する',
    ],
    jbL02: [
      '語彙：約500〜800語',
      '日課や学校生活を短い文で説明できる',
      '短いロールプレイに参加できる（買い物、食事の注文、道を尋ねる）',
      '教師のサポートが少なくても短い会話を理解できる',
    ],
    jbL03: [
      '語彙：約800〜1,200語',
      '基本的な接続詞を使って文を組み合わせられる（and, but, because, so）',
      '簡単な時制を使って過去の出来事や将来の計画を説明できる',
      '身近なトピックについて短い段落を書ける',
    ],
    jbL04: [
      '語彙：約1,200〜1,800語',
      '簡単な理由とともに意見を述べられる',
      '論理的な順序で個人的な経験を語れる',
      '短い記事を読んで主旨を把握できる',
    ],
    jbL05: [
      '語彙：約1,800〜2,500語',
      '身近な学術トピックについてグループディスカッションに参加できる',
      '複数段落の作文を書ける',
      '構造化された文を使ってアイデアを比較対照できる',
    ],
    jbL06: [
      '語彙：約2,500〜4,000語',
      '抽象的なトピックを説明できる（友情、成功、環境、テクノロジー）',
      '例や証拠で意見を裏付けられる',
      '長い文章を理解し主要な議論をまとめられる',
      '序論・本論・結論のある構造化されたエッセイを書ける',
    ],
    jbL07: [
      '語彙：約4,000〜6,000語',
      'ディベートや構造化されたディスカッションに参加できる',
      '問題を分析し解決策を提案できる',
      '比喩的な表現や一般的な慣用句を理解する',
      '説得的・論証的なエッセイを書ける',
    ],
    jbL08: [
      '語彙：約5,000〜8,000語',
      '学術的な場面で流暢かつ自信を持ってコミュニケーションできる',
      '複数のソースからの情報を統合できる',
      'アイデアを批判的に評価し論理的な議論を展開できる',
      '高度な文法の正確さと文体の柔軟性を示す',
    ],

    jcL01: [
      '語彙：約400〜500語',
      'アルファベットと基本的なフォニックスを理解する',
      '簡単な挨拶と基本的な日常表現を使える',
      '短いフレーズで非常に簡単な質問に答えられる',
      'サポートのもとで基本的な文を構成できる',
    ],
    jcL02: [
      '語彙：約500〜1,000語',
      '簡単な日常会話に参加できる',
      '短い文で基本的な意見を述べられる',
      '基本的な文法構造の理解を深めている',
      '予測可能な実生活の場面に対応できる（自己紹介、買い物、学校の話題）',
    ],
    jcL03: [
      '語彙：約1,000〜1,500語',
      '自信を持って身近なトピックの会話に参加できる',
      'やや複雑な文構造を使える',
      '経験、日課、好みを説明できる',
      '文法や表現に目立つ間違いがまだある場合がある',
    ],
    jcL04: [
      '語彙：約1,500〜2,500語',
      'やや複雑なテキストを理解できる',
      'さまざまなトピックについて意見を述べられる',
      '短いエッセイや個人的な物語を書ける',
      'リーディング、ライティング、リスニング、スピーキングの機能的スキルを示す',
    ],
    jcL05: [
      '語彙：約2,500〜4,000語',
      '日常的・学術的な場面で快適にコミュニケーションできる',
      '論理的な推論でより複雑なトピックを議論できる',
      '構造化された意見や説明を提示できる',
      '高度な文法と語彙の使用を継続的に発展させている',
    ],
    jcL06: [
      '語彙：約4,000〜6,000語',
      'アメリカ英語とイギリス英語のニュアンスを理解する',
      'より長く詳細なテキストを読み書きできる',
      'さまざまなトピックにわたる長い会話に参加できる',
      '流暢さと理解の正確さが向上している',
    ],
    jcL07: [
      '語彙：約6,000〜8,000語',
      '高度な語彙と複雑な文法構造を使用する',
      '高レベルのディスカッションや構造化されたディベートに参加できる',
      '意見を分析、批評、弁護できる',
      '長い学術テキストを理解し作成できる',
    ],
    jcL08: [
      '語彙：8,000語以上',
      '高度な正確さと言語的洗練を示す',
      '専門的または学術的な分野で効果的にコミュニケーションできる',
      'アメリカ英語とイギリス英語の微妙なニュアンスを理解する',
      '複雑なディスカッション、論証、批判的分析に参加できる',
    ],

    adL01: [
      '非常に基本的な表現を使った限定的なコミュニケーション',
      '完全な文ではなく、主に単語や短いフレーズでコミュニケーションする',
      '忍耐強く協力的な会話相手が必要',
      '非常に馴染みのある場面でのみやり取りが可能',
    ],
    adL02: [
      '頻繁に使われる日常表現を理解し使用する',
      '自分自身と他者を紹介できる',
      '簡単な個人的な質問に質問し答えられる（住所、持ち物、知り合い）',
      'ゆっくり、はっきり、サポートのある話し方であればやり取りができる',
    ],
    adL03: [
      '日常生活に関連する一般的な表現を理解する（家族、買い物、趣味、仕事）',
      '直接的な情報交換を必要とする簡単な日常業務に対応できる',
      '過去の経験や当面のニーズを簡単な言葉で説明できる',
      '短いが構造化された文でコミュニケーションする',
    ],
    adL04: [
      '接続された文を使って身近なトピックを理解し議論する',
      '意見を述べ基本的な説明を提供できる',
      '経験、出来事、計画を説明できる',
      '個人的な関心のあるトピックについて会話を維持する',
    ],
    adL05: [
      '仕事、学業、余暇のトピックに関する明確な標準的な話の主旨を理解する',
      '英語圏での旅行関連のほとんどの場面に対応できる',
      '馴染みのないトピックを明確かつ論理的に説明できる',
      'さまざまな選択肢の長所と短所を提示できる',
    ],
    adL06: [
      '明確、流暢、自然に話す',
      '一部の専門的なトピックを含む複雑なディスカッションを理解する',
      'ネイティブスピーカーと快適にコミュニケーションできる',
      '抽象的なトピックについて詳細かつ構造化されたディスカッションを維持する',
    ],
    adL07: [
      '最小限のためらいで流暢かつ自発的にアイデアを表現する',
      '社会的、学術的、職業的な目的で英語を柔軟かつ効果的に使用する',
      '高度で長いテキストや暗示的な意味を理解する',
      '複雑な主題について明確で組織的で詳細なコミュニケーションを生み出す',
    ],
    adL08: [
      '話された英語と書かれた英語のほぼすべてを理解する',
      '複数のソースからの情報を統合し論理的に提示する',
      '複雑な状況でも正確なニュアンスで流暢に話す',
      'ネイティブレベルに近い正確さと洗練さを示す',
    ],
    canNotMeasure: '測定不可',
  },
};

const zhTW = {
  levels: {
    levelScale: '級別量表',
    evaluationIndex: '各級別評估指標',
    level: '級別',
    internalScore: '內部分數',
    cefrAlignment: 'CEFR對應',
    cambridgeYLE: 'Cambridge YLE',
    notes: '備註',
    score: '分數',
    cambridge: 'Cambridge',
    communicationAbility: '溝通能力',
    creativityDev: '創造力發展',
    socialSkillsDev: '社交能力發展',
    thinkingSkillsDev: '思維能力發展',
    expressionDev: '表達能力發展',
    cognitiveDev: '認知能力發展',

    beginnerStage: '初級階段',
    intermediateStage: '中級階段',
    advancedStage: '高級階段',

    lowBeginner: '初級下',
    middleBeginner: '初級中',
    highBeginner: '初級上',
    lowIntermediate: '中級下',
    middleIntermediate: '中級中',
    highIntermediate: '中級上',
    lowAdvance: '高級下',
    highAdvance: '高級上',

    kinderProgram: 'KINDER 課程',
    juniorProgramA: 'JUNIOR 課程 Level A',
    juniorProgramB: 'JUNIOR 課程 Level B',
    juniorProgramC: 'JUNIOR 課程 Level C',
    adultProgram: 'ADULT 課程',

    kinderAge: '4至7歲',
    juniorAAge: '8至11歲',
    juniorBAge: '11至14歲',
    juniorCAge: '14歲以上',
    adultAge: '18歲以上',

    classElephant: 'CLASS ELEPHANT',
    beginnerFoundation: '基礎入門階段',
    classWhale: 'CLASS WHALE',
    preJuniorPrep: 'Junior預備階段',

    k1Name: 'Early Explorer',
    k2Name: 'Growing Communicator',
    k3Name: 'Confident Speaker',
    k4Name: 'Junior Ready',

    k1Note: '識字前階段（字母尚未建立）',
    k2Note: '口語接觸階段，單詞產出有限',
    k3Note: '能口頭回應，閱讀能力有限',
    k4Note: '準備進入結構化的Junior課程',
    notMeasurable: '無法測量',

    k1Comm: [
      '能對簡單的手勢、單詞或短語做出回應',
      '在教師支援下能遵循非常基本的指令',
    ],
    k1Creat: [
      '參與感官遊戲、音樂和肢體活動',
      '對創意任務表現出好奇心和興趣',
    ],
    k1Social: [
      '在指導下遵守簡單的課堂規則',
      '在教師協助下參與團體活動',
    ],
    k1Think: [
      '認識顏色、基本形狀和簡單數字（1-10）',
      '透過遊戲探索因果關係',
    ],
    k1Express: [
      '用單詞或短語表達需求（「水」、「幫忙」）',
      '對歌曲、韻律和簡單角色扮演做出回應',
    ],
    k1Cog: [
      '積極參與感官體驗',
      '展現配對、分類和識別物品的初步能力',
    ],

    k2Comm: [
      '詞彙量：約100-300個詞',
      '能用2-3個詞的短語回答簡單問題（「這是什麼？」）',
      '開始主動進行基本互動',
    ],
    k2Creat: [
      '透過繪畫和引導式故事講述表達想法',
      '積極參與音樂、節奏和肢體活動',
    ],
    k2Social: [
      '在活動中輪流',
      '使用簡單的英語短語與同儕互動',
    ],
    k2Think: [
      '在指導下數到1-20',
      '跟隨簡單的故事順序',
      '展現早期問題解決能力',
    ],
    k2Express: [
      '用短句描述熟悉的物品或日常活動',
      '參與引導式角色扮演（「我喜歡紅色」、「這是我的書包」）',
    ],
    k2Cog: [
      '注意力和單詞記憶力提高',
      '開始認識模式和類別',
    ],

    k3Comm: [
      '詞彙量：約300-600個詞',
      '能用短的完整句子說話',
      '理解基本的課堂對話和指令',
    ],
    k3Creat: [
      '在教師支援下創作簡單的故事',
      '參與戲劇和角色扮演活動',
    ],
    k3Social: [
      '在團體項目中展現合作能力',
      '表現出同理心和情感意識',
      '對社交信號做出適當回應',
    ],
    k3Think: [
      '解決簡單的加減法問題',
      '按順序複述短故事',
      '展現基本的邏輯推理能力',
    ],
    k3Express: [
      '用短句表達感受、偏好和經歷',
      '自信地參與結構化活動',
    ],
    k3Cog: [
      '在簡單的情境中理解因果關係',
      '準確地認識和回憶所學詞彙',
    ],

    k4Comm: [
      '詞彙量：約600-1,000個詞',
      '能提問和回答WH問句',
      '描述日常活動、簡單經歷和偏好',
    ],
    k4Creat: [
      '獨立創作故事、繪畫或短表演',
      '透過多種媒介（美術、音樂、戲劇）清楚表達想法',
    ],
    k4Social: [
      '自主遵守課堂規則',
      '用英語參與同儕討論',
      '展現合作式問題解決能力',
    ],
    k4Think: [
      '自信地進行基本加減法運算',
      '識別短故事中的主旨',
      '開始按邏輯順序組織思維',
    ],
    k4Express: [
      '使用基本文法的完整句子傳達想法',
      '能進行簡短的「Show & Tell」或故事敘述',
    ],
    k4Cog: [
      '準確地保留和回憶詞彙和概念',
      '展現進入結構化Junior課程的準備狀態',
    ],

    jaL01: [
      '詞彙量：約100-200個詞',
      '能進行簡單問候和自我介紹',
      '認識常見的課堂詞彙',
      '在教師或視覺輔助下回答是/否或選擇題',
    ],
    jaL02: [
      '詞彙量：約200-400個詞',
      '能描述熟悉的物品和基本需求',
      '參與簡短對話（問候、日常活動、偏好）',
      '通過反覆練習和支持，聽力理解能力提升',
    ],
    jaL03: [
      '詞彙量：約400-700個詞',
      '能使用簡單文法構成短句（如「and」、「but」）',
      '能就熟悉的話題進行簡短對話',
      '能用簡單的詞語描述過去的經歷和即時需求',
    ],
    jaL04: [
      '詞彙量：約700-1,200個詞',
      '能更詳細地提問和回答問題',
      '能講述簡短的個人經歷',
      '使用形容詞和簡單動詞時態，輕微錯誤可接受',
    ],
    jaL05: [
      '詞彙量：約1,200-2,000個詞',
      '能閱讀短篇故事並總結要點',
      '能寫簡單的段落',
      '能用更結構化的句子解釋熟悉的話題',
    ],
    jaL06: [
      '詞彙量：約2,000-3,500個詞',
      '能以提升的流利度討論日常話題',
      '能寫出有邏輯順序的短文',
      '能用支持性細節表達意見',
    ],
    jaL07: [
      '詞彙量：約3,500-5,000個詞',
      '在對話和簡單學術任務中能清楚溝通',
      '能提出論點並參與結構化討論',
      '開始理解慣用語表達',
    ],
    jaL08: [
      '詞彙量：約3,500-5,000個詞',
      '在對話和學術任務中能自信地溝通',
      '能寫連貫的文章',
      '理解慣用語表達和細微含義',
    ],

    jbL01: [
      '詞彙量：約300-500個詞',
      '能用短句自我介紹（姓名、年齡、學校、興趣）',
      '能提問和回答簡單的WH問句（誰、什麼、哪裡）',
      '無需視覺輔助即可理解基本課堂指令',
    ],
    jbL02: [
      '詞彙量：約500-800個詞',
      '能用短句描述日常活動和學校生活',
      '能參與簡短的角色扮演（購物、點餐、問路）',
      '在教師支援減少的情況下能理解簡短對話',
    ],
    jbL03: [
      '詞彙量：約800-1,200個詞',
      '能使用基本連接詞組合句子（and, but, because, so）',
      '能使用簡單時態描述過去事件和未來計劃',
      '能就熟悉的話題寫短段落',
    ],
    jbL04: [
      '詞彙量：約1,200-1,800個詞',
      '能用簡單的理由表達意見',
      '能按邏輯順序講述個人經歷',
      '能閱讀短文並識別主旨',
    ],
    jbL05: [
      '詞彙量：約1,800-2,500個詞',
      '能參與熟悉學術話題的小組討論',
      '能寫多段落作文',
      '能用結構化的句子比較和對比觀點',
    ],
    jbL06: [
      '詞彙量：約2,500-4,000個詞',
      '能解釋抽象話題（友誼、成功、環境、科技）',
      '能用例子和證據支持意見',
      '能理解較長的文章並總結主要論點',
      '能寫出有引言、正文和結論的結構化文章',
    ],
    jbL07: [
      '詞彙量：約4,000-6,000個詞',
      '能參與辯論和結構化討論',
      '能分析問題並提出解決方案',
      '理解比喻性語言和常見慣用語',
      '能寫說服性和論證性文章',
    ],
    jbL08: [
      '詞彙量：約5,000-8,000個詞',
      '在學術環境中流利且自信地溝通',
      '能綜合多個來源的資訊',
      '能批判性地評估想法並提出邏輯論點',
      '展現高級文法準確性和文體靈活性',
    ],

    jcL01: [
      '詞彙量：約400-500個詞',
      '理解字母和基本拼讀規則',
      '能使用簡單問候和基本日常用語',
      '能用短語回答非常簡單的問題',
      '在支援下能構成基本句子',
    ],
    jcL02: [
      '詞彙量：約500-1,000個詞',
      '能參與簡單的日常對話',
      '能用短句表達基本意見',
      '正在發展對基本文法結構的理解',
      '能處理可預測的現實生活情境（自我介紹、購物、學校話題）',
    ],
    jcL03: [
      '詞彙量：約1,000-1,500個詞',
      '能自信地參與熟悉話題的對話',
      '能使用稍微複雜的句子結構',
      '能描述經歷、日常活動和偏好',
      '文法和表達上可能仍有明顯錯誤',
    ],
    jcL04: [
      '詞彙量：約1,500-2,500個詞',
      '能理解中等複雜程度的文章',
      '能就各種話題表達意見',
      '能寫短文或個人敘事',
      '展現閱讀、寫作、聽力和口語的基本技能',
    ],
    jcL05: [
      '詞彙量：約2,500-4,000個詞',
      '在日常和學術場合中能舒適地溝通',
      '能用邏輯推理討論更複雜的話題',
      '能提出結構化的意見和解釋',
      '持續發展高級文法和詞彙使用',
    ],
    jcL06: [
      '詞彙量：約4,000-6,000個詞',
      '理解美式英語和英式英語的細微差別',
      '能讀寫更長、更詳細的文章',
      '能就各種話題進行長時間對話',
      '流利度和理解準確度持續提升',
    ],
    jcL07: [
      '詞彙量：約6,000-8,000個詞',
      '使用高級詞彙和複雜的文法結構',
      '能參與高層次討論和結構化辯論',
      '能分析、批評和捍衛意見',
      '能理解和撰寫長篇學術文章',
    ],
    jcL08: [
      '詞彙量：8,000+個詞',
      '展現高度的準確性和語言精煉',
      '能在專業或學術領域中有效溝通',
      '理解美式英語和英式英語的微妙差異',
      '能參與複雜的討論、論證和批判性分析',
    ],

    adL01: [
      '使用非常基本的表達進行有限的溝通',
      '主要通過單詞或短語而非完整句子進行溝通',
      '需要耐心且配合的對話夥伴',
      '只能在非常熟悉的情境中互動',
    ],
    adL02: [
      '理解和使用常用的日常表達',
      '能介紹自己和他人',
      '能提問和回答簡單的個人問題（住所、物品、熟人）',
      '在語速慢、清楚且有支持的情況下能互動',
    ],
    adL03: [
      '理解與日常生活相關的常見表達（家庭、購物、興趣、工作）',
      '能處理需要直接資訊交換的簡單日常事務',
      '能用簡單的詞語描述過去的經歷和即時需求',
      '用短但結構化的句子溝通',
    ],
    adL04: [
      '使用連接句理解和討論熟悉的話題',
      '能表達意見並提供基本解釋',
      '能描述經歷、事件和計劃',
      '能就個人興趣話題維持對話',
    ],
    adL05: [
      '理解關於工作、學習或休閒話題的清楚標準語言的主旨',
      '能處理英語環境中大多數旅行相關情境',
      '能清楚且有邏輯地解釋不熟悉的話題',
      '能呈現不同選項的優缺點',
    ],
    adL06: [
      '說話清楚、流利且自然',
      '理解包含一些專業話題的複雜討論',
      '能與母語者舒適地溝通',
      '能就抽象話題維持詳細且結構化的討論',
    ],
    adL07: [
      '以最少的猶豫流利且自發地表達想法',
      '在社交、學術和職業目的中靈活有效地使用英語',
      '理解高要求且長篇的文章和隱含意義',
      '對複雜主題產出清楚、有組織、詳細的溝通',
    ],
    adL08: [
      '理解幾乎所有口說和書面英語',
      '綜合多個來源的資訊並有邏輯地呈現',
      '即使在複雜情境中也能精確地流利表達',
      '展現接近母語水平的準確度和精煉度',
    ],
    canNotMeasure: '無法測量',
  },
};

const zhCN = {
  levels: {
    levelScale: '级别量表',
    evaluationIndex: '各级别评估指标',
    level: '级别',
    internalScore: '内部分数',
    cefrAlignment: 'CEFR对应',
    cambridgeYLE: 'Cambridge YLE',
    notes: '备注',
    score: '分数',
    cambridge: 'Cambridge',
    communicationAbility: '沟通能力',
    creativityDev: '创造力发展',
    socialSkillsDev: '社交能力发展',
    thinkingSkillsDev: '思维能力发展',
    expressionDev: '表达能力发展',
    cognitiveDev: '认知能力发展',

    beginnerStage: '初级阶段',
    intermediateStage: '中级阶段',
    advancedStage: '高级阶段',

    lowBeginner: '初级下',
    middleBeginner: '初级中',
    highBeginner: '初级上',
    lowIntermediate: '中级下',
    middleIntermediate: '中级中',
    highIntermediate: '中级上',
    lowAdvance: '高级下',
    highAdvance: '高级上',

    kinderProgram: 'KINDER 课程',
    juniorProgramA: 'JUNIOR 课程 Level A',
    juniorProgramB: 'JUNIOR 课程 Level B',
    juniorProgramC: 'JUNIOR 课程 Level C',
    adultProgram: 'ADULT 课程',

    kinderAge: '4至7岁',
    juniorAAge: '8至11岁',
    juniorBAge: '11至14岁',
    juniorCAge: '14岁以上',
    adultAge: '18岁以上',

    classElephant: 'CLASS ELEPHANT',
    beginnerFoundation: '基础入门阶段',
    classWhale: 'CLASS WHALE',
    preJuniorPrep: 'Junior预备阶段',

    k1Name: 'Early Explorer',
    k2Name: 'Growing Communicator',
    k3Name: 'Confident Speaker',
    k4Name: 'Junior Ready',

    k1Note: '识字前阶段（字母尚未建立）',
    k2Note: '口语接触阶段，单词产出有限',
    k3Note: '能口头回应，阅读能力有限',
    k4Note: '准备进入结构化的Junior课程',
    notMeasurable: '无法测量',

    k1Comm: [
      '能对简单的手势、单词或短语做出回应',
      '在教师支持下能遵循非常基本的指令',
    ],
    k1Creat: [
      '参与感官游戏、音乐和肢体活动',
      '对创意任务表现出好奇心和兴趣',
    ],
    k1Social: [
      '在指导下遵守简单的课堂规则',
      '在教师协助下参与团体活动',
    ],
    k1Think: [
      '认识颜色、基本形状和简单数字（1-10）',
      '通过游戏探索因果关系',
    ],
    k1Express: [
      '用单词或短语表达需求（"水"、"帮忙"）',
      '对歌曲、韵律和简单角色扮演做出回应',
    ],
    k1Cog: [
      '积极参与感官体验',
      '展现配对、分类和识别物品的初步能力',
    ],

    k2Comm: [
      '词汇量：约100-300个词',
      '能用2-3个词的短语回答简单问题（"这是什么？"）',
      '开始主动进行基本互动',
    ],
    k2Creat: [
      '通过绘画和引导式故事讲述表达想法',
      '积极参与音乐、节奏和肢体活动',
    ],
    k2Social: [
      '在活动中轮流',
      '使用简单的英语短语与同伴互动',
    ],
    k2Think: [
      '在指导下数到1-20',
      '跟随简单的故事顺序',
      '展现早期问题解决能力',
    ],
    k2Express: [
      '用短句描述熟悉的物品或日常活动',
      '参与引导式角色扮演（"我喜欢红色"、"这是我的书包"）',
    ],
    k2Cog: [
      '注意力和单词记忆力提高',
      '开始认识模式和类别',
    ],

    k3Comm: [
      '词汇量：约300-600个词',
      '能用短的完整句子说话',
      '理解基本的课堂对话和指令',
    ],
    k3Creat: [
      '在教师支持下创作简单的故事',
      '参与戏剧和角色扮演活动',
    ],
    k3Social: [
      '在团体项目中展现合作能力',
      '表现出同理心和情感意识',
      '对社交信号做出适当回应',
    ],
    k3Think: [
      '解决简单的加减法问题',
      '按顺序复述短故事',
      '展现基本的逻辑推理能力',
    ],
    k3Express: [
      '用短句表达感受、偏好和经历',
      '自信地参与结构化活动',
    ],
    k3Cog: [
      '在简单的情境中理解因果关系',
      '准确地认识和回忆所学词汇',
    ],

    k4Comm: [
      '词汇量：约600-1,000个词',
      '能提问和回答WH问句',
      '描述日常活动、简单经历和偏好',
    ],
    k4Creat: [
      '独立创作故事、绘画或短表演',
      '通过多种媒介（美术、音乐、戏剧）清楚表达想法',
    ],
    k4Social: [
      '自主遵守课堂规则',
      '用英语参与同伴讨论',
      '展现合作式问题解决能力',
    ],
    k4Think: [
      '自信地进行基本加减法运算',
      '识别短故事中的主旨',
      '开始按逻辑顺序组织思维',
    ],
    k4Express: [
      '使用基本语法的完整句子传达想法',
      '能进行简短的"Show & Tell"或故事叙述',
    ],
    k4Cog: [
      '准确地保留和回忆词汇和概念',
      '展现进入结构化Junior课程的准备状态',
    ],

    jaL01: [
      '词汇量：约100-200个词',
      '能进行简单问候和自我介绍',
      '认识常见的课堂词汇',
      '在教师或视觉辅助下回答是/否或选择题',
    ],
    jaL02: [
      '词汇量：约200-400个词',
      '能描述熟悉的物品和基本需求',
      '参与简短对话（问候、日常活动、偏好）',
      '通过反复练习和支持，听力理解能力提升',
    ],
    jaL03: [
      '词汇量：约400-700个词',
      '能使用简单语法构成短句（如"and"、"but"）',
      '能就熟悉的话题进行简短对话',
      '能用简单的词语描述过去的经历和即时需求',
    ],
    jaL04: [
      '词汇量：约700-1,200个词',
      '能更详细地提问和回答问题',
      '能讲述简短的个人经历',
      '使用形容词和简单动词时态，轻微错误可接受',
    ],
    jaL05: [
      '词汇量：约1,200-2,000个词',
      '能阅读短篇故事并总结要点',
      '能写简单的段落',
      '能用更结构化的句子解释熟悉的话题',
    ],
    jaL06: [
      '词汇量：约2,000-3,500个词',
      '能以提升的流利度讨论日常话题',
      '能写出有逻辑顺序的短文',
      '能用支持性细节表达意见',
    ],
    jaL07: [
      '词汇量：约3,500-5,000个词',
      '在对话和简单学术任务中能清楚沟通',
      '能提出论点并参与结构化讨论',
      '开始理解惯用语表达',
    ],
    jaL08: [
      '词汇量：约3,500-5,000个词',
      '在对话和学术任务中能自信地沟通',
      '能写连贯的文章',
      '理解惯用语表达和细微含义',
    ],

    jbL01: [
      '词汇量：约300-500个词',
      '能用短句自我介绍（姓名、年龄、学校、兴趣）',
      '能提问和回答简单的WH问句（谁、什么、哪里）',
      '无需视觉辅助即可理解基本课堂指令',
    ],
    jbL02: [
      '词汇量：约500-800个词',
      '能用短句描述日常活动和学校生活',
      '能参与简短的角色扮演（购物、点餐、问路）',
      '在教师支持减少的情况下能理解简短对话',
    ],
    jbL03: [
      '词汇量：约800-1,200个词',
      '能使用基本连接词组合句子（and, but, because, so）',
      '能使用简单时态描述过去事件和未来计划',
      '能就熟悉的话题写短段落',
    ],
    jbL04: [
      '词汇量：约1,200-1,800个词',
      '能用简单的理由表达意见',
      '能按逻辑顺序讲述个人经历',
      '能阅读短文并识别主旨',
    ],
    jbL05: [
      '词汇量：约1,800-2,500个词',
      '能参与熟悉学术话题的小组讨论',
      '能写多段落作文',
      '能用结构化的句子比较和对比观点',
    ],
    jbL06: [
      '词汇量：约2,500-4,000个词',
      '能解释抽象话题（友谊、成功、环境、科技）',
      '能用例子和证据支持意见',
      '能理解较长的文章并总结主要论点',
      '能写出有引言、正文和结论的结构化文章',
    ],
    jbL07: [
      '词汇量：约4,000-6,000个词',
      '能参与辩论和结构化讨论',
      '能分析问题并提出解决方案',
      '理解比喻性语言和常见惯用语',
      '能写说服性和论证性文章',
    ],
    jbL08: [
      '词汇量：约5,000-8,000个词',
      '在学术环境中流利且自信地沟通',
      '能综合多个来源的信息',
      '能批判性地评估想法并提出逻辑论点',
      '展现高级语法准确性和文体灵活性',
    ],

    jcL01: [
      '词汇量：约400-500个词',
      '理解字母和基本拼读规则',
      '能使用简单问候和基本日常用语',
      '能用短语回答非常简单的问题',
      '在支持下能构成基本句子',
    ],
    jcL02: [
      '词汇量：约500-1,000个词',
      '能参与简单的日常对话',
      '能用短句表达基本意见',
      '正在发展对基本语法结构的理解',
      '能处理可预测的现实生活情境（自我介绍、购物、学校话题）',
    ],
    jcL03: [
      '词汇量：约1,000-1,500个词',
      '能自信地参与熟悉话题的对话',
      '能使用稍微复杂的句子结构',
      '能描述经历、日常活动和偏好',
      '语法和表达上可能仍有明显错误',
    ],
    jcL04: [
      '词汇量：约1,500-2,500个词',
      '能理解中等复杂程度的文章',
      '能就各种话题表达意见',
      '能写短文或个人叙事',
      '展现阅读、写作、听力和口语的基本技能',
    ],
    jcL05: [
      '词汇量：约2,500-4,000个词',
      '在日常和学术场合中能舒适地沟通',
      '能用逻辑推理讨论更复杂的话题',
      '能提出结构化的意见和解释',
      '持续发展高级语法和词汇使用',
    ],
    jcL06: [
      '词汇量：约4,000-6,000个词',
      '理解美式英语和英式英语的细微差别',
      '能读写更长、更详细的文章',
      '能就各种话题进行长时间对话',
      '流利度和理解准确度持续提升',
    ],
    jcL07: [
      '词汇量：约6,000-8,000个词',
      '使用高级词汇和复杂的语法结构',
      '能参与高层次讨论和结构化辩论',
      '能分析、批评和捍卫意见',
      '能理解和撰写长篇学术文章',
    ],
    jcL08: [
      '词汇量：8,000+个词',
      '展现高度的准确性和语言精炼',
      '能在专业或学术领域中有效沟通',
      '理解美式英语和英式英语的微妙差异',
      '能参与复杂的讨论、论证和批判性分析',
    ],

    adL01: [
      '使用非常基本的表达进行有限的沟通',
      '主要通过单词或短语而非完整句子进行沟通',
      '需要耐心且配合的对话伙伴',
      '只能在非常熟悉的情境中互动',
    ],
    adL02: [
      '理解和使用常用的日常表达',
      '能介绍自己和他人',
      '能提问和回答简单的个人问题（住所、物品、熟人）',
      '在语速慢、清楚且有支持的情况下能互动',
    ],
    adL03: [
      '理解与日常生活相关的常见表达（家庭、购物、兴趣、工作）',
      '能处理需要直接信息交换的简单日常事务',
      '能用简单的词语描述过去的经历和即时需求',
      '用短但结构化的句子沟通',
    ],
    adL04: [
      '使用连接句理解和讨论熟悉的话题',
      '能表达意见并提供基本解释',
      '能描述经历、事件和计划',
      '能就个人兴趣话题维持对话',
    ],
    adL05: [
      '理解关于工作、学习或休闲话题的清楚标准语言的主旨',
      '能处理英语环境中大多数旅行相关情境',
      '能清楚且有逻辑地解释不熟悉的话题',
      '能呈现不同选项的优缺点',
    ],
    adL06: [
      '说话清楚、流利且自然',
      '理解包含一些专业话题的复杂讨论',
      '能与母语者舒适地沟通',
      '能就抽象话题维持详细且结构化的讨论',
    ],
    adL07: [
      '以最少的犹豫流利且自发地表达想法',
      '在社交、学术和职业目的中灵活有效地使用英语',
      '理解高要求且长篇的文章和隐含意义',
      '对复杂主题产出清楚、有组织、详细的沟通',
    ],
    adL08: [
      '理解几乎所有口说和书面英语',
      '综合多个来源的信息并有逻辑地呈现',
      '即使在复杂情境中也能精确地流利表达',
      '展现接近母语水平的准确度和精炼度',
    ],
    canNotMeasure: '无法测量',
  },
};

const vi = {
  levels: {
    levelScale: 'Thang Cấp Độ',
    evaluationIndex: 'Chỉ Số Đánh Giá Theo Cấp Độ',
    level: 'Cấp độ',
    internalScore: 'Điểm Nội Bộ',
    cefrAlignment: 'Tương Ứng CEFR',
    cambridgeYLE: 'Cambridge YLE',
    notes: 'Ghi chú',
    score: 'Điểm',
    cambridge: 'Cambridge',
    communicationAbility: 'Năng Lực Giao Tiếp',
    creativityDev: 'Phát Triển Sáng Tạo',
    socialSkillsDev: 'Phát Triển Kỹ Năng Xã Hội',
    thinkingSkillsDev: 'Phát Triển Kỹ Năng Tư Duy',
    expressionDev: 'Phát Triển Khả Năng Biểu Đạt',
    cognitiveDev: 'Phát Triển Nhận Thức',

    beginnerStage: 'GIAI ĐOẠN SƠ CẤP',
    intermediateStage: 'GIAI ĐOẠN TRUNG CẤP',
    advancedStage: 'GIAI ĐOẠN NÂNG CAO',

    lowBeginner: 'Sơ cấp thấp',
    middleBeginner: 'Sơ cấp trung',
    highBeginner: 'Sơ cấp cao',
    lowIntermediate: 'Trung cấp thấp',
    middleIntermediate: 'Trung cấp trung',
    highIntermediate: 'Trung cấp cao',
    lowAdvance: 'Nâng cao thấp',
    highAdvance: 'Nâng cao cao',

    kinderProgram: 'Chương Trình KINDER',
    juniorProgramA: 'Chương Trình JUNIOR Level A',
    juniorProgramB: 'Chương Trình JUNIOR Level B',
    juniorProgramC: 'Chương Trình JUNIOR Level C',
    adultProgram: 'Chương Trình ADULT',

    kinderAge: '4 đến 7 tuổi',
    juniorAAge: '8 đến 11 tuổi',
    juniorBAge: '11 đến 14 tuổi',
    juniorCAge: '14 tuổi trở lên',
    adultAge: '18 tuổi trở lên',

    classElephant: 'CLASS ELEPHANT',
    beginnerFoundation: 'Giai Đoạn Nền Tảng',
    classWhale: 'CLASS WHALE',
    preJuniorPrep: 'Giai Đoạn Chuẩn Bị Junior',

    k1Name: 'Early Explorer',
    k2Name: 'Growing Communicator',
    k3Name: 'Confident Speaker',
    k4Name: 'Junior Ready',

    k1Note: 'Giai đoạn trước khi biết đọc viết (chưa nắm bảng chữ cái)',
    k2Note: 'Giai đoạn tiếp xúc nói, sản xuất từ vựng hạn chế',
    k3Note: 'Có thể phản hồi bằng lời nói, khả năng đọc hạn chế',
    k4Note: 'Sẵn sàng tham gia chương trình Junior có cấu trúc',
    notMeasurable: 'Không thể đo lường',

    k1Comm: [
      'Phản hồi với cử chỉ đơn giản, từ đơn hoặc cụm từ ngắn',
      'Có thể làm theo hướng dẫn rất cơ bản với sự hỗ trợ của giáo viên',
    ],
    k1Creat: [
      'Tham gia trò chơi giác quan, âm nhạc và hoạt động vận động',
      'Thể hiện sự tò mò và hứng thú với các nhiệm vụ sáng tạo',
    ],
    k1Social: [
      'Tuân thủ các quy tắc lớp học đơn giản với sự hướng dẫn',
      'Tham gia hoạt động nhóm với sự hỗ trợ của giáo viên',
    ],
    k1Think: [
      'Nhận biết màu sắc, hình dạng cơ bản và số đơn giản (1-10)',
      'Khám phá mối quan hệ nhân quả thông qua trò chơi',
    ],
    k1Express: [
      'Sử dụng từ đơn hoặc cụm từ ngắn để biểu đạt nhu cầu ("nước", "giúp")',
      'Phản hồi với bài hát, vần điệu và đóng vai đơn giản',
    ],
    k1Cog: [
      'Tích cực tham gia trải nghiệm giác quan',
      'Thể hiện khả năng ban đầu trong việc ghép đôi, phân loại và nhận diện đồ vật',
    ],

    k2Comm: [
      'Vốn từ vựng: khoảng 100-300 từ',
      'Có thể trả lời câu hỏi đơn giản ("Đây là gì?") bằng cụm 2-3 từ',
      'Bắt đầu chủ động tương tác cơ bản',
    ],
    k2Creat: [
      'Biểu đạt ý tưởng qua vẽ tranh và kể chuyện có hướng dẫn',
      'Tích cực tham gia hoạt động âm nhạc, nhịp điệu và vận động',
    ],
    k2Social: [
      'Chờ đến lượt trong các hoạt động',
      'Tương tác với bạn bè bằng cụm từ tiếng Anh đơn giản',
    ],
    k2Think: [
      'Đếm từ 1-20 với sự hướng dẫn',
      'Theo dõi trình tự câu chuyện đơn giản',
      'Thể hiện kỹ năng giải quyết vấn đề ban đầu',
    ],
    k2Express: [
      'Dùng câu ngắn mô tả đồ vật quen thuộc hoặc hoạt động hàng ngày',
      'Tham gia đóng vai có hướng dẫn ("Tôi thích màu đỏ", "Đây là cặp sách của tôi")',
    ],
    k2Cog: [
      'Cải thiện khả năng tập trung và ghi nhớ từ vựng',
      'Bắt đầu nhận biết các mô hình và phân loại',
    ],

    k3Comm: [
      'Vốn từ vựng: khoảng 300-600 từ',
      'Nói bằng câu ngắn hoàn chỉnh',
      'Hiểu các cuộc hội thoại và hướng dẫn cơ bản trong lớp',
    ],
    k3Creat: [
      'Tạo câu chuyện đơn giản với sự hỗ trợ của giáo viên',
      'Tham gia hoạt động kịch và đóng vai',
    ],
    k3Social: [
      'Thể hiện sự hợp tác trong dự án nhóm',
      'Thể hiện sự đồng cảm và nhận thức cảm xúc',
      'Phản hồi phù hợp với các tín hiệu xã hội',
    ],
    k3Think: [
      'Giải các bài toán cộng/trừ đơn giản',
      'Kể lại câu chuyện ngắn theo trình tự',
      'Thể hiện khả năng suy luận logic cơ bản',
    ],
    k3Express: [
      'Biểu đạt cảm xúc, sở thích và trải nghiệm bằng câu ngắn',
      'Tự tin tham gia các hoạt động có cấu trúc',
    ],
    k3Cog: [
      'Hiểu mối quan hệ nhân quả trong bối cảnh đơn giản',
      'Nhận biết và nhớ lại từ vựng đã học một cách chính xác',
    ],

    k4Comm: [
      'Vốn từ vựng: khoảng 600-1.000 từ',
      'Có thể hỏi và trả lời câu hỏi WH',
      'Mô tả hoạt động hàng ngày, trải nghiệm đơn giản và sở thích',
    ],
    k4Creat: [
      'Tự sáng tạo câu chuyện, bức vẽ hoặc biểu diễn ngắn',
      'Biểu đạt ý tưởng rõ ràng qua nhiều phương tiện (mỹ thuật, âm nhạc, kịch)',
    ],
    k4Social: [
      'Tự giác tuân thủ quy tắc lớp học',
      'Tham gia thảo luận với bạn bè bằng tiếng Anh',
      'Thể hiện kỹ năng giải quyết vấn đề hợp tác',
    ],
    k4Think: [
      'Tự tin thực hiện phép cộng/trừ cơ bản',
      'Xác định ý chính trong câu chuyện ngắn',
      'Bắt đầu sắp xếp suy nghĩ theo trình tự logic',
    ],
    k4Express: [
      'Sử dụng câu hoàn chỉnh với ngữ pháp cơ bản để truyền đạt ý tưởng',
      'Có thể trình bày "Show & Tell" ngắn hoặc kể chuyện',
    ],
    k4Cog: [
      'Ghi nhớ và nhớ lại từ vựng và khái niệm một cách chính xác',
      'Thể hiện sự sẵn sàng cho chương trình Junior có cấu trúc',
    ],

    jaL01: [
      'Vốn từ vựng: khoảng 100-200 từ',
      'Có thể chào hỏi đơn giản và tự giới thiệu',
      'Nhận biết các từ vựng phổ biến trong lớp',
      'Trả lời câu hỏi có/không hoặc câu hỏi lựa chọn với sự giúp đỡ của giáo viên hoặc hình ảnh',
    ],
    jaL02: [
      'Vốn từ vựng: khoảng 200-400 từ',
      'Có thể mô tả đồ vật quen thuộc và nhu cầu cơ bản',
      'Tham gia đối thoại ngắn (chào hỏi, thói quen, sở thích)',
      'Khả năng nghe hiểu cải thiện qua luyện tập và hỗ trợ',
    ],
    jaL03: [
      'Vốn từ vựng: khoảng 400-700 từ',
      'Có thể tạo câu ngắn sử dụng ngữ pháp đơn giản (ví dụ: "and", "but")',
      'Tham gia hội thoại ngắn về chủ đề quen thuộc',
      'Có thể mô tả trải nghiệm quá khứ và nhu cầu trước mắt bằng từ ngữ đơn giản',
    ],
    jaL04: [
      'Vốn từ vựng: khoảng 700-1.200 từ',
      'Có thể hỏi và trả lời câu hỏi chi tiết hơn',
      'Có thể kể lại trải nghiệm cá nhân ngắn',
      'Sử dụng tính từ và thì động từ đơn giản, lỗi nhỏ có thể chấp nhận',
    ],
    jaL05: [
      'Vốn từ vựng: khoảng 1.200-2.000 từ',
      'Có thể đọc truyện ngắn và tóm tắt ý chính',
      'Có thể viết đoạn văn đơn giản',
      'Có thể giải thích chủ đề quen thuộc bằng câu có cấu trúc hơn',
    ],
    jaL06: [
      'Vốn từ vựng: khoảng 2.000-3.500 từ',
      'Có thể thảo luận chủ đề hàng ngày với độ lưu loát được cải thiện',
      'Có thể viết bài luận ngắn có trình tự logic',
      'Có thể bày tỏ ý kiến với chi tiết hỗ trợ',
    ],
    jaL07: [
      'Vốn từ vựng: khoảng 3.500-5.000 từ',
      'Giao tiếp rõ ràng trong hội thoại và nhiệm vụ học thuật đơn giản',
      'Có thể trình bày lập luận và tham gia thảo luận có cấu trúc',
      'Bắt đầu hiểu các thành ngữ',
    ],
    jaL08: [
      'Vốn từ vựng: khoảng 3.500-5.000 từ',
      'Giao tiếp tự tin trong hội thoại và nhiệm vụ học thuật',
      'Có thể viết bài luận mạch lạc',
      'Hiểu thành ngữ và ý nghĩa sắc thái',
    ],

    jbL01: [
      'Vốn từ vựng: khoảng 300-500 từ',
      'Có thể tự giới thiệu bằng câu ngắn (tên, tuổi, trường, sở thích)',
      'Có thể hỏi và trả lời câu hỏi WH đơn giản (ai, cái gì, ở đâu)',
      'Hiểu hướng dẫn cơ bản trong lớp mà không cần hỗ trợ hình ảnh',
    ],
    jbL02: [
      'Vốn từ vựng: khoảng 500-800 từ',
      'Có thể mô tả hoạt động hàng ngày và cuộc sống học đường bằng câu ngắn',
      'Có thể tham gia đóng vai ngắn (mua sắm, gọi món, hỏi đường)',
      'Có thể hiểu hội thoại ngắn với ít sự hỗ trợ của giáo viên hơn',
    ],
    jbL03: [
      'Vốn từ vựng: khoảng 800-1.200 từ',
      'Có thể kết hợp câu bằng liên từ cơ bản (and, but, because, so)',
      'Có thể mô tả sự kiện quá khứ và kế hoạch tương lai bằng thì đơn giản',
      'Có thể viết đoạn văn ngắn về chủ đề quen thuộc',
    ],
    jbL04: [
      'Vốn từ vựng: khoảng 1.200-1.800 từ',
      'Có thể bày tỏ ý kiến với lý do đơn giản',
      'Có thể kể lại trải nghiệm cá nhân theo trình tự logic',
      'Có thể đọc bài viết ngắn và xác định ý chính',
    ],
    jbL05: [
      'Vốn từ vựng: khoảng 1.800-2.500 từ',
      'Có thể tham gia thảo luận nhóm về chủ đề học thuật quen thuộc',
      'Có thể viết bài luận nhiều đoạn',
      'Có thể so sánh và đối chiếu ý tưởng bằng câu có cấu trúc',
    ],
    jbL06: [
      'Vốn từ vựng: khoảng 2.500-4.000 từ',
      'Có thể giải thích chủ đề trừu tượng (tình bạn, thành công, môi trường, công nghệ)',
      'Có thể hỗ trợ ý kiến bằng ví dụ và bằng chứng',
      'Có thể hiểu văn bản dài hơn và tóm tắt các luận điểm chính',
      'Có thể viết bài luận có cấu trúc với mở bài, thân bài và kết luận',
    ],
    jbL07: [
      'Vốn từ vựng: khoảng 4.000-6.000 từ',
      'Có thể tham gia tranh luận và thảo luận có cấu trúc',
      'Có thể phân tích vấn đề và đề xuất giải pháp',
      'Hiểu ngôn ngữ ẩn dụ và thành ngữ phổ biến',
      'Có thể viết bài luận thuyết phục và luận chứng',
    ],
    jbL08: [
      'Vốn từ vựng: khoảng 5.000-8.000 từ',
      'Giao tiếp lưu loát và tự tin trong môi trường học thuật',
      'Có thể tổng hợp thông tin từ nhiều nguồn',
      'Có thể đánh giá phản biện ý tưởng và trình bày lập luận logic',
      'Thể hiện độ chính xác ngữ pháp nâng cao và linh hoạt về văn phong',
    ],

    jcL01: [
      'Vốn từ vựng: khoảng 400-500 từ',
      'Hiểu bảng chữ cái và phát âm cơ bản',
      'Có thể sử dụng lời chào đơn giản và biểu đạt hàng ngày cơ bản',
      'Có thể trả lời câu hỏi rất đơn giản bằng cụm từ ngắn',
      'Có thể tạo câu cơ bản với sự hỗ trợ',
    ],
    jcL02: [
      'Vốn từ vựng: khoảng 500-1.000 từ',
      'Có thể tham gia hội thoại hàng ngày đơn giản',
      'Có thể bày tỏ ý kiến cơ bản bằng câu ngắn',
      'Đang phát triển hiểu biết về cấu trúc ngữ pháp cơ bản',
      'Có thể xử lý tình huống thực tế có thể dự đoán (giới thiệu, mua sắm, chủ đề trường học)',
    ],
    jcL03: [
      'Vốn từ vựng: khoảng 1.000-1.500 từ',
      'Có thể tự tin tham gia hội thoại về chủ đề quen thuộc',
      'Có thể sử dụng cấu trúc câu phức tạp hơn một chút',
      'Có thể mô tả trải nghiệm, thói quen và sở thích',
      'Vẫn có thể mắc lỗi ngữ pháp và biểu đạt đáng chú ý',
    ],
    jcL04: [
      'Vốn từ vựng: khoảng 1.500-2.500 từ',
      'Có thể hiểu văn bản có độ phức tạp vừa phải',
      'Có thể bày tỏ ý kiến về nhiều chủ đề',
      'Có thể viết bài luận ngắn hoặc tự sự cá nhân',
      'Thể hiện kỹ năng chức năng trong đọc, viết, nghe và nói',
    ],
    jcL05: [
      'Vốn từ vựng: khoảng 2.500-4.000 từ',
      'Giao tiếp thoải mái trong bối cảnh hàng ngày và học thuật',
      'Có thể thảo luận chủ đề phức tạp hơn với lập luận logic',
      'Có thể trình bày ý kiến và giải thích có cấu trúc',
      'Tiếp tục phát triển ngữ pháp nâng cao và sử dụng từ vựng',
    ],
    jcL06: [
      'Vốn từ vựng: khoảng 4.000-6.000 từ',
      'Hiểu sắc thái trong tiếng Anh Mỹ và tiếng Anh Anh',
      'Có thể đọc và viết văn bản dài hơn, chi tiết hơn',
      'Có thể tham gia hội thoại kéo dài về nhiều chủ đề',
      'Độ lưu loát và chính xác trong hiểu biết ngày càng tăng',
    ],
    jcL07: [
      'Vốn từ vựng: khoảng 6.000-8.000 từ',
      'Sử dụng từ vựng nâng cao và cấu trúc ngữ pháp phức tạp',
      'Có thể tham gia thảo luận cấp cao và tranh luận có cấu trúc',
      'Có thể phân tích, phê bình và bảo vệ ý kiến',
      'Có thể hiểu và soạn thảo văn bản học thuật dài',
    ],
    jcL08: [
      'Vốn từ vựng: 8.000+ từ',
      'Thể hiện độ chính xác nâng cao và sự tinh tế về ngôn ngữ',
      'Có thể giao tiếp hiệu quả trong lĩnh vực chuyên môn hoặc học thuật',
      'Hiểu sắc thái tinh tế trong tiếng Anh Mỹ và tiếng Anh Anh',
      'Có thể tham gia thảo luận phức tạp, luận chứng và phân tích phản biện',
    ],

    adL01: [
      'Giao tiếp hạn chế bằng biểu đạt rất cơ bản',
      'Giao tiếp chủ yếu bằng từ đơn hoặc cụm từ ngắn thay vì câu hoàn chỉnh',
      'Cần đối tác hội thoại kiên nhẫn và hợp tác',
      'Chỉ có thể tương tác trong những tình huống rất quen thuộc',
    ],
    adL02: [
      'Hiểu và sử dụng các biểu đạt hàng ngày thường dùng',
      'Có thể giới thiệu bản thân và người khác',
      'Có thể hỏi và trả lời câu hỏi cá nhân đơn giản (nơi ở, đồ đạc, người quen)',
      'Có thể tương tác khi nói chậm, rõ ràng và có hỗ trợ',
    ],
    adL03: [
      'Hiểu các biểu đạt phổ biến liên quan đến cuộc sống hàng ngày (gia đình, mua sắm, sở thích, công việc)',
      'Có thể xử lý các công việc thường ngày đơn giản yêu cầu trao đổi thông tin trực tiếp',
      'Có thể mô tả trải nghiệm quá khứ và nhu cầu trước mắt bằng từ ngữ đơn giản',
      'Giao tiếp bằng câu ngắn nhưng có cấu trúc',
    ],
    adL04: [
      'Hiểu và thảo luận chủ đề quen thuộc bằng câu liên kết',
      'Có thể bày tỏ ý kiến và cung cấp giải thích cơ bản',
      'Có thể mô tả trải nghiệm, sự kiện và kế hoạch',
      'Duy trì hội thoại về chủ đề quan tâm cá nhân',
    ],
    adL05: [
      'Hiểu ý chính của bài phát biểu chuẩn rõ ràng về chủ đề công việc, học tập hoặc giải trí',
      'Có thể xử lý hầu hết tình huống liên quan đến du lịch trong môi trường nói tiếng Anh',
      'Có thể giải thích chủ đề không quen thuộc một cách rõ ràng và logic',
      'Có thể trình bày ưu điểm và nhược điểm của các lựa chọn khác nhau',
    ],
    adL06: [
      'Nói rõ ràng, lưu loát và tự nhiên',
      'Hiểu các cuộc thảo luận phức tạp, bao gồm một số chủ đề chuyên môn',
      'Có thể giao tiếp thoải mái với người bản ngữ',
      'Duy trì các cuộc thảo luận chi tiết và có cấu trúc về chủ đề trừu tượng',
    ],
    adL07: [
      'Biểu đạt ý tưởng lưu loát và tự phát với tối thiểu do dự',
      'Sử dụng tiếng Anh linh hoạt và hiệu quả cho mục đích xã hội, học thuật và nghề nghiệp',
      'Hiểu các văn bản dài và đòi hỏi cao cũng như ý nghĩa ngụ ý',
      'Tạo ra giao tiếp rõ ràng, có tổ chức và chi tiết về các chủ đề phức tạp',
    ],
    adL08: [
      'Hiểu hầu như tất cả tiếng Anh nói và viết',
      'Tổng hợp thông tin từ nhiều nguồn và trình bày logic',
      'Nói lưu loát với sắc thái chính xác, ngay cả trong tình huống phức tạp',
      'Thể hiện độ chính xác và tinh tế gần như người bản ngữ',
    ],
    canNotMeasure: 'Không Thể Đo Lường',
  },
};

export { en, ja, zhTW, zhCN, vi };
