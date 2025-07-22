// /js/main.js

// 1. All language data is now in one central place.
const languageData = {
    en: {
        resumeTitle: "Resume",
        introTitle: "Introduction",
        emailTitle: "Email",
        introText: [
            "Hello, this is Barng's GitHub blog for job hunting.",
            "I majored in Mechanical Engineering and Nuclear Engineering at the Tokyo Institute of Technology.",
            "While my skills may still be developing, I aim to become an 'IT jack-of-all-trades' by challenging myself with various implementations.",
            "I am particularly interested in passive investment through machine learning, utilizing patent, inventory, and XBRL data.",
            "As a side business, I engage in simple trade, run a dating app, and offer job hunting guidance.",
            "Ultimately, I aim for a happy marriage and to bring joy to others."
        ],
        contactTitle: "Contact Me",
        educationTitle: "Educational Background",
        educationText: [
            "Taroona High School, Tasmania, Australia",
            "Banpo High School, Seoul, Korea",
            "Tokyo Institute of Technology, Tokyo, Japan - Mechanical Engineering, National Scholarship",
            "Tokyo Institute of Technology, Tokyo, Japan - Atomic Engineering, National Scholarship / Master of Science and Engineering"
        ],
        home: "Home",
        education: "Education",
        skills: "Skills",
        work_history: "Work History",
        experience: "Experiences",
        references: "References",
        others: "Others",
        // SKILL PAGE
        skillsTitle: "Skills & Expertise",
        dataScienceTitle: "Data Science & Machine Learning",
        appDevTitle: "Application & Web Development",
        cloudDbTitle: "Cloud & Database Management",
        biAnalyticsTitle: "Business Intelligence & Analytics",
        corporateTitle: "Finance and General Corporate Skills",
        domainKnowledgeTitle: "Domain Knowledge",
        // Education Timeline
        educationTimeline: [
            { institution: "Institute of Science Tokyo", date: "2016.04 – 2019.03", degree: "Master of Engineering & Science", major: " Nuclear Engineering", details: ["Recipient of the MEXT National Scholarship"] },
            { institution: "Institute of Science Tokyo", date: "2012.04 – 2016.03", degree: "Bachelor of Engineering", major: " Mechanical Engineering", details: ["Recipient of the MEXT National Scholarship"] },
            { institution: "Banpo High School", date: "2008.08 – 2010.02", degree: null, major: "Seoul, South Korea", details: [] },
            { institution: "Taroona High School", date: "2006.03 – 2008.07", degree: null, major: "Tasmania, Australia", details: [] }
        ],
        // ✨ NEW: Work History Timeline Data
        workHistoryTitle: "Work History",
        workHistoryTimeline: [
            { company: "Tokiwa Health Care", date: "2025.08 – Present", title: "Data Scientist", department: "Value Up Team", details: ["Served as a data scientist for the private equity team."] },
            { company: "Medical frontier", date: "2024.08 – 2025.07", title: "Leader", department: "Corporate Development Department", details: ["Served as a data scientist for the corporate department in general."] },
            { company: "Caddi", date: "2022.10 – 2024.07", title: "Team Leader (2D)", department: "Data Team", details: ["Responsible for the maintenance and operation of estimation solutions and cloud environments."] },
            { company: "Astamuse", date: "2022.04 – 2022.09", title: "Senior Data Scientist", department: "Data Team", details: ["Analyzed patent data to identify stocks with high growth potential."] },
            { company: "KPMG FAS", date: "2020.04 – 2022.03", title: "M&A Consultant", department: "Digital Team", details: ["Calculated goodwill at M&A and worked on several other PMI projects."] },
            { company: "Misumi Corp", date: "2019.04 – 2020.03", title: "Logistic IT System", department: "New Graduate Position", details: ["Wrote and managed SQL queries for logistics and port systems."] }
        ],
        // References Page Data
        referencesTitle: "Publications & References",
        refBookTitle: "Corporate Analysis & Job Hunting",
        refBookDesc: "A book published on Amazon Kindle about job hunting strategies.",
        refNikkeiTitle: "Nikkei Newspaper Summary",
        refNikkeiDesc: "A personal project summarizing articles from the Nikkei newspaper.",
        refPaizaTitle: "Paiza Skill Check",
        refPaizaDesc: "[Rank S]Achieved the highest rank (S) in the Paiza programming skill check, demonstrating foundational knowledge in Python.",
        refKaggleTitle: "Kaggle Competitions [In Progress]",
        refKaggleDesc: "Actively participating in Kaggle competitions to apply and enhance data science skills.",
        // Others Page Data
        othersTitle: "Other Activities",
        programmingStudiesTitle: "Programming Studies",
        sidejobHirevueTitle: "Hirevue - Korean Market",
        sidejobHirevueDetail: "Sales and business development for the Korean market.",
        sidejobHotelTitle: "Hotel Staffing & Management Support",
        sidejobHotelDetail1: "Dispatching personnel from Indonesia and India.",
        sidejobHotelDetail2: "Created a cleaning management application (private).",
        sidejobDroneTitle: "Hobby Drones",
        sidejobDroneDetail: "Managed production in China and sales control in Japan.",
        sidejobTieTitle: "500 Yen Ties",
        sidejobTieDetail: "Produced ties in China for sale in Japan.",
        sidejobSukajanTitle: "Sukajan Jacket Sales",
        sidejobSukajanDetail: "Sold Japanese 'Sukajan' jackets in Korea, capitalizing on a trend from the K-pop group BIGBANG.",
        // Experience Page Data
        experienceTitle: "Projects & Experiences",
        expMedicalFrontierTitle: "Medical frontier / Corporate Strategy Dept. Leader (2024.08–2025.07)",
        expMedicalFrontierContent: {
            "PoC Projects": ["Real-time image analysis via YOLO", "Email automation using AI", "Speech To Text (STT) verification", "PPT Agent creation"],
            "Application Development": ["PoC for a Flutter-based app to visualize plastic surgery Before & After", "Face recognition based on OpenCV"],
            "Data Management": ["METABASE collection reduction for cost savings", "Automated shift creation using Python"],
            "Machine Learning Projects": ["Counseling prediction using LSTM", "Employee turnover prediction using Random Forest (published on Hugging Face)", "Optimal employee recommendation model (RandomForestClassifier/Regressor)", "Coupon effectiveness analysis and LTV calculation"],
            "IT Team Launch": ["BI tool selection", "Cloud infrastructure selection (including ETL/Trocco)", "GitHub configuration (Secrets, Actions)", "Glitch template publication"],
            "General Tasks": ["Created training materials for SQL & AI", "Handled RPA/Scraping (weather data, new employee transport costs, national corporate data)", "Tableau Server/GCP operation"]
        },
        expCaddiTitle: "Caddi Inc. / Data Team Leader (2022.10–2024.09)",
        expCaddiContent: {
            "Estimation System Development": ["Derivation of appropriate prices for sheet metal products", "Development of Python modules"],
            "Cloud (GCP) Operations": ["Cost reduction via Information_schema and CloudLogging", "ETL configuration (Trocco)", "Migration to SAP ByDesign"]
        },
        expAstamuseTitle: "Astamuse Inc. / Data Team Senior Data Scientist(2022.04–2022.09)",
        expAstamuseContent: {
            "Investment Advisory Services": ["Extracted investment targets using patent data", "Created queries in GCP BigQuery for asset management firms"]
        },
        expKpmgTitle: "KPMG FAS / M&A Team Associate (2020.04–2022.03)",
        expKpmgContent: {
            "Data Analysis": ["M&A data analysis for electric power, retail, rental, and real estate companies", "Financial modeling, numerical analysis, and sales forecasting", "Built data management models for PMI", "Dashboard creation with Alteryx and Tableau for KPI monitoring"],
            "Tool Implementation": ["Benchmarked financial analysis tools", "Supported introduction and in-house development of overseas tools"]
        },
        expMisumiTitle: "Misumi Group Inc. / Logistics IT Member(2019.04–2020.03)",
        expMisumiContent: {
            "Sales Training (Marketing)": ["New business data analysis, text mining", "Sample shipping and survey implementation", "Python training"],
            "Warehouse System Operations": ["PC and equipment management", "Warehouse app setup", "Help desk support", "Data patching (correcting operational errors)"],
            "System Migration Testing": ["On-batch schedule execution", "Core system migration testing (scenario creation and execution)"]
        },
        programmingStudiesTitle: "Programming Studies",
        programmingStudiesContent: {
            "Human Recognition": [
                "Tracking human movement in video footage.",
                "<a href='https://github.com/SOOJUNBARNG/Medical_frontier_code/blob/main/Medical_frontier/Saito_san_requirements/video_capture_human.py' target='_blank' rel='noopener noreferrer'>Link to code</a>"
            ],
            "Financial Data Analysis": [
                "A project focused on analyzing inventory and patent data.",
                "Collects commodity and stock price data from Investing.com.",
                "Gathers 20 years of patent data (in progress).",
                "Uses historical data to make forecasts (partially implemented).",
                "<a href='https://github.com/SOOJUNBARNG/securities_analysis' target='_blank' rel='noopener noreferrer'>Investment Support Tool</a>"
            ],
            "Fortune Telling Matching App": [
                "A Saju (four pillars of destiny) application (some features are limited in the public version).",
                "Personal fortune telling (logic partially public).",
                "Couples' fortune telling (scoring evaluation only).",
                "Matching feature (conditions are public, but actual matching is disabled).",
                "<a href='https://github.com/SOOJUNBARNG/Real_python_uranai' target='_blank' rel='noopener noreferrer'>YRC Fortune-Telling Matching</a>"
            ]
        }
    },
    jp: {
        resumeTitle: "履歴書",
        introTitle: "自己紹介",
        emailTitle: "Eメール",
        introText: [
            "こんにちは、これは就職活動のための房のGitHubブログです。",
            "東京工業大学で機械工学と原子力工学を専攻。",
            "実力は足りないが、様々な実装に挑戦しながらIT何でも屋さんを目指しています。",
            "特に特許、在庫データ、XBRLを活用した機械学習によるパッシブ投資に興味があります。",
            "簡単な貿易、デートアプリ運営、就活指導副業を行っています。",
            "最終的には幸せな結婚や他人に喜びを伝えることを目指しています。"
        ],
        contactTitle: "連絡先",
        educationTitle: "学歴",
        educationText: [
            "タローナ高校（オーストラリア・タスマニア）",
            "盤浦高校（韓国・ソウル）",
            "東京工業大学（機械工学）- 国費留学生",
            "東京工業大学大学院（原子力工学）- 国費奨学生 / 理学・工学学位"
        ],
        home: "ホーム",
        education: "学歴",
        skills: "スキル",
        work_history: "履歴",
        experience: "職務経験",
        references: "参考文献",
        others: "その他",
        // SKILL PAGE
        skillsTitle: "スキルと専門知識",
        dataScienceTitle: "データサイエンス",
        appDevTitle: "アプリ・Web開発",
        cloudDbTitle: "クラウドとデータベース",
        biAnalyticsTitle: "BIとデータ分析",
        corporateTitle: "経営管理関連スキル",
        domainKnowledgeTitle: "ドメイン知識",
        // Education Timeline
        educationTimeline: [
            { institution: "東京科学大学・旧東京工業大学大学院", date: "2016.04 – 2019.03", degree: "工学・理学修士", major: "　原子力工学", details: ["国費外国人留学生奨学金 受給"] },
            { institution: "東京科学大学・旧東京工業大学", date: "2012.04 – 2016.03", degree: "工学学士", major: "　機械工学", details: ["国費外国人留学生奨学金 受給"] },
            { institution: "盤浦高等学校", date: "2008.08 – 2010.02", degree: null, major: "大韓民国、ソウル", details: [] },
            { institution: "タルーナ高等学校", date: "2006.03 – 2008.07", degree: null, major: "オーストラリア、タスマニア", details: [] }
        ],
        // Work History Timeline
        workHistoryTitle: "職務経歴",
        workHistoryTimeline: [
            { company: "ときわヘルスケア [JPIX投資先]", date: "2025.08 – 現在", title: "エキスパート", department: "バリューアップチーム", details: ["プライベートエクイティチームのデータサイエンティストとして従事。"] },
            { company: "メディカルフロンティア", date: "2024.08 – 2025.07", title: "リーダー", department: "経営企画部", details: ["経営企画部にてデータサイエンティストとして従事。"] },
            { company: "キャディ株式会社", date: "2022.10 – 2024.07", title: "チームリーダー(2D)", department: "データチーム", details: ["見積もりソリューションとクラウド環境の保守・運用を担当。"] },
            { company: "アスタミューゼ株式会社", date: "2022.04 – 2022.09", title: "シニアデータサイエンティスト", department: "データチーム", details: ["特許データを分析し、株価上昇が期待される銘柄を特定。"] },
            { company: "KPMG FAS", date: "2020.04 – 2022.03", title: "アソシエート", department: "デジタルチーム", details: ["M&Aにおけるのれんの算定、その他複数のPMIプロジェクトに従事。"] },
            { company: "株式会社ミスミ", date: "2019.04 – 2020.03", title: "新卒", department: "物流ITシステム担当", details: ["物流および港湾システムのためのSQLクエリを作成・管理。"] }
        ],
        // References Page Data
        referencesTitle: "出版物・参考文献",
        refBookTitle: "企業分析＆就活",
        refBookDesc: "就職活動戦略についてAmazon Kindleで出版した書籍です。",
        refNikkeiTitle: "日経新聞要約",
        refNikkeiDesc: "日本経済新聞の記事を要約する個人プロジェクトです。",
        refPaizaTitle: "パイザ・スキルチェック",
        refPaizaDesc: "[Rank S]Paizaプログラミングスキルチェックで最高ランクのSランクを取得し、Pythonの基礎知識を証明しました。",
        refKaggleTitle: "Kaggle【挑戦中】",
        refKaggleDesc: "データサイエンスのスキルを応用・向上させるため、Kaggleコンペティションに積極的に参加しています。",
        // Others Page Data
        othersTitle: "副業・その他活動",
        programmingStudiesTitle: "プログラミング勉強",
        sidejobHirevueTitle: "Hirevue韓国マーケット",
        sidejobHirevueDetail: "韓国市場向けの営業を担当。",
        sidejobHotelTitle: "ホテル人材派遣・運営補助",
        sidejobHotelDetail1: "インドネシア・インドからの人材派遣。",
        sidejobHotelDetail2: "掃除管理アプリの作成（公開不可）。",
        sidejobDroneTitle: "趣味用ドローン",
        sidejobDroneDetail: "中国での生産管理と日本での販売を担当。",
        sidejobTieTitle: "５００円ネクタイ",
        sidejobTieDetail: "中国でネクタイを生産し、日本で販売。",
        sidejobSukajanTitle: "スカジャン販売",
        sidejobSukajanDetail: "アイドルグループBIGBANGをきっかけに韓国で人気だった日本のスカジャンを販売。",
        // Experience Page Data
        experienceTitle: "プロジェクト・職務経験",
        expMedicalFrontierTitle: "株式会社メディカルフロンティア/経営戦略部 リーダー (2024年8月〜2025年7月)",
        expMedicalFrontierContent: {
            "各種PoC": ["Yolovを通じたリアルタイム画像分析", "AIを利用したメール自動送信", "STT（Speech To Text）検証", "PPT_agent作成"],
            "アプリ制作": ["整形Before＆Afterが可視化できるFlutter基盤アプリPoc", "顔認識はOpenCVベース"],
            "データマネジメント": ["METABASEのコレクション縮小＝コスト削減", "Pythonを利用したシフト自動作成"],
            "各種マシーンラーニング": ["LSTMを利用したカウンセリング予測", "ランダムフォーレストを利用した退職者予測（Hugging Face公開）", "適正従業人レコメンデーション", "クーポン効果検証や算出によるLTV算出"],
            "経営分析部ITチーム立ち上げ": ["BIツールの選定", "クラウド基盤選定（＋ETL・Trocco選定）", "GitHub各種設定（SecretID,Actions）", "Glitchテンプレート公開"],
            "雑務": ["SQL・AI周り研修資料作成", "RPA・スクレイピング対応（全国天気・入職者交通費・全国法人データ）", "Tableau Server/GCP運用"]
        },
        expCaddiTitle: "キャディ株式会社/データチーム リーダー (2022年10月〜2024年9月)",
        expCaddiContent: {
            "見積もりシステム開発・保守・運用": ["板金製品適正価格の導出", "pythonモジュールの開発"],
            "クラウド（GCP）費用カット・保守・運用": ["Information_schema、CloudLoggingからテーブル作成費用カット", "ETL設定（Trocco）", "SAP By designへ移行"]
        },
        expAstamuseTitle: "アスタミューゼ株式会社/データチーム シニアデータサイエンティスト(2022年4月〜2022年9月)",
        expAstamuseContent: {
            "特許データを利用した投資アドバイザリー業務": ["特許データを用いた投資銘柄抽出", "資産運用会社向けに特許データを用いた銘柄抽出", "GCPのBiｇqueryでクエリー分作成"]
        },
        expKpmgTitle: "株式会社KPMG FAS/M&Aチーム　アソシエイツ (2020年4月〜2022年3月)",
        expKpmgContent: {
            "データ分析": ["電力・小売り・レンタル・不動産企業のＭ＆Ａデータ分析", "財務モデリング、数値解析、売上予測", "PMIの為のデータ管理構築モデル", "ALTERYX, TABLEAUを用いたモデル構築とダッシュボード作成（KPIモニタリング）"],
            "海外ツール導入・内製化": ["海外の財務分析ツールのAlteryxとTableauを通じた分析ベンチマーク", "海外ツールの導入支援と導入"]
        },
        expMisumiTitle: "株式会社ミスミグループ本社/物流IT 新卒(2019年4月〜2020年3月)",
        expMisumiContent: {
            "営業研修（マーケティング）": ["新規事業データ分析、テキストマイニング", "サンプル品発送、アンケート実施", "Python講習"],
            "倉庫システム運用・保守・移転": ["PCや機材管理", "倉庫関連アプリ設営", "ヘルプデスク対応（システム仕様問い合わせ＆データパッチ）", "データパッチ（現場誤操作レコード修正）", "ベンダーへの調査・システム改修依頼"],
            "基幹システム移行のシステムテスト": ["オンバッチスケジュール実行", "基幹システムの移行テスト（シナリオ作成及び実行）"]
        },
        programmingStudiesTitle: "プログラミング勉強",
        programmingStudiesContent: {
            "人間認識": [
                "人間追跡",
                "<a href='https://github.com/SOOJUNBARNG/Medical_frontier_code/blob/main/Medical_frontier/Saito_san_requirements/video_capture_human.py' target='_blank' rel='noopener noreferrer'>人間認識コード</a>"
            ],
            "金融データ分析": [
                "在庫データや特許データを利用した分析がメイン。",
                "Investing.comのデータを収集し、現物・株価を分析。",
                "20年間の特許データを収集（実装中）。",
                "過去データを用いた予測（一部実装済み）。",
                "<a href='https://github.com/SOOJUNBARNG/securities_analysis' target='_blank' rel='noopener noreferrer'>㈱投資補助ツール</a>"
            ],
            "占いマッチング": [
                "四柱推命アプリ（公開版は一部機能のみ）。",
                "自分占い（一部ロジックのみ公開）。",
                "恋人占い（点数化評価のみ公開）。",
                "マッチング占い（マッチング条件まで公開、実際のマッチングはしない）。",
                "<a href='https://github.com/SOOJUNBARNG/Real_python_uranai' target='_blank' rel='noopener noreferrer'>YRC占いマッチング</a>"
            ]
        }
    },
    kr: {
        resumeTitle: "이력서",
        introTitle: "소개",
        emailTitle: "이메일",
        introText: [
            "안녕하세요, 취업 활동을 위한 방(房)의 GitHub 블로그입니다.",
            "도쿄공업대학에서 기계공학과 원자력공학을 전공했습니다.",
            "실력은 부족하지만, 다양한 구현에 도전하며 'IT 만능 해결사'를 목표로 하고 있습니다.",
            "특히 특허, 재고 데이터, XBRL을 활용한 머신러닝 기반의 패시브 투자에 관심이 많습니다.",
            "간단한 무역, 데이팅 앱 운영, 취업 지도 부업을 하고 있습니다.",
            "궁극적으로는 행복한 결혼과 다른 사람에게 기쁨을 전하는 것을 목표로 하고 있습니다."
        ],
        contactTitle: "연락처",
        educationTitle: "학력",
        educationText: [
            "타루나 고등학교 (호주 태즈매니아)",
            "반포 고등학교 (한국 서울)",
            "도쿄 공업대학 (기계공학) - 국비유학생",
            "도쿄 공업대학 (원자력공학) - 국비장학생 / 이학 및 공학 학위"
        ],
        home: "홈",
        education: "학력",
        skills: "스킬",
        work_history: "이력",
        experience: "직무경험",
        references: "기타활동",
        others: "기타",
        // SKILL PAGE
        skillsTitle: "기술 및 전문 지식",
        dataScienceTitle: "머신러닝",
        appDevTitle: "어플리케이션 및 웹 개발",
        cloudDbTitle: "클라우드 및 데이터베이스",
        biAnalyticsTitle: "BI 및 분석",
        corporateTitle: "경영관리 지식",
        domainKnowledgeTitle: "전문 분야 지식",
        // Education Timeline
        educationTimeline: [
            { institution: "도쿄 공업대학", date: "2016.04 – 2019.03", degree: "공학・이학 석사", major: " 원자력공학", details: ["국비외국인유학생 장학금 수혜"] },
            { institution: "도쿄 공업대학", date: "2012.04 – 2016.03", degree: "공학 학사", major: " 기계공학", details: ["국비외국인유학생 장학금 수혜"] },
            { institution: "반포고등학교", date: "2008.08 – 2010.02", degree: null, major: "대한민국, 서울", details: [] },
            { institution: "타루나 고등학교", date: "2006.03 – 2008.07", degree: null, major: "호주, 타즈매니아", details: [] }
        ],
        // Work History Timeline
        workHistoryTitle: "직무경험",
        workHistoryTimeline: [
            { company: "도키와 헬스케어", date: "2025.08 – 현재", title: "데이터 과학자", department: "밸류 업 팀", details: ["사모펀드 팀의 데이터 과학자로 근무 중."]},
            { company: "메디컬 프론티어", date: "2024.08 – 2025.07", title: "데이터 과학자", department: "경영기획", details: ["경영기획 부서에서 데이터 과학자로 근무 중."]},
            { company: "Caddi", date: "2022.10 – 2024.07", title: "팀 리더", department: "데이터 팀", details: ["견적 솔루션 및 클라우드 환경 유지 관리 및 운영 담당."]},
            { company: "아스타뮤제", date: "2022.04 – 2022.09", title: "시니어 데이터사이언티스트", department: "데이터 팀", details: ["특허 데이터를 분석하여 주가 상승이 예상되는 종목을 식별."]},
            { company: "KPMG FAS", date: "2020.04 – 2022.03", title: "M&A 컨설턴트", department: "디지털 팀", details: ["M&A에서 영업권 계산 및 기타 여러 PMI 프로젝트에 참여."]},
            { company: "미스미 주식회사", date: "2019.04 – 2020.03", title: "물류 IT 시스템 담당", department: "신입 사원", details: ["물류 및 항만 시스템을 위한 SQL 쿼리 작성 및 관리."]}
        ],
        // References Page Data
        referencesTitle: "출판물 및 참고 자료",
        refBookTitle: "기업 분석 및 취업 활동",
        refBookDesc: "취업 전략에 관해 아마존 킨들로 출판한 서적입니다.",
        refNikkeiTitle: "닛케이 신문 요약",
        refNikkeiDesc: "닛케이 신문 기사를 요약하는 개인 프로젝트입니다.",
        refPaizaTitle: "Paiza 스킬 체크",
        refPaizaDesc: "[S랭크]Paiza 프로그래밍 스킬 체크에서 최고 등급인 S랭크를 취득하여 파이썬 기초 지식을 증명했습니다.",
        refKaggleTitle: "Kaggle [도전 중]",
        refKaggleDesc: "데이터 과학 기술을 적용하고 향상시키기 위해 Kaggle 대회에 적극적으로 참여하고 있습니다.",
        // Others Page Data
        othersTitle: "부업 및 기타 활동",
        programmingStudiesTitle: "프로그래밍 공부",
        // ✨ NEW: Data for the "Others" page cards (Korean)
        sidejobHirevueTitle: "Hirevue 한국 시장",
        sidejobHirevueDetail: "한국 시장 영업 담당.",
        sidejobHotelTitle: "호텔 인재 파견 및 운영 보조",
        sidejobHotelDetail1: "인도네시아, 인도 인재 파견.",
        sidejobHotelDetail2: "청소 관리 앱 제작 (비공개).",
        sidejobDroneTitle: "취미용 드론",
        sidejobDroneDetail: "중국 생산 및 일본 판매 관리.",
        sidejobTieTitle: "500엔 넥타이",
        sidejobTieDetail: "중국에서 넥타이를 생산하여 일본에서 판매.",
        sidejobSukajanTitle: "스카잔 판매",
        sidejobSukajanDetail: "아이돌 그룹 BIGBANG을 계기로 한국에서 인기를 끈 일본 스카잔을 판매.",
        // Experience Page Data
        experienceTitle: "프로젝트 및 직무 경험",
        expMedicalFrontierTitle: "메디컬 프론티어 / 경영전략부 리더 (2024.08–2025.07)",
        expMedicalFrontierContent: {
            "PoC 프로젝트": ["YOLO를 통한 실시간 이미지 분석", "AI를 이용한 이메일 자동 발송", "음성 텍스트 변환(STT) 검증", "PPT 에이전트 제작"],
            "어플리케이션 개발": ["Flutter 기반 성형 전후 시각화 앱 PoC", "OpenCV 기반 얼굴 인식"],
            "데이터 관리": ["비용 절감을 위한 METABASE 컬렉션 축소", "Python을 이용한 근무 시프트 자동 생성"],
            "머신러닝 프로젝트": ["LSTM을 이용한 상담 예측", "랜덤 포레스트를 이용한 퇴사자 예측 (Hugging Face에 공개)", "최적 직원 추천 모델 (RandomForestClassifier/Regressor)", "쿠폰 효과 검증 및 LTV 산출"],
            "IT팀 신설": ["BI 툴 선정", "클라우드 인프라 선정 (ETL/Trocco 포함)", "GitHub 설정 (Secrets, Actions)", "Glitch 템플릿 공개"],
            "기타 업무": ["SQL 및 AI 관련 교육 자료 작성", "RPA/스크레이핑 대응 (날씨 데이터, 신입사원 교통비, 전국 법인 데이터)", "Tableau Server/GCP 운영"]
        },
        expCaddiTitle: "캐디 주식회사 / 데이터팀 리더 (2022.10–2024.09)",
        expCaddiContent: {
            "견적 시스템 개발": ["판금 제품의 적정 가격 산출", "Python 모듈 개발"],
            "클라우드 (GCP) 운영": ["Information_schema 및 CloudLogging을 통한 비용 절감", "ETL 설정 (Trocco)", "SAP ByDesign으로의 마이그레이션"]
        },
        expAstamuseTitle: "아스타뮤제 주식회사 / 데이터팀 상임 데이터사이언티스트(2022.04–2022.09)",
        expAstamuseContent: {
            "투자 자문 서비스": ["특허 데이터를 활용한 투자 대상 추출", "자산 운용사를 위한 GCP BigQuery 쿼리 작성"]
        },
        expKpmgTitle: "KPMG FAS / M&A팀 어소시에이트 (2020.04–2022.03)",
        expKpmgContent: {
            "데이터 분석": ["재무 모델링, 수치 분석, 매출 예측", "PMI를 위한 데이터 관리 모델 구축", "Alteryx 및 Tableau를 이용한 KPI 모니터링 대시보드 제작"],
            "PMI": ["전력, 소매, 렌탈, 부동산 기업의 M&A 데이터 분석"],
            "해외 툴 도입": ["금융 분석 툴 벤치마킹", "해외 툴 도입 지원 및 자체 개발"]
        },
        expMisumiTitle: "미스미 그룹 본사 / 물류 IT　신입 (2019.04–2020.03)",
        expMisumiContent: {
            "영업 연수 (마케팅)": ["신규 사업 데이터 분석, 텍스트 마이닝", "샘플 발송 및 설문 조사 실시", "Python 교육"],
            "창고 시스템 운영": ["PC 및 장비 관리", "창고 관련 앱 설정", "헬프 데스크 지원", "데이터 패치 (운영 오류 수정)"],
            "기간 시스템 이전 테스트": ["온배치 스케줄 실행", "핵심 시스템 이전 테스트 (시나리오 작성 및 실행)"]
        },
        // Subjob
        programmingStudiesTitle: "프로그래밍 공부",
        programmingStudiesContent: {
            "인간 인식": [
                "영상 속 인간의 움직임 추적.",
                "<a href='https://github.com/SOOJUNBARNG/Medical_frontier_code/blob/main/Medical_frontier/Saito_san_requirements/video_capture_human.py' target='_blank' rel='noopener noreferrer'>관련 코드 링크</a>"
            ],
            "금융 데이터 분석": [
                "재고 및 특허 데이터를 활용한 분석 프로젝트.",
                "Investing.com에서 원자재 및 주가 데이터 수집.",
                "20년간의 특허 데이터 수집 (진행 중).",
                "과거 데이터를 사용한 예측 (일부 구현).",
                "<a href='httpss://github.com/SOOJUNBARNG/securities_analysis' target='_blank' rel='noopener noreferrer'>투자 보조 도구</a>"
            ],
            "운세 매칭 앱": [
                "사주(四柱) 기반 어플리케이션 (공개 버전은 일부 기능 제한).",
                "개인 운세 (일부 로직만 공개).",
                "커플 운세 (점수 평가만 공개).",
                "매칭 운세 (매칭 조건만 공개, 실제 매칭 기능은 비활성화).",
                "<a href='https://github.com/SOOJUNBARNG/Real_python_uranai' target='_blank' rel='noopener noreferrer'>YRC 운세 매칭</a>"
            ]
        }
    }
};

