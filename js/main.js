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
            { institution: "東京工業大学", date: "2016.04 – 2019.03", degree: "工学・理学修士", major: "原子力工学", details: ["国費外国人留学生奨学金 受給"] },
            { institution: "東京工業大学", date: "2012.04 – 2016.03", degree: "工学学士", major: "機械工学", details: ["国費外国人留学生奨学金 受給"] },
            { institution: "盤浦高等学校", date: "2008.08 – 2010.02", degree: null, major: "大韓民国、ソウル", details: [] },
            { institution: "タルーナ高等学校", date: "2006.03 – 2008.07", degree: null, major: "オーストラリア、タスマニア", details: [] }
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
        ]
    }
};

function renderEducationTimeline(lang) {
    const timelineContainer = document.querySelector('.education-timeline');
    if (!timelineContainer) return; 

    // ✨ CHANGED: Access the timeline data from languageData[lang] ✨
    const entries = languageData[lang].educationTimeline;
    let htmlContent = '';

    entries.forEach(entry => {
        const detailsHtml = entry.details.map(detail => `<li>${detail}</li>`).join('');
        const degreeHtml = entry.degree 
            ? `<p class="degree-title"><strong>${entry.degree},</strong> ${entry.major}</p>`
            : `<p class="location-title">${entry.major}</p>`;

        htmlContent += `
            <div class="education-entry">
                <div class="education-header">
                    <h3>${entry.institution}</h3>
                    <span class="date-range">${entry.date}</span>
                </div>
                <div class="education-body">
                    ${degreeHtml}
                    ${detailsHtml ? `<ul>${detailsHtml}</ul>` : ''}
                </div>
            </div>
        `;
    });

    timelineContainer.innerHTML = htmlContent;
};

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
    // For example, for skill.html:
    // setText('technical-skills-title', languageData[lang].technicalSkills);
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