const dummyCourses = [
                       { category: 'K-디지털 트레이닝', title: 'AI기반 빅데이터 분석가 양성 과정', period: '2025.11.04 ~ 2025.02.06' },
                       { category: '디지털 신기술', title: '자바 기반 웹/앱 개발자 양성 과정', period: '2025.01.10 ~ 2025.12.27' },
                       { category: '디지털 신기술', title: 'RPA를 활용한 업무자동화 실무 과정', period: '2025.03.01 ~ 2025.08.01' },
                       { category: '스마트혼합훈련', title: '자바 기반 웹/앱 개발자 양성 과정', period: '2025.05.08 ~ 2025.09.13' },
                       { category: '디지털 신기술', title: '풀스택(JAVA, Spring) 개발자 양성', period: '2025.08.03 ~ 2025.12.25' },
                       { category: '디지털 신기술', title: '웹 프론트엔드 개발 과정', period: '2025.09.01 ~ 2025.12.30' },
                       { category: '디지털 신기술', title: '파이썬 기반 데이터 분석가 과정', period: '2025.06.15 ~ 2025.12.20' },
                       { category: '디지털 신기술', title: 'AI 엔지니어 실무 프로젝트 과정', period: '2025.07.10 ~ 2025.12.01' },
                       { category: '디지털 신기술', title: 'AI·빅데이터 융합 프로젝트 과정', period: '2025.04.01 ~ 2025.11.20' },
                       { category: '디지털 신기술', title: '스마트 팩토리 시스템 구축과정', period: '2025.05.01 ~ 2025.10.15' },
                       { category: '디지털 신기술', title: 'RPA 자동화 실무과정', period: '2025.03.20 ~ 2025.08.01' },
                       { category: 'K-디지털 트레이닝', title: '풀스택 개발자 양성 고급 과정', period: '2025.02.10 ~ 2025.07.31' },
                       { category: '디지털 신기술', title: '클라우드 기반 백엔드 개발자 과정', period: '2025.06.25 ~ 2025.11.15' },
                       { category: '스마트혼합훈련', title: 'HTML/CSS 웹 UI 개발 입문', period: '2025.09.01 ~ 2025.12.01' }
                     ];

const ITEMS_PER_PAGE = 10;
let currentPage = 1;

function renderCourses(page) {
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentCourses = dummyCourses.slice(startIdx, endIdx);

  const tbody = document.getElementById('courseBody');
  tbody.innerHTML = '';

  currentCourses.forEach(course => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${course.category}</td>
      <td>${course.title}</td>
      <td>${course.period}</td>
      <td><button class="apply-btn">신청</button></td>
    `;
    tbody.appendChild(tr);
  });

  // 10줄 유지 - 빈 행 추가
  const remaining = Math.max(ITEMS_PER_PAGE - currentCourses.length, 0);
  for (let i = 0; i < remaining; i++) {
    const tr = document.createElement('tr');
    tr.className = 'empty-row';
    tr.innerHTML = `<td colspan="4">&nbsp;</td>`;
    tbody.appendChild(tr);
  }
}

function renderPagination() {
  const totalPages = Math.ceil(dummyCourses.length / ITEMS_PER_PAGE);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    if (i === currentPage) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentPage = i;
      renderCourses(currentPage);
      renderPagination();
    });
    pagination.appendChild(btn);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCourses(currentPage);
  renderPagination();
});
