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

  // 로컬 저장
  localStorage.setItem('lifeRecord', JSON.stringify(data));

  // 선택된 userID 가져오기
  const selectedUserId = document.getElementById('userSelect').value;
  if (!selectedUserId) {
    alert("저장할 학생을 선택해주세요.");
    return;
  }

  // 서버에서 classID를 조회한 후, etcInfo 저장 요청
  fetch(`/api/user-info/${selectedUserId}`)
    .then(res => {
      if (!res.ok) throw new Error("학생 정보를 불러올 수 없습니다.");
      return res.json();
    })
    .then(userData => {
      const classID = userData.classID;

      const etcInfo = {
        authOpinion: document.getElementById('attitude-input').value.trim(),
        interestJob: document.getElementById('termination-input').value.trim(),
        classID: classID  //실제 로그인된 학생의 ID로 저장
      };

      return fetch('/api/etcinfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(etcInfo)
      });
    })
    .then(res => {
      if (!res.ok) throw new Error('서버에 저장 실패');
      return res.json();
    })
    .then(result => {
      console.log('[서버 저장 성공]', result);
      alert("저장되었습니다!");
    })
    .catch(error => {
      console.error('[에러 발생]', error);
      alert("저장 중 오류가 발생했습니다:\n" + error.message);
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