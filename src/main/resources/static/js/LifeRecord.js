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
    if (input && text) {
      const value = input.value.trim();
      data[field] = value;
      text.innerText = value;
      text.style.display = 'inline';
      input.style.display = 'none';
    }
  });

  localStorage.setItem('lifeRecord', JSON.stringify(data));

  // 여기 classID는 하드코딩 (로그인 없이 테스트용)
  const etcInfo = {
    authOpinion: document.getElementById('attitude-input').value.trim(),
    interestJob: document.getElementById('termination-input').value.trim(),
    classID: 1  // ← 여기에 테스트용 classID 넣기
  };

  fetch('/api/etcinfo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(etcInfo)
  })
  .then(res => {
    if (!res.ok) throw new Error('서버 저장 실패');
    return res.json();
  })
  .then(data => {
    console.log('[서버 저장 완료]', data);
    alert('저장되었습니다!');
  })
  .catch(err => {
    console.error('[서버 저장 실패]', err);
    alert('서버 저장에 실패했습니다.\n' + err.message);
  });
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