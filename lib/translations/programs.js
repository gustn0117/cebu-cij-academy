// Programs section translations - feature titles, descriptions, and schedule class names
// Keys: esl, ielts, toeic, business — each with features[] and schedule[]

const en = {
  esl: {
    features: [
      { title: 'One-on-One Classes', desc: '4 hours of personalized instruction with a dedicated teacher tailored to your specific needs and goals.' },
      { title: 'Group Classes', desc: '2 hours of interactive group sessions to practice communication skills with fellow students.' },
      { title: 'Self-Study', desc: '2 hours of guided self-study time with access to our learning resources and library.' },
      { title: 'Optional Classes', desc: 'Additional elective classes including pronunciation, vocabulary building, and grammar workshops.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Class (Speaking)' },
      { time: '09:00 - 09:50', class: '1:1 Class (Listening)' },
      { time: '10:00 - 10:50', class: '1:1 Class (Reading)' },
      { time: '11:00 - 11:50', class: '1:1 Class (Writing)' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Class' },
      { time: '14:00 - 14:50', class: 'Group Class' },
      { time: '15:00 - 16:50', class: 'Self Study / Optional Class' },
    ],
  },
  ielts: {
    features: [
      { title: 'IELTS Speaking', desc: 'Practice with mock interviews and feedback to improve your speaking band score.' },
      { title: 'IELTS Writing', desc: 'Task 1 and Task 2 intensive training with detailed feedback on every essay.' },
      { title: 'IELTS Reading', desc: 'Strategies and techniques to handle various reading passage types efficiently.' },
      { title: 'IELTS Listening', desc: 'Focused listening practice with real exam materials and timed exercises.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 IELTS Speaking' },
      { time: '09:00 - 09:50', class: '1:1 IELTS Writing' },
      { time: '10:00 - 10:50', class: '1:1 IELTS Reading' },
      { time: '11:00 - 11:50', class: '1:1 IELTS Listening' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group IELTS Practice' },
      { time: '14:00 - 14:50', class: 'Mock Test / Review' },
      { time: '15:00 - 16:50', class: 'Self Study' },
    ],
  },
  toeic: {
    features: [
      { title: 'Listening Comprehension', desc: 'Master all parts of the TOEIC listening section with targeted practice materials.' },
      { title: 'Reading Comprehension', desc: 'Improve speed and accuracy for the TOEIC reading section through strategy-based training.' },
      { title: 'Business Vocabulary', desc: 'Build essential business English vocabulary commonly tested in TOEIC examinations.' },
      { title: 'Practice Tests', desc: 'Regular full-length practice tests with detailed score analysis and improvement plans.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 TOEIC Listening' },
      { time: '09:00 - 09:50', class: '1:1 TOEIC Reading' },
      { time: '10:00 - 10:50', class: '1:1 TOEIC Grammar' },
      { time: '11:00 - 11:50', class: '1:1 TOEIC Vocabulary' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Practice' },
      { time: '14:00 - 14:50', class: 'Mock Test' },
      { time: '15:00 - 16:50', class: 'Self Study / Review' },
    ],
  },
  business: {
    features: [
      { title: 'Business Communication', desc: 'Develop professional communication skills for meetings, emails, and presentations.' },
      { title: 'Negotiation Skills', desc: 'Learn the language and strategies of effective business negotiation in English.' },
      { title: 'Presentation Skills', desc: 'Master the art of delivering clear and impactful business presentations.' },
      { title: 'Industry-Specific English', desc: 'Customized vocabulary and scenarios for your specific industry and role.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Business Communication' },
      { time: '09:00 - 09:50', class: '1:1 Business Writing' },
      { time: '10:00 - 10:50', class: '1:1 Presentation Skills' },
      { time: '11:00 - 11:50', class: '1:1 Negotiation English' },
      { time: '12:00 - 13:00', class: 'Lunch Break' },
      { time: '13:00 - 13:50', class: 'Group Discussion' },
      { time: '14:00 - 14:50', class: 'Case Study Workshop' },
      { time: '15:00 - 16:50', class: 'Self Study / Networking' },
    ],
  },
};

const ja = {
  esl: {
    features: [
      { title: 'マンツーマン授業', desc: '専任講師による4時間の個別指導。あなたのニーズと目標に合わせたカリキュラムです。' },
      { title: 'グループ授業', desc: '他の学生と一緒にコミュニケーションスキルを練習する2時間のグループセッション。' },
      { title: '自主学習', desc: '学習リソースとライブラリを活用した2時間のガイド付き自主学習時間。' },
      { title: '選択授業', desc: '発音、語彙力強化、文法ワークショップなどの追加選択クラス。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 授業（スピーキング）' },
      { time: '09:00 - 09:50', class: '1:1 授業（リスニング）' },
      { time: '10:00 - 10:50', class: '1:1 授業（リーディング）' },
      { time: '11:00 - 11:50', class: '1:1 授業（ライティング）' },
      { time: '12:00 - 13:00', class: '昼食' },
      { time: '13:00 - 13:50', class: 'グループ授業' },
      { time: '14:00 - 14:50', class: 'グループ授業' },
      { time: '15:00 - 16:50', class: '自主学習 / 選択授業' },
    ],
  },
  ielts: {
    features: [
      { title: 'IELTS スピーキング', desc: '模擬面接と個別フィードバックでスピーキングのバンドスコアを向上させます。' },
      { title: 'IELTS ライティング', desc: 'タスク1・タスク2の集中トレーニング。毎回のエッセイに詳細なフィードバックを提供。' },
      { title: 'IELTS リーディング', desc: '様々な読解問題の種類に効率的に対応するための戦略とテクニック。' },
      { title: 'IELTS リスニング', desc: '実際の試験素材と時間制限付き演習を用いた集中リスニング練習。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 IELTS スピーキング' },
      { time: '09:00 - 09:50', class: '1:1 IELTS ライティング' },
      { time: '10:00 - 10:50', class: '1:1 IELTS リーディング' },
      { time: '11:00 - 11:50', class: '1:1 IELTS リスニング' },
      { time: '12:00 - 13:00', class: '昼食' },
      { time: '13:00 - 13:50', class: 'グループ IELTS 演習' },
      { time: '14:00 - 14:50', class: '模擬テスト / 復習' },
      { time: '15:00 - 16:50', class: '自主学習' },
    ],
  },
  toeic: {
    features: [
      { title: 'リスニング読解', desc: 'TOEICリスニングセクション全パートを対象とした教材で攻略します。' },
      { title: 'リーディング読解', desc: '戦略的なトレーニングでTOEICリーディングセクションのスピードと正確性を向上。' },
      { title: 'ビジネス語彙', desc: 'TOEIC試験に頻出する必須ビジネス英語の語彙を構築。' },
      { title: '模擬テスト', desc: '定期的なフルレングスの模擬テストと詳細なスコア分析・改善プラン。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 TOEIC リスニング' },
      { time: '09:00 - 09:50', class: '1:1 TOEIC リーディング' },
      { time: '10:00 - 10:50', class: '1:1 TOEIC 文法' },
      { time: '11:00 - 11:50', class: '1:1 TOEIC 語彙' },
      { time: '12:00 - 13:00', class: '昼食' },
      { time: '13:00 - 13:50', class: 'グループ演習' },
      { time: '14:00 - 14:50', class: '模擬テスト' },
      { time: '15:00 - 16:50', class: '自主学習 / 復習' },
    ],
  },
  business: {
    features: [
      { title: 'ビジネスコミュニケーション', desc: '会議、メール、プレゼンテーションのためのプロフェッショナルなコミュニケーションスキルを育成。' },
      { title: '交渉スキル', desc: '英語でのビジネス交渉に必要な表現と戦略を学習。' },
      { title: 'プレゼンテーションスキル', desc: '明確でインパクトのあるビジネスプレゼンテーションの技術を習得。' },
      { title: '業界別英語', desc: 'お客様の業界と職務に合わせたカスタマイズされた語彙とシナリオ。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 ビジネスコミュニケーション' },
      { time: '09:00 - 09:50', class: '1:1 ビジネスライティング' },
      { time: '10:00 - 10:50', class: '1:1 プレゼンテーション' },
      { time: '11:00 - 11:50', class: '1:1 交渉英語' },
      { time: '12:00 - 13:00', class: '昼食' },
      { time: '13:00 - 13:50', class: 'グループディスカッション' },
      { time: '14:00 - 14:50', class: 'ケーススタディ' },
      { time: '15:00 - 16:50', class: '自主学習 / ネットワーキング' },
    ],
  },
};

const zhTW = {
  esl: {
    features: [
      { title: '一對一課程', desc: '4小時由專屬教師進行的個別指導，根據您的需求和目標量身定制。' },
      { title: '團體課程', desc: '2小時的互動團體課程，與其他學生一起練習溝通技巧。' },
      { title: '自習時間', desc: '2小時的引導式自習時間，可使用學習資源和圖書館。' },
      { title: '選修課程', desc: '額外的選修課程，包括發音、詞彙建構和文法工作坊。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 課程（口說）' },
      { time: '09:00 - 09:50', class: '1:1 課程（聽力）' },
      { time: '10:00 - 10:50', class: '1:1 課程（閱讀）' },
      { time: '11:00 - 11:50', class: '1:1 課程（寫作）' },
      { time: '12:00 - 13:00', class: '午餐時間' },
      { time: '13:00 - 13:50', class: '團體課程' },
      { time: '14:00 - 14:50', class: '團體課程' },
      { time: '15:00 - 16:50', class: '自習 / 選修課程' },
    ],
  },
  ielts: {
    features: [
      { title: 'IELTS 口說', desc: '透過模擬面試和個別回饋來提升口說成績。' },
      { title: 'IELTS 寫作', desc: 'Task 1和Task 2密集訓練，每篇作文都有詳細的回饋。' },
      { title: 'IELTS 閱讀', desc: '有效應對各類閱讀題型的策略與技巧。' },
      { title: 'IELTS 聽力', desc: '使用真實考試素材和計時練習進行專注的聽力訓練。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 IELTS 口說' },
      { time: '09:00 - 09:50', class: '1:1 IELTS 寫作' },
      { time: '10:00 - 10:50', class: '1:1 IELTS 閱讀' },
      { time: '11:00 - 11:50', class: '1:1 IELTS 聽力' },
      { time: '12:00 - 13:00', class: '午餐時間' },
      { time: '13:00 - 13:50', class: 'IELTS 團體練習' },
      { time: '14:00 - 14:50', class: '模擬考 / 複習' },
      { time: '15:00 - 16:50', class: '自習' },
    ],
  },
  toeic: {
    features: [
      { title: '聽力理解', desc: '使用針對性練習教材，掌握TOEIC聽力部分的所有題型。' },
      { title: '閱讀理解', desc: '透過策略訓練提高TOEIC閱讀部分的速度和準確度。' },
      { title: '商業詞彙', desc: '建構TOEIC考試中常見的必備商業英語詞彙。' },
      { title: '模擬測驗', desc: '定期進行全長模擬測驗，附詳細分數分析和改善計畫。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 TOEIC 聽力' },
      { time: '09:00 - 09:50', class: '1:1 TOEIC 閱讀' },
      { time: '10:00 - 10:50', class: '1:1 TOEIC 文法' },
      { time: '11:00 - 11:50', class: '1:1 TOEIC 詞彙' },
      { time: '12:00 - 13:00', class: '午餐時間' },
      { time: '13:00 - 13:50', class: '團體練習' },
      { time: '14:00 - 14:50', class: '模擬考' },
      { time: '15:00 - 16:50', class: '自習 / 複習' },
    ],
  },
  business: {
    features: [
      { title: '商業溝通', desc: '培養會議、電子郵件和簡報所需的專業溝通技巧。' },
      { title: '談判技巧', desc: '學習英語商業談判中的表達方式與策略。' },
      { title: '簡報技巧', desc: '掌握清晰且具影響力的商業簡報技術。' },
      { title: '行業專用英語', desc: '根據您的行業和職位量身定制的詞彙和情境。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 商業溝通' },
      { time: '09:00 - 09:50', class: '1:1 商業寫作' },
      { time: '10:00 - 10:50', class: '1:1 簡報技巧' },
      { time: '11:00 - 11:50', class: '1:1 談判英語' },
      { time: '12:00 - 13:00', class: '午餐時間' },
      { time: '13:00 - 13:50', class: '團體討論' },
      { time: '14:00 - 14:50', class: '案例研討' },
      { time: '15:00 - 16:50', class: '自習 / 社交活動' },
    ],
  },
};

const zhCN = {
  esl: {
    features: [
      { title: '一对一课程', desc: '4小时由专属教师进行的个别指导，根据您的需求和目标量身定制。' },
      { title: '团体课程', desc: '2小时的互动团体课程，与其他学生一起练习沟通技巧。' },
      { title: '自习时间', desc: '2小时的引导式自习时间，可使用学习资源和图书馆。' },
      { title: '选修课程', desc: '额外的选修课程，包括发音、词汇建构和语法工作坊。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 课程（口语）' },
      { time: '09:00 - 09:50', class: '1:1 课程（听力）' },
      { time: '10:00 - 10:50', class: '1:1 课程（阅读）' },
      { time: '11:00 - 11:50', class: '1:1 课程（写作）' },
      { time: '12:00 - 13:00', class: '午餐时间' },
      { time: '13:00 - 13:50', class: '团体课程' },
      { time: '14:00 - 14:50', class: '团体课程' },
      { time: '15:00 - 16:50', class: '自习 / 选修课程' },
    ],
  },
  ielts: {
    features: [
      { title: 'IELTS 口语', desc: '通过模拟面试和个别反馈来提升口语成绩。' },
      { title: 'IELTS 写作', desc: 'Task 1和Task 2密集训练，每篇作文都有详细的反馈。' },
      { title: 'IELTS 阅读', desc: '有效应对各类阅读题型的策略与技巧。' },
      { title: 'IELTS 听力', desc: '使用真实考试素材和计时练习进行专注的听力训练。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 IELTS 口语' },
      { time: '09:00 - 09:50', class: '1:1 IELTS 写作' },
      { time: '10:00 - 10:50', class: '1:1 IELTS 阅读' },
      { time: '11:00 - 11:50', class: '1:1 IELTS 听力' },
      { time: '12:00 - 13:00', class: '午餐时间' },
      { time: '13:00 - 13:50', class: 'IELTS 团体练习' },
      { time: '14:00 - 14:50', class: '模拟考 / 复习' },
      { time: '15:00 - 16:50', class: '自习' },
    ],
  },
  toeic: {
    features: [
      { title: '听力理解', desc: '使用针对性练习教材，掌握TOEIC听力部分的所有题型。' },
      { title: '阅读理解', desc: '通过策略训练提高TOEIC阅读部分的速度和准确度。' },
      { title: '商务词汇', desc: '建构TOEIC考试中常见的必备商务英语词汇。' },
      { title: '模拟测验', desc: '定期进行全长模拟测验，附详细分数分析和改善计划。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 TOEIC 听力' },
      { time: '09:00 - 09:50', class: '1:1 TOEIC 阅读' },
      { time: '10:00 - 10:50', class: '1:1 TOEIC 语法' },
      { time: '11:00 - 11:50', class: '1:1 TOEIC 词汇' },
      { time: '12:00 - 13:00', class: '午餐时间' },
      { time: '13:00 - 13:50', class: '团体练习' },
      { time: '14:00 - 14:50', class: '模拟考' },
      { time: '15:00 - 16:50', class: '自习 / 复习' },
    ],
  },
  business: {
    features: [
      { title: '商务沟通', desc: '培养会议、电子邮件和演示所需的专业沟通技巧。' },
      { title: '谈判技巧', desc: '学习英语商务谈判中的表达方式与策略。' },
      { title: '演示技巧', desc: '掌握清晰且具影响力的商务演示技术。' },
      { title: '行业专用英语', desc: '根据您的行业和职位量身定制的词汇和情境。' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 商务沟通' },
      { time: '09:00 - 09:50', class: '1:1 商务写作' },
      { time: '10:00 - 10:50', class: '1:1 演示技巧' },
      { time: '11:00 - 11:50', class: '1:1 谈判英语' },
      { time: '12:00 - 13:00', class: '午餐时间' },
      { time: '13:00 - 13:50', class: '团体讨论' },
      { time: '14:00 - 14:50', class: '案例研讨' },
      { time: '15:00 - 16:50', class: '自习 / 社交活动' },
    ],
  },
};

const vi = {
  esl: {
    features: [
      { title: 'Lớp học 1-1', desc: '4 giờ hướng dẫn cá nhân với giáo viên chuyên trách, phù hợp với nhu cầu và mục tiêu của bạn.' },
      { title: 'Lớp nhóm', desc: '2 giờ học nhóm tương tác để luyện tập kỹ năng giao tiếp cùng các bạn học.' },
      { title: 'Tự học', desc: '2 giờ tự học có hướng dẫn với quyền truy cập tài liệu học tập và thư viện.' },
      { title: 'Lớp tự chọn', desc: 'Các lớp tự chọn bổ sung bao gồm phát âm, xây dựng từ vựng và hội thảo ngữ pháp.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 (Nói)' },
      { time: '09:00 - 09:50', class: '1:1 (Nghe)' },
      { time: '10:00 - 10:50', class: '1:1 (Đọc)' },
      { time: '11:00 - 11:50', class: '1:1 (Viết)' },
      { time: '12:00 - 13:00', class: 'Nghỉ trưa' },
      { time: '13:00 - 13:50', class: 'Lớp nhóm' },
      { time: '14:00 - 14:50', class: 'Lớp nhóm' },
      { time: '15:00 - 16:50', class: 'Tự học / Lớp tự chọn' },
    ],
  },
  ielts: {
    features: [
      { title: 'IELTS Speaking', desc: 'Luyện tập với phỏng vấn mô phỏng và phản hồi để cải thiện điểm nói.' },
      { title: 'IELTS Writing', desc: 'Đào tạo chuyên sâu Task 1 và Task 2 với phản hồi chi tiết cho mỗi bài viết.' },
      { title: 'IELTS Reading', desc: 'Chiến lược và kỹ thuật xử lý hiệu quả các dạng bài đọc khác nhau.' },
      { title: 'IELTS Listening', desc: 'Luyện nghe tập trung với tài liệu thi thật và bài tập có giới hạn thời gian.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 IELTS Speaking' },
      { time: '09:00 - 09:50', class: '1:1 IELTS Writing' },
      { time: '10:00 - 10:50', class: '1:1 IELTS Reading' },
      { time: '11:00 - 11:50', class: '1:1 IELTS Listening' },
      { time: '12:00 - 13:00', class: 'Nghỉ trưa' },
      { time: '13:00 - 13:50', class: 'Luyện IELTS nhóm' },
      { time: '14:00 - 14:50', class: 'Thi thử / Ôn tập' },
      { time: '15:00 - 16:50', class: 'Tự học' },
    ],
  },
  toeic: {
    features: [
      { title: 'Nghe hiểu', desc: 'Nắm vững tất cả các phần nghe TOEIC với tài liệu luyện tập có mục tiêu.' },
      { title: 'Đọc hiểu', desc: 'Cải thiện tốc độ và độ chính xác cho phần đọc TOEIC thông qua đào tạo theo chiến lược.' },
      { title: 'Từ vựng thương mại', desc: 'Xây dựng vốn từ vựng tiếng Anh thương mại thiết yếu thường gặp trong kỳ thi TOEIC.' },
      { title: 'Bài thi thử', desc: 'Bài thi thử toàn phần định kỳ với phân tích điểm chi tiết và kế hoạch cải thiện.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 TOEIC Listening' },
      { time: '09:00 - 09:50', class: '1:1 TOEIC Reading' },
      { time: '10:00 - 10:50', class: '1:1 TOEIC Grammar' },
      { time: '11:00 - 11:50', class: '1:1 TOEIC Vocabulary' },
      { time: '12:00 - 13:00', class: 'Nghỉ trưa' },
      { time: '13:00 - 13:50', class: 'Luyện tập nhóm' },
      { time: '14:00 - 14:50', class: 'Thi thử' },
      { time: '15:00 - 16:50', class: 'Tự học / Ôn tập' },
    ],
  },
  business: {
    features: [
      { title: 'Giao tiếp thương mại', desc: 'Phát triển kỹ năng giao tiếp chuyên nghiệp cho cuộc họp, email và thuyết trình.' },
      { title: 'Kỹ năng đàm phán', desc: 'Học ngôn ngữ và chiến lược đàm phán kinh doanh hiệu quả bằng tiếng Anh.' },
      { title: 'Kỹ năng thuyết trình', desc: 'Nắm vững nghệ thuật trình bày thuyết trình kinh doanh rõ ràng và có tác động.' },
      { title: 'Tiếng Anh chuyên ngành', desc: 'Từ vựng và tình huống được tùy chỉnh cho ngành nghề và vai trò cụ thể của bạn.' },
    ],
    schedule: [
      { time: '08:00 - 08:50', class: '1:1 Giao tiếp thương mại' },
      { time: '09:00 - 09:50', class: '1:1 Viết thương mại' },
      { time: '10:00 - 10:50', class: '1:1 Kỹ năng thuyết trình' },
      { time: '11:00 - 11:50', class: '1:1 Tiếng Anh đàm phán' },
      { time: '12:00 - 13:00', class: 'Nghỉ trưa' },
      { time: '13:00 - 13:50', class: 'Thảo luận nhóm' },
      { time: '14:00 - 14:50', class: 'Nghiên cứu tình huống' },
      { time: '15:00 - 16:50', class: 'Tự học / Giao lưu' },
    ],
  },
};

export const programTranslations = { en, ja, 'zh-TW': zhTW, 'zh-CN': zhCN, vi };
