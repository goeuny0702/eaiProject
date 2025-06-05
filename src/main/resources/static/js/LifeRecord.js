function saveAll() {
  const fields = [
    'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
    'task', 'design', 'product', 'url', 'contest',
    'attitude', 'focus', 'question', 'initiative', 'future',
    'notes', 'consultation', 'termination' // 상담기록 추가
  ];

  const data = {};

  fields.forEach(field => {
    const input = document.getElementById(field + '-input');
    const text = document.getElementById(field + '-text');
    if (input && text) {  // 존재 여부 안전 처리
      const value = input.value.trim();
      data[field] = value;

      text.innerText = value;
      text.style.display = 'inline';
      input.style.display = 'none';
    }
  });

  // 저장
  localStorage.setItem('lifeRecord', JSON.stringify(data));
  alert('저장되었습니다!');
}



function editAll() {
  const fields = [
    'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
    'task', 'design', 'product', 'url', 'contest',
    'attitude', 'focus', 'question', 'initiative', 'future',
    'notes', 'consultation', 'termination' // 상담기록 포함!
  ];

  fields.forEach(field => {
    const input = document.getElementById(field + '-input');
    const text = document.getElementById(field + '-text');

    // 기존 텍스트를 input의 value로 복원
    input.value = text.innerText;

    input.style.display = 'inline';
    text.style.display = 'none';
  });
}




window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem('lifeRecord'));
  if (savedData) {
    const fields = [
      'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
      'task', 'design', 'product', 'url', 'contest',
      'attitude', 'focus', 'question', 'initiative', 'future',
      'notes', 'consultation'
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

    // 상담 기록도 불러오기
    if (savedData['termination']) {
      document.getElementById('termination-text').innerText = savedData['termination'];
      document.getElementById('termination-text').style.display = 'inline';
      document.getElementById('termination-input').style.display = 'none';
    }
  }
};