// --- RENDER FUNCTIONS ---
function renderTimeline(lang, dataType, containerSelector, pageTitleId) {
    const timelineContainer = document.querySelector(containerSelector);
    // Only run if the container AND the specific page title exist
    if (!timelineContainer || !document.getElementById(pageTitleId)) return;

    const entries = languageData[lang][dataType];
    if (!entries) return;

    let htmlContent = '';
    entries.forEach(entry => {
        const detailsHtml = entry.details.map(detail => `<li>${detail}</li>`).join('');
        let primaryTitle, secondaryTitle;

        // Build the foldable project details HTML if it exists
        let projectsHtml = '';
        if (entry.projects && entry.projects.length > 0) {
            projectsHtml += '<div class="timeline-projects">';
            entry.projects.forEach(project => {
                const projectDetailsHtml = project.projectdetails.map(detail => `<li>${projectdetails}</li>`).join('');
                projectsHtml += `
                    <div class="foldable-project">
                        <h4 class="foldable-header">${project.name}</h4>
                        <div class="foldable-content">
                            <ul>${projectDetailsHtml}</ul>
                        </div>
                    </div>
                `;
            });
            projectsHtml += '</div>';
        }

        if (dataType === 'educationTimeline') {
            primaryTitle = entry.institution;
            secondaryTitle = entry.degree
                ? `<p class="degree-title"><strong>${entry.degree},</strong> ${entry.major}</p>`
                : `<p class="location-title">${entry.major}</p>`;
        } else { // workHistoryTimeline
            primaryTitle = entry.company;
            secondaryTitle = `<p class="degree-title"><strong>${entry.title},</strong> ${entry.department}</p>`;
        }

        htmlContent += `
            <div class="education-entry">
                <div class="education-header">
                    <h3>${primaryTitle}</h3>
                    <span class="date-range">${entry.date}</span>
                </div>
                <div class="education-body">
                    ${secondaryTitle}
                    ${detailsHtml ? `<ul>${detailsHtml}</ul>` : ''}
                </div>
            </div>`;
    });
    timelineContainer.innerHTML = htmlContent;
}

