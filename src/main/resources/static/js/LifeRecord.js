function saveAll() {
    const fields = [
      'name', 'id', 'address', 'job', 'course', 'duration', 'attendance', 'instructor',
      'task', 'design', 'product', 'url', 'contest',
      'attitude', 'focus', 'question', 'initiative', 'future',
      'notes', 'consultation'
    ];

    fields.forEach(field => {
      const input = document.getElementById(field + '-input');
      const text = document.getElementById(field + '-text');
      text.innerText = input.value;
      input.style.display = 'none';
      text.style.display = 'inline';
    });

    // 라디오 버튼 처리 (종결 기록)
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
  }