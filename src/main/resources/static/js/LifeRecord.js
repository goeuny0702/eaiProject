function saveAll() {
  const fields = [
    'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
    'task', 'design', 'product', 'url', 'contest',
    'attitude', 'focus', 'question', 'initiative', 'future',
    'notes', 'consultation'
  ];

  const data = {};

  fields.forEach(field => {
    // 상담 기록 처리
    const terminationInput = document.getElementById('termination-input');
    const terminationText = document.getElementById('termination-text');
    const terminationValue = terminationInput.value.trim();

    // termination 데이터를 data에 저장
    data['termination'] = terminationValue;

    // termination 입력값을 텍스트로 보이게
    terminationText.innerText = terminationValue;
    terminationText.style.display = 'inline';
    terminationInput.style.display = 'none';  // input 숨기기!

  });

  // 상담 기록 처리
  const terminationInput = document.getElementById('termination-input');
  const terminationText = document.getElementById('termination-text');
  const terminationValue = terminationInput.value.trim();

  data['termination'] = terminationValue;
  terminationText.innerText = terminationValue;
  terminationText.style.display = 'inline';
  terminationInput.style.display = 'none';

  localStorage.setItem('lifeRecord', JSON.stringify(data));

  alert('저장되었습니다!');
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

    if (savedData['termination']) {
      document.getElementById('termination-text').innerText = savedData['termination'];
      document.getElementById('termination-text').style.display = 'inline';
      document.getElementById('termination-input').style.display = 'none';
    }
  }
};

function editAll() {
  const fields = [
    'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
    'task', 'design', 'product', 'url', 'contest',
    'attitude', 'focus', 'question', 'initiative', 'future',
    'notes', 'consultation'
  ];

  fields.forEach(field => {
    const input = document.getElementById(field + '-input');
    const text = document.getElementById(field + '-text');

    // input 보이게, text 숨기기
    input.style.display = 'inline';
    text.style.display = 'none';
  });

  // 종결 기록 (라디오 버튼 보이게)
  document.getElementById('termination-input').style.display = 'block';
  document.getElementById('termination-text').style.display = 'none';
}
