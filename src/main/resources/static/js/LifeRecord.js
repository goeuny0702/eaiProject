window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem('lifeRecord'));

  // ✅ 출석률 불러오기 (백엔드 API 호출)
  const classID = 1;  // 테스트용 classID
  fetch(`/api/attendance/${classID}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.attendanceRate + '%';
      document.getElementById('attendance-text').innerText = rate;
      document.getElementById('attendance-input').value = rate;
    })
    .catch(err => {
      console.error('[출석률 가져오기 실패]', err);
      document.getElementById('attendance-text').innerText = '데이터 없음';
      document.getElementById('attendance-input').value = '';
    });

  if (savedData) {
    const fields = [
      'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
      'task', 'design', 'product', 'url', 'contest',
      'attitude', 'focus', 'question', 'initiative', 'future',
      'notes', 'consultation', 'termination'
    ];

    fields.forEach(field => {
      const input = document.getElementById(field + '-input');
      const text = document.getElementById(field + '-text');
      if (savedData[field]) {
        text.innerText = savedData[field];
        text.style.display = 'inline';
        input.style.display = 'none';
      }
    });
  }
};
