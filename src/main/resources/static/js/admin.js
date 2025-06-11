const data = [
    {
        title: "차세대 AI 융합 Solution 개발 (자바, 파이썬, RPA) (9회차)",
        count: 2,
        students: 11,
        max: 20,
        over: "미초과",
        assigned: "있음",
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
        <div>${item.count}</div>
        <div>${item.students}</div>
        <div>${item.max}</div>
        <div>${item.over}</div>
        <div>${item.assigned}</div>
        <div>${item.teacher}</div>
      `;
    });
});
