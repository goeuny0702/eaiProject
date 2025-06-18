document.addEventListener("DOMContentLoaded", function () {
  // 달력 관련 전역 변수 및 초기 렌더링
  const monthYear = document.getElementById('monthYear');
  const calendarDates = document.getElementById('calendarDates');

  window.currentDate = new Date(); // 전역 변수 등록

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    monthYear.textContent = `${year}년 ${month + 1}월`;

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

  function changeMonth(offset) {
    window.currentDate.setMonth(window.currentDate.getMonth() + offset);
    renderCalendar(window.currentDate);
  }

  // window 객체로 등록 (HTML onclick 속성에서 호출 가능)
  window.changeMonth = changeMonth;

  // 최초 렌더링
  renderCalendar(window.currentDate);

  // 배너 슬라이더
  let currentSlide = 0;
  const slides = document.querySelectorAll('#bannerSlider .slide');
  const indicatorContainer = document.getElementById('indicators');

  slides.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.classList.add('indicator-btn');
    if (index === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
    indicatorContainer.appendChild(btn);
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
    updateIndicators();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator-btn');
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // 5초마다 자동 슬라이드

  // 아코디언
  const accordionTitles = document.querySelectorAll(".accordion-title");
  accordionTitles.forEach(title => {
    const btn = title.querySelector(".toggle-btn");
    title.addEventListener("click", function () {
      const item = this.parentElement;
      const isOpen = item.classList.contains("active");

      // 같은 아코디언 내 다른 항목 닫기
      const siblingItems = item.parentElement.querySelectorAll(".accordion-item");
      siblingItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".toggle-btn").textContent = "+";
      });

      // 현재 클릭된 항목만 열기
      if (!isOpen) {
        item.classList.add("active");
        btn.textContent = "-";
      } else {
        btn.textContent = "+";
      }
    });
  });
});

function goToCalendarPage() {
    window.location.href = "/Calendar";
}
