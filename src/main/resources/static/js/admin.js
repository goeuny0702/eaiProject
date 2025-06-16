const data = [
    {
        title: "차세대 AI 융합 Solution 개발 (자바, 파이썬, RPA) (9회차)",
        students: 11,
        max: 20,
        over: "2025-06",
        assigned: "평생",
        teacher: "임승현"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById('monthYear');
    const calendarDates = document.getElementById('calendarDates');
    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        monthYear.textContent = `${month + 1}월`;

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevLastDate = new Date(year, month, 0).getDate();

        const today = new Date();
        const isThisMonth = today.getFullYear() === year && today.getMonth() === month;

        let html = "";

        for (let i = firstDay - 1; i >= 0; i--) {
          html += `<div class="calendar-date other-month">${prevLastDate - i}</div>`;
        }

        for (let i = 1; i <= lastDate; i++) {
          const isToday = isThisMonth && i === today.getDate();
          html += `<div class="calendar-date ${isToday ? 'today' : ''}">${i}</div>`;
        }

        const totalCells = firstDay + lastDate;
        const nextBlanks = 7 - (totalCells % 7);
        if (nextBlanks < 7) {
          for (let i = 1; i <= nextBlanks; i++) {
            html += `<div class="calendar-date other-month">${i}</div>`;
          }
        }

        calendarDates.innerHTML = html;
    }

    renderCalendar(currentDate);

    const grid = document.getElementById("classGrid");

    data.forEach(item => {
      grid.innerHTML += `
        <div class="title-cell">${item.title}</div>
        <div>${item.students}</div>
        <div>${item.max}</div>
        <div>${item.over}</div>
        <div>${item.assigned}</div>
        <div>${item.teacher}</div>
      `;
    });
  // 생성된 div 요소에 직접 적용
  document.querySelectorAll('#classGrid > div').forEach(el => {
    el.style.textAlign = 'center';
  });


  document.querySelectorAll('.accordion-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // 버튼 클릭 시 외부 클릭 이벤트 방지

      const content = btn.nextElementSibling;
      const isOpen = content.classList.contains('open');

      // 먼저 모든 아코디언 닫기 (하나만 열리게 하려면)
      document.querySelectorAll('.accordion-content.open').forEach((el) => {
        el.classList.remove('open');
        el.style.maxHeight = null;
      });

      if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });

    // 아코디언 안쪽 누르면 닫히지 않게
    btn.nextElementSibling.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // 다른 영역 클릭 시 열려 있는 아코디언 닫기
  document.addEventListener('click', () => {
    document.querySelectorAll('.accordion-content.open').forEach((el) => {
      el.classList.remove('open');
      el.style.maxHeight = null;
    });
  });
 // 전역 스코프에 직접 선언
 function openModal() {
     document.getElementById("modal").style.display = "block";
 }

 function closeModal() {
     document.getElementById("modal").style.display = "none";
 }

 // 바깥 클릭 시 닫기 기능도 전역 스코프에 둠
// 기존 코드 안에서 이 부분을 수정:
window.openModal = function () {
    document.getElementById("modal").style.display = "block";
};

window.closeModal = function () {
    document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
});