function renderFoldableContent(lang, contentKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const contentData = languageData[lang][contentKey];
    if (!contentData) return;

    let htmlContent = '<ol>';
    for (const category in contentData) {
        const itemsHtml = contentData[category].map(item => `<li>${item}</li>`).join('');
        htmlContent += `<li>${category}<ul>${itemsHtml}</ul></li>`;
    }
    htmlContent += '</ol>';
    container.innerHTML = htmlContent;
}

// 2. This function now updates any element that exists on the current page.
function changeLanguage(lang) {
    // Helper function to safely update text content
    const setText = (id, text) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    };

    // Helper function to safely update an HTML list
    const setList = (id, listItems) => {
        const element = document.getElementById(id);
        if (element && listItems) {
            element.innerHTML = listItems.map(item => `<li>${item}</li>`).join('');
        }
    };

    // Update page title
    document.title = languageData[lang].resumeTitle;

    // Update header navigation (will exist on all pages)
    setText('home-link', languageData[lang].home);
    setText('education-link', languageData[lang].education);
    setText('skills-link', languageData[lang].skills);
    setText('work-history-link', languageData[lang].work_history);
    setText('experience-link', languageData[lang].experience);
    setText('references-link', languageData[lang].references);
    setText('others-link', languageData[lang].others);

    // Update main content (only if the elements exist on the current page)
    setText('intro-title', languageData[lang].introTitle);
    setText('contact-title', languageData[lang].contactTitle);
    setText('email-title', languageData[lang].emailTitle);
    setText('education-title', languageData[lang].educationTitle);
    setList('intro-text', languageData[lang].introText);
    // setList('education-text', languageData[lang].educationText);
    setText('experience-title', languageData[lang].experienceTitle);
    
    // ✨ NEW: Update skills page content
    setText('skills-title', languageData[lang].skillsTitle);
    setText('data-science-title', languageData[lang].dataScienceTitle);
    setText('app-dev-title', languageData[lang].appDevTitle);
    setText('cloud-db-title', languageData[lang].cloudDbTitle);
    setText('bi-analytics-title', languageData[lang].biAnalyticsTitle);
    setText('corporate-title', languageData[lang].corporateTitle);
    setText('domain-knowledge-title', languageData[lang].domainKnowledgeTitle);

    // You can add more IDs here for your other pages
    setText('education-title', languageData[lang].educationTitle);
    setText('work-history-title', languageData[lang].workHistoryTitle);
    setText('experience-title', languageData[lang].experienceTitle);
    setText('skills-title', languageData[lang].skillsTitle);
    setText('references-title', languageData[lang].referencesTitle); // ✨ NEW
    setText('others-title', languageData[lang].othersTitle); // ✨ NEW
    setText('programming-studies-title', languageData[lang].programmingStudiesTitle); // ✨ NEW

    // Update References Page Content
    setText('ref-book-title', languageData[lang].refBookTitle);     // ✨ NEW
    setText('ref-book-desc', languageData[lang].refBookDesc);       // ✨ NEW
    setText('ref-nikkei-title', languageData[lang].refNikkeiTitle);   // ✨ NEW
    setText('ref-nikkei-desc', languageData[lang].refNikkeiDesc);     // ✨ NEW
    setText('ref-paiza-title', languageData[lang].refPaizaTitle);     // ✨ NEW
    setText('ref-paiza-desc', languageData[lang].refPaizaDesc);       // ✨ NEW
    setText('ref-kaggle-title', languageData[lang].refKaggleTitle);   // ✨ NEW
    setText('ref-kaggle-desc', languageData[lang].refKaggleDesc);     // ✨ NEW

   // ✨ NEW: Update "Others" page static card content
   setText('sidejob-hirevue-title', languageData[lang].sidejobHirevueTitle);
   setText('sidejob-hirevue-detail', languageData[lang].sidejobHirevueDetail);
   setText('sidejob-hotel-title', languageData[lang].sidejobHotelTitle);
   setText('sidejob-hotel-detail1', languageData[lang].sidejobHotelDetail1);
   setText('sidejob-hotel-detail2', languageData[lang].sidejobHotelDetail2);
   setText('sidejob-drone-title', languageData[lang].sidejobDroneTitle);
   setText('sidejob-drone-detail', languageData[lang].sidejobDroneDetail);
   setText('sidejob-tie-title', languageData[lang].sidejobTieTitle);
   setText('sidejob-tie-detail', languageData[lang].sidejobTieDetail);
   setText('sidejob-sukajan-title', languageData[lang].sidejobSukajanTitle);
   setText('sidejob-sukajan-detail', languageData[lang].sidejobSukajanDetail);

   // ✨ NEW: Render the dynamic foldable content for the experience page
   setText('exp-frontier-title', languageData[lang].expMedicalFrontierTitle);
   renderFoldableContent(lang, 'expMedicalFrontierContent', 'exp-frontier-content');
   setText('exp-caddi-title', languageData[lang].expCaddiTitle);
   renderFoldableContent(lang, 'expCaddiContent', 'exp-caddi-content');
   setText('exp-astamuse-title', languageData[lang].expAstamuseTitle);
   renderFoldableContent(lang, 'expAstamuseContent', 'exp-astamuse-content');
   setText('exp-kpmg-title', languageData[lang].expKpmgTitle);
   renderFoldableContent(lang, 'expKpmgContent', 'exp-kpmg-content');
   setText('exp-misumi-title', languageData[lang].expMisumiTitle);
   renderFoldableContent(lang, 'expMisumiContent', 'exp-misumi-content');

    // ✨ Bid
    renderTimeline(lang, 'educationTimeline', '.timeline', 'education-title');
    renderTimeline(lang, 'workHistoryTimeline', '.timeline', 'work-history-title');
    renderFoldableContent(lang, 'programmingStudiesContent', 'programming-studies-content');
}


