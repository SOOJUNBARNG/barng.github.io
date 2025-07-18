// /js/main.js

// 1. All language data is now in one central place.
const languageData = {
    en: {
        resumeTitle: "Resume",
        introTitle: "Introduction",
        introText: [
            "Hello, this is a GitHub blog for job hunting.",
            "Majored in mechanical engineering and nuclear engineering at Tokyo Tech.",
            "Sincerely interested in finance, especially passive investment derived from machine learning, based on patents, raw materials, and XBRL.",
            "My second job involves investment, running a dating application, and facilitating foreigner exchanges between Korea and Japan.",
            "Ultimately interested in pursuing marriage and a good life."
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
            { institution: "Tokyo Institute of Technology", date: "2016.04 – 2019.03", degree: "Master of Engineering & Science", major: "Nuclear Engineering", details: ["Recipient of the MEXT National Scholarship"] },
            { institution: "Tokyo Institute of Technology", date: "2012.04 – 2016.03", degree: "Bachelor of Engineering", major: "Mechanical Engineering", details: ["Recipient of the MEXT National Scholarship"] },
            { institution: "Banpo High School", date: "2008.08 – 2010.02", degree: null, major: "Seoul, South Korea", details: [] },
            { institution: "Taroona High School", date: "2006.03 – 2008.07", degree: null, major: "Tasmania, Australia", details: [] }
        ],
        // ✨ NEW: Work History Timeline Data
        workHistoryTitle: "Work History",
        workHistoryTimeline: [
            { company: "Tokiwa Health Care [JPIX]", date: "2025.08 – Present", title: "Data Scientist", department: "Value Up Team", details: ["Served as a data scientist for the private equity team."] },
            { company: "Medical frontier", date: "2024.08 – 2025.07", title: "Data Scientist", department: "Corporate Development Department", details: ["Served as a data scientist for the corporate department in general."] },
            { company: "Caddi", date: "2022.10 – 2024.07", title: "Team Leader (2D)", department: "Data Team", details: ["Responsible for the maintenance and operation of estimation solutions and cloud environments."] },
            { company: "Astamuse", date: "2022.04 – 2022.09", title: "Hedge Fund Consultant", department: "Data Team", details: ["Analyzed patent data to identify stocks with high growth potential."] },
            { company: "KPMG FAS", date: "2020.04 – 2022.03", title: "M&A Consultant", department: "Digital Team", details: ["Calculated goodwill at M&A and worked on several other PMI projects."] },
            { company: "Misumi Corp", date: "2019.04 – 2020.03", title: "Logistic IT System", department: "New Graduate Position", details: ["Wrote and managed SQL queries for logistics and port systems."] }
        ]
    },
    jp: {
        resumeTitle: "履歴書",
        introTitle: "自己紹介",
        introText: [
            "こんにちは、これは就職活動のためのGitHubブログです。",
            "東京工業大学で機械工学と原子力工学を専攻。",
            "特に特許、原材料、XBRLを活用した機械学習によるパッシブ投資に興味があります。",
            "投資、デートアプリ運営、韓国と日本の外国人交流をサポートする副業を行っています。",
            "最終的には結婚と良い人生を目指しています。"
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
        dataScienceTitle: "データサイエンスと機械学習",
        appDevTitle: "アプリ・Web開発",
        cloudDbTitle: "クラウドとデータベース管理",
        biAnalyticsTitle: "BIとデータ分析",
        corporateTitle: "経営管理関連スキル",
        domainKnowledgeTitle: "ドメイン知識",
        // Education Timeline
        educationTimeline: [
            { institution: "東京工業大学", date: "2016.04 – 2019.03", degree: "工学・理学修士", major: "　原子力工学", details: ["国費外国人留学生奨学金 受給"] },
            { institution: "東京工業大学", date: "2012.04 – 2016.03", degree: "工学学士", major: "　機械工学", details: ["国費外国人留学生奨学金 受給"] },
            { institution: "盤浦高等学校", date: "2008.08 – 2010.02", degree: null, major: "大韓民国、ソウル", details: [] },
            { institution: "タルーナ高等学校", date: "2006.03 – 2008.07", degree: null, major: "オーストラリア、タスマニア", details: [] }
        ],
        // Work History Timeline
        workHistoryTitle: "職務経歴",
        workHistoryTimeline: [
            { company: "株式会社常盤植物化学研究所 [JPIX]", date: "2025.08 – 現在", title: "データサイエンティスト", department: "バリューアップチーム", details: ["プライベートエクイティチームのデータサイエンティストとして従事。"] },
            { company: "メディカルフロンティア", date: "2024.08 – 2025.07", title: "データサイエンティスト", department: "経営企画部", details: ["経営企画部にてデータサイエンティストとして従事。"] },
            { company: "キャディ株式会社", date: "2022.10 – 2024.07", title: "チームリーダー(2D)", department: "データチーム", details: ["見積もりソリューションとクラウド環境の保守・運用を担当。"] },
            { company: "アスタミューゼ株式会社", date: "2022.04 – 2022.09", title: "ヘッジファンドコンサルタント", department: "データチーム", details: ["特許データを分析し、株価上昇が期待される銘柄を特定。"] },
            { company: "KPMG FAS", date: "2020.04 – 2022.03", title: "M&Aコンサルタント", department: "デジタルチーム", details: ["M&Aにおけるのれんの算定、その他複数のPMIプロジェクトに従事。"] },
            { company: "株式会社ミスミ", date: "2019.04 – 2020.03", title: "物流ITシステム担当", department: "新卒", details: ["物流および港湾システムのためのSQLクエリを作成・管理。"] }
        ]
    },
    kr: {
        resumeTitle: "이력서",
        introTitle: "소개",
        introText: [
            "안녕하세요, 구직을 위한 GitHub 블로그입니다.",
            "도쿄 공과대학에서 기계공학과 원자력공학을 전공했습니다.",
            "특히 특허, 원자재, XBRL을 활용한 기계 학습 기반 패시브 투자에 관심이 많습니다.",
            "투자, 데이팅 앱 운영, 한국과 일본 간 외국인 교류를 촉진하는 부업을 하고 있습니다.",
            "궁극적으로 결혼과 좋은 삶을 추구하고 싶습니다."
        ],
        contactTitle: "연락처",
        educationTitle: "학력",
        educationText: [
            "타루나 고등학교 (호주 태즈매니아)",
            "반포 고등학교 (한국 서울)",
            "도쿄 공과대학 (기계공학) - 국비유학생",
            "도쿄 공과대학 (원자력공학) - 국비장학생 / 이학 및 공학 학위"
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
        dataScienceTitle: "데이터 과학 및 머신러닝",
        appDevTitle: "어플리케이션 및 웹 개발",
        cloudDbTitle: "클라우드 및 데이터베이스 관리",
        biAnalyticsTitle: "BI 및 분석",
        corporateTitle: "경영관리 지식",
        domainKnowledgeTitle: "전문 분야 지식",
        // Education Timeline
        educationTimeline: [
            { institution: "도쿄 공업대학", date: "2016.04 – 2019.03", degree: "공학・이학 석사", major: "원자력공학", details: ["국비외국인유학생 장학금 수혜"] },
            { institution: "도쿄 공업대학", date: "2012.04 – 2016.03", degree: "공학 학사", major: "기계공학", details: ["국비외국인유학생 장학금 수혜"] },
            { institution: "반포고등학교", date: "2008.08 – 2010.02", degree: null, major: "대한민국, 서울", details: [] },
            { institution: "타루나 고등학교", date: "2006.03 – 2008.07", degree: null, major: "호주, 타즈매니아", details: [] }
        ],
        // Work History Timeline
        workHistoryTitle: "職務経歴",
        workHistoryTimeline: [
            { company: "도키와 헬스케어 [JPIX]", date: "2025.08 – 현재", title: "데이터 과학자", department: "밸류 업 팀", details: ["사모펀드 팀의 데이터 과학자로 근무 중."] },
            { company: "메디컬 프론티어", date: "2024.08 – 2025.07", title: "데이터 과학자", department: "기업 개발 부서", details: ["기업 부서에서 데이터 과학자로 근무 중."] },
            { company: "Caddi", date: "2022.10 – 2024.07", title: "팀 리더(2D)", department: "데이터 팀", details: ["견적 솔루션 및 클라우드 환경 유지 관리 및 운영 담당."] },
            { company: "아스타뮤제", date: "2022.04 – 2022.09", title: "헤지 펀드 컨설턴트", department: "데이터 팀", details: ["특허 데이터를 분석하여 주가 상승이 예상되는 종목을 식별."] },
            { company: "KPMG FAS", date: "2020.04 – 2022.03", title: "M&A 컨설턴트", department: "디지털 팀", details: ["M&A에서 영업권 계산 및 기타 여러 PMI 프로젝트에 참여."] },
            { company: "미스미 주식회사", date: "2019.04 – 2020.03", title: "물류 IT 시스템 담당", department: "신입 사원", details: ["물류 및 항만 시스템을 위한 SQL 쿼리 작성 및 관리."] }
        ]
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
    setText('education-title', languageData[lang].educationTitle);
    setList('intro-text', languageData[lang].introText);
    setList('education-text', languageData[lang].educationText);
    
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

    // ✨ Bid
    renderTimeline(lang, 'educationTimeline', '.timeline', 'education-title');
    renderTimeline(lang, 'workHistoryTimeline', '.timeline', 'work-history-title');
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
    const foldableHeaders = document.querySelectorAll('.foldable-header');
    foldableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('is-open');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
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