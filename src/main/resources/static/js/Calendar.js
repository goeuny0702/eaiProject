const events = [
  {
    title: "프로젝트 기반 풀스택(JAVA, Spring) 과정",
    start: new Date("2025-06-02"),
    end: new Date("2025-11-17"),
    color: "#f28b82",
    round: "1"
  },
  {
    title: "시네이터 언리얼(Unreal) 게임프로그래밍(VR콘텐츠)",
    start: new Date("2025-06-04"),
    end: new Date("2026-01-14"),
    color: "#fbbc04",
    round: "2"
  },
  {
    title: "AI프로젝트 풀스택(Java, Python, React) 딥러닝(자연어처리)",
    start: new Date("2025-06-04"),
    end: new Date("2025-12-17"),
    color: "#34a853",
    round: "3"
  },
  {
    title: "[풀스택][클라우드 기반] 취업연계 부트캠프(자바,도커,보안)",
    start: new Date("2025-06-05"),
    end: new Date("2025-12-18"),
    color: "#a142f4",
    round: "4"
  },
  {
    title: "기업 실무 풀스택 개발자 양성(자바,스프링,리액트,뷰,클라우드)",
    start: new Date("2025-06-05"),
    end: new Date("2025-12-18"),
    color: "#ff6d01",
    round: "5"
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