// 3. This function initializes the language switcher and sets the event listener.
function initializeLanguage() {
    const selectElement = document.querySelector('#language-switcher-container select');
    if (!selectElement) return;

    const savedLang = localStorage.getItem('selectedLanguage') || 'jp';
    selectElement.value = savedLang;
    changeLanguage(savedLang);

    selectElement.addEventListener('change', function() {
        const newLang = this.value;
        localStorage.setItem('selectedLanguage', newLang);
        changeLanguage(newLang);
    });
}

// ✨ NEW ✨
// 4. This function initializes the foldable sections.
function initializeFoldableSections() {
    document.body.addEventListener('click', function(event) {
        const header = event.target.closest('.foldable-header');
        if (header) {
            header.classList.toggle('is-open');
            const content = header.nextElementSibling;
            if (content && content.classList.contains('foldable-content')) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        }
    });
}

// 5. This is the main logic that runs when the page is loaded.
document.addEventListener('DOMContentLoaded', () => {
    // ✨ CHANGED ✨
    // Initialize both features as soon as the page is ready.
    initializeFoldableSections();

    // The existing header-loading logic
    if (!document.getElementById('header-placeholder')) return;
    fetch('/barng.github.io/asset/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(headerHtml => {
            document.getElementById('header-placeholder').innerHTML = headerHtml;
            return fetch('/barng.github.io/asset/language_switcher.html');
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(switcherHtml => {
            const container = document.getElementById('language-switcher-container');
            if (container) {
                container.innerHTML = switcherHtml;
            }
            // Initialize language switcher after it has been loaded
            initializeLanguage();
        })
        .catch(error => console.error('Error loading page assets:', error));
});