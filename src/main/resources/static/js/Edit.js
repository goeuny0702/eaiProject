function saveAll() {
  const fields = [
    'instituteName', 'courseName', 'trainingPeriod',
    'name', 'phone', 'email',
    'bankName', 'bankAddress', 'bankOwner',
    'selectedCourse', 'sessionNumber', 'memo'
  ];

  // 개인정보 전송
  const personalData = {
    name: data.name,
    phone: data.phone,
    email: data.email
  };

  fetch('/Edit/' + userID, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(personalData)
  })
  .then(response => {
    if (!response.ok) throw new Error("개인정보 저장 실패");
    console.log("개인정보 저장 완료");
  })
  .catch(error => {
    console.error("개인정보 저장 오류:", error);
  });

  const data = {};
  const bankData = {};

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

      // 은행 관련 필드는 bankData에 그대로 담기
      if (field === 'bankName' || field === 'bankAddress' || field === 'bankOwner') {
        bankData[field] = value;
      }
    }
  });

  // sessionStorage에 전체 입력값 저장
  sessionStorage.setItem('userForm', JSON.stringify(data));

  // 서버에 은행 정보 전송
  bankData['classId'] = 1;  // 실제 classID로 교체 필요

  console.log("서버에 보낼 데이터:", bankData);

  fetch('/api/bank', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bankData)

  })
  .then(response => {
    if (!response.ok) throw new Error("은행 정보 저장 실패");
    return response.json();
  })
  .then(data => {
    console.log("은행 정보 저장 완료:", data);
  })
  .catch(error => {
    console.error("은행 정보 저장 오류:", error);
  });

  // 버튼 전환
  document.getElementById('saveBtn').style.display = 'none';
  document.getElementById('editBtn').style.display = 'inline-block';
}

function loadBankInfo() {
  fetch('/api/bank/1') // 예시 classID, 실제 로그인값으로 교체 필요
    .then(response => {
      if (!response.ok) throw new Error("불러오기 실패");
      return response.json();
    })
    .then(data => {
      document.getElementById("bankName").value = data.bankName || '';
      document.getElementById("bankAddress").value = data.bankAddress || '';
      document.getElementById("bankOwner").value = data.bankOwner || '';

      document.getElementById("bankName-text").innerText = data.bankName || '';
      document.getElementById("bankAddress-text").innerText = data.bankAddress || '';
      document.getElementById("bankOwner-text").innerText = data.bankOwner || '';
    })
    .catch(error => {
      console.error("은행 정보 불러오기 오류:", error);
    });
}

function toggleEdit() {
  const fields = [
    'instituteName', 'courseName', 'trainingPeriod',
    'name', 'phone', 'email',
    'bankName', 'bankAddress', 'bankOwner',
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

  loadBankInfo();

  // 관리자 의견 자동 불러오기
  fetch('/api/etcinfo/' + classID)
    .then(response => response.json())
    .then(data => {
      document.getElementById("attitude-input").value = data.authOpinion || '';
      document.getElementById("termination-input").value = data.interestJob || '';
    });

};

function goNext() {
  alert("다음 단계로 이동합니다.");
}
