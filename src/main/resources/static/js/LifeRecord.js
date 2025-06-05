function saveAll() {
  const fields = [
    'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
    'task', 'design', 'product', 'url', 'contest',
    'attitude', 'focus', 'question', 'initiative', 'future',
    'notes', 'consultation'
  ];

  const data = {};

  fields.forEach(field => {
    const input = document.getElementById(field + '-input');
    const text = document.getElementById(field + '-text');
    const value = input.value.trim();

    // 저장할 데이터에 넣기
    data[field] = value;

    // input 숨기고, text에 값 보이게
    text.innerText = value;
    text.style.display = 'inline';
    input.style.display = 'none';
  });

  // 종결 기록 (라디오 버튼)
  const terminationInputs = document.getElementsByName('termination');
  let selectedValue = '';
  for (let i = 0; i < terminationInputs.length; i++) {
    if (terminationInputs[i].checked) {
      selectedValue = terminationInputs[i].value;
      break;
    }
  }
  document.getElementById('termination-text').innerText = selectedValue;
  document.getElementById('termination-text').style.display = 'inline';
  document.getElementById('termination-input').style.display = 'none';

  // termination 값도 저장
  data['termination'] = selectedValue;

  // localStorage 저장
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
