function saveAll() {
  const fields = [
    'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
    'task', 'design', 'product', 'url', 'contest',
    'attitude', 'focus', 'question', 'initiative', 'future',
    'notes', 'consultation', 'termination'
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
    'notes', 'consultation', 'termination'
  ];

  fields.forEach(field => {
    const input = document.getElementById(field + '-input');
    const text = document.getElementById(field + '-text');

    // 실제로 존재할 때만 처리
    if (input && text) {
      input.value = text.innerText;
      input.style.display = 'inline';
      text.style.display = 'none';
    }
  });
}


window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem('lifeRecord'));
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
