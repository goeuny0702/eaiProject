document.addEventListener("DOMContentLoaded", function () {
  // 📅 캘린더 렌더링
  const monthYear = document.getElementById('monthYear');
  const calendarDates = document.getElementById('calendarDates');
  let currentDate = new Date();

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
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar(currentDate);
  }

  renderCalendar(currentDate);

  // 🎞️ 배너 슬라이더
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
      updateIndicators();
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
  setInterval(nextSlide, 5000);

  // 아코디언
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");
    });
  });
});
