const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let courses = []; // 여기에 fetch로 불러온 데이터를 담음

function renderCourses(page) {
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentCourses = courses.slice(startIdx, endIdx);

  const tbody = document.getElementById('courseBody');
  tbody.innerHTML = '';

  currentCourses.forEach(course => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${course.subjectID - 1}</td>
        <td><a href="/view-Details/${course.subjectID}">${course.subjectTitle}</a></td>
        <td>${course.subjectPeriod}</td>
        <td><a href="https://www.work24.go.kr/cm/main.do"><button class="apply-btn">신청</button></a></td>
      `;
      tbody.appendChild(tr);
  });


  const remaining = Math.max(ITEMS_PER_PAGE - currentCourses.length, 0);
  for (let i = 0; i < remaining; i++) {
    const tr = document.createElement('tr');
    tr.className = 'empty-row';
    tr.innerHTML = `<td colspan="4">&nbsp;</td>`;
    tbody.appendChild(tr);
  }
}

function renderPagination() {
  const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
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
  fetch('/api/subjects')
    .then(res => res.json())
    .then(data => {
      courses = data;
      renderCourses(currentPage);
      renderPagination();
    })
    .catch(err => {
      console.error('데이터 로딩 실패:', err);
    });
});
