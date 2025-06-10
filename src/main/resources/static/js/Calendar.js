const events = [
  {
    title: "차세대 AI 예측 Solution 개발 (자바,파이썬,RPA) (9회차)",
    start: new Date("2025-05-27"),
    end: new Date("2025-05-30"),
    color: "#f28b82",
    round: "9"
  },
  {
    title: "차세대 AI 예측 Solution 개발 (자바,파이썬,RPA) (10회차)",
    start: new Date("2025-05-28"),
    end: new Date("2025-06-06"),
    color: "#aecbfa",
    round: "10"
  }
];

let currentMonth = 5; // June (0-based index)
let currentYear = 2025;

function renderCalendar() {
  const daysContainer = document.getElementById("calendarDays");
  const monthLabel = document.getElementById("monthLabel");
  daysContainer.innerHTML = "";
  monthLabel.innerText = `${currentMonth + 1}월`;

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();

  let startOffset = firstDay.getDay();
  let totalCells = 42;
  let dayCounter = 1;
  let nextMonthDay = 1;

  for (let i = 0; i < totalCells; i++) {
    const dayEl = document.createElement("div");

    if (i < startOffset) {
      const prevDate = prevLastDay - startOffset + i + 1;
      dayEl.innerText = prevDate;
      dayEl.classList.add("dimmed");
    } else if (dayCounter <= lastDay.getDate()) {
      dayEl.innerText = dayCounter;

      const dayDate = new Date(currentYear, currentMonth, dayCounter);

      events.forEach(event => {
        const selected = document.getElementById("courseSelector").value;
        const show = selected === "all" || selected === event.round;

        if (show && dayDate >= event.start && dayDate <= event.end) {
          const label = document.createElement("span");
          label.innerText = event.title;
          label.className = "event";
          label.style.backgroundColor = event.color;
          dayEl.appendChild(label);
        }
      });

      dayCounter++;
    } else {
      dayEl.innerText = nextMonthDay++;
      dayEl.classList.add("dimmed");
    }

    daysContainer.appendChild(dayEl);
  }
}

function changeMonth(offset) {
  currentMonth += offset;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
}

document.getElementById("courseSelector").addEventListener("change", renderCalendar);

window.onload = renderCalendar;
