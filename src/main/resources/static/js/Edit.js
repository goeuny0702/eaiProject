function saveAll() {
  const fields = [
    'instituteName', 'courseName', 'trainingPeriod',
    'name', 'phone', 'email',
    'bankName', 'bankAddress', 'bankOwner',
    'selectedCourse', 'sessionNumber', 'memo'
  ];

  const data = {};
  const bankData = {};

  // 입력 필드 순회해서 데이터 수집
  fields.forEach((field) => {
    const input = document.querySelector(`[name="${field}"]`);
    const text = document.getElementById(`${field}-text`);

    if (input && text) {
      let value = input.tagName === 'SELECT'
        ? input.options[input.selectedIndex].text
        : input.value;

      text.innerText = value;
      input.style.display = 'none';
      text.style.display = 'block';

      data[field] = value;

      if (['bankName', 'bankAddress', 'bankOwner'].includes(field)) {
        bankData[field] = value;
      }
    }
  });

  // ✅ 개인정보 전송 (data가 준비된 뒤에 personalData 추출)
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
      console.log("✅ 개인정보 저장 완료");
    })
    .catch(error => {
      console.error("❌ 개인정보 저장 오류:", error);
    });

  // ✅ 은행 정보 전송
  bankData['classId'] = classID;

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
      console.log("✅ 은행 정보 저장 완료:", data);
    })
    .catch(error => {
      console.error("❌ 은행 정보 저장 오류:", error);
    });

  // ✅ sessionStorage 저장 및 버튼 전환
  sessionStorage.setItem('userForm', JSON.stringify(data));
  document.getElementById('saveBtn').style.display = 'none';
  document.getElementById('editBtn').style.display = 'inline-block';
}

function loadBankInfo() {
  fetch('/api/bank/' + classID)
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
      console.error("❌ 은행 정보 불러오기 오류:", error);
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

  // ✅ 은행 정보 & etcInfo 불러오기
  loadBankInfo();

  fetch('/api/etcinfo/' + classID)
    .then(response => {
      if (!response.ok) throw new Error("기타 평가 정보 불러오기 실패");
      return response.json();
    })
    .then(data => {
      document.getElementById("attitude-input").value = data.authOpinion || '';
      document.getElementById("termination-input").value = data.interestJob || '';
    })
    .catch(error => {
      console.error("❌ 기타 평가 정보 불러오기 오류:", error);
    });
};

function goNext() {
  alert("다음 단계로 이동합니다.");
}
