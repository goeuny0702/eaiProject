function saveAll() {
  const fields = [
    'instituteName', 'courseName', 'trainingPeriod',
    'name', 'phone', 'email',
    'bankName', 'accountNumber', 'accountHolder',
    'selectedCourse', 'sessionNumber', 'memo'
  ];

  const data = {};

  fields.forEach((field) => {
    const input = document.querySelector(`[name="${field}"]`);
    const text = document.getElementById(`${field}-text`);

    if (input && text) {
      let value = '';

      if (input.tagName === 'SELECT') {
        value = input.options[input.selectedIndex].text;
      } else {
        value = input.value;
      }

      text.innerText = value;

      input.style.display = 'none';
      text.style.display = 'block';

      data[field] = value;
    }
  });

  sessionStorage.setItem('userForm', JSON.stringify(data));

  document.getElementById('saveBtn').style.display = 'none';
  document.getElementById('editBtn').style.display = 'inline-block';
}

function toggleEdit() {
  const fields = [
    'instituteName', 'courseName', 'trainingPeriod',
    'name', 'phone', 'email',
    'bankName', 'accountNumber', 'accountHolder',
    'selectedCourse', 'sessionNumber', 'memo'
  ];

  fields.forEach((field) => {
    const input = document.querySelector(`[name="${field}"]`);
    const text = document.getElementById(`${field}-text`);

    if (input && text) {
      input.style.display = 'inline-block';
      text.style.display = 'none';
    }
  });

  document.getElementById('saveBtn').style.display = 'inline-block';
  document.getElementById('editBtn').style.display = 'none';
}

window.onload = () => {
  const stored = sessionStorage.getItem('userForm');
  if (stored) {
    const data = JSON.parse(stored);

    for (const key in data) {
      const input = document.querySelector(`[name="${key}"]`);
      const text = document.getElementById(`${key}-text`);

      if (input && text) {
        // 복원 시 SELECT는 text에 맞는 value를 찾아서 설정
        if (input.tagName === 'SELECT') {
          for (let i = 0; i < input.options.length; i++) {
            if (input.options[i].text === data[key]) {
              input.selectedIndex = i;
              break;
            }
          }
        } else {
          input.value = data[key];
        }

        text.innerText = data[key];

        input.style.display = 'none';
        text.style.display = 'block';
      }
    }

    document.getElementById('saveBtn').style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline-block';
  }
};

function goNext() {
  alert("다음 단계로 이동합니다.");
}
