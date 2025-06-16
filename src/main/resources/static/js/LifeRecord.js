// 저장
function saveAll() {
  const selectedUserId = document.getElementById('userSelect').value;
  if (!selectedUserId) {
    alert("저장할 학생을 선택해주세요.");
    return;
  }

  // 기본 및 수강정보는 localStorage에만 저장 (input 없음)
  const fields = [
    'name', 'email', 'address', 'tel',
    'course', 'duration', 'attendance', 'instructor'
  ];

  const data = {};
  fields.forEach(field => {
    const span = document.getElementById(`${field}-text`);
    if (span) {
      data[field] = span.innerText.trim();
    }
  });

  localStorage.setItem('lifeRecord', JSON.stringify(data));

  // 서버에서 classID 조회 후 etcInfo 저장
  fetch(`/api/user-info/${selectedUserId}`)
    .then(res => {
      if (!res.ok) throw new Error("학생 정보를 불러올 수 없습니다.");
      return res.json();
    })
    .then(userData => {
      const classID = userData.classID;

      const authOpinion = document.getElementById('attitude-input')?.value.trim() || '';
      const interestJob = document.getElementById('termination-input')?.value.trim() || '';

      const etcInfo = {
        authOpinion,
        interestJob,
        classID
      };

      // 저장 후 input 숨김
      document.getElementById('attitude-input').style.display = 'none';
      document.getElementById('termination-input').style.display = 'none';

      return fetch('/api/etcinfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(etcInfo)
      });
    })
    .then(res => {
      if (!res.ok) throw new Error('서버 저장 실패');
      return res.json();
    })
    .then(result => {
      alert("저장되었습니다!");
    })
    .catch(error => {
      console.error('[저장 중 오류]', error);
      alert("저장 실패: " + error.message);
    });
}

// 수정
function editAll() {
  const attitudeInput = document.getElementById("attitude-input");
  const terminationInput = document.getElementById("termination-input");

  if (attitudeInput) {
    attitudeInput.style.display = "inline";
    attitudeInput.disabled = false;
  }

  if (terminationInput) {
    terminationInput.style.display = "inline";
    terminationInput.disabled = false;
  }
}


function loadUserData() {
  const userId = document.getElementById("userSelect").value;
  if (!userId) return;

  fetch(`/api/user-info/${userId}`)
    .then(res => res.json())
    .then(userData => {
      console.log("[응답 전체 확인]", userData);

      const classID = userData.classID;

      // 기본정보
      document.getElementById("name-text").innerText = userData.userName || "";
      document.getElementById("email-text").innerText = userData.userEmail || "";
      document.getElementById("address-text").innerText = userData.userAddress || "";
      document.getElementById("tel-text").innerText = userData.userTel || "";


      document.getElementById("course-text").innerText = "차세대 AI 예측 Solution 개발";
      document.getElementById("duration-text").innerText = "2024.12. 26 ~ 2024. 06. 30";

      document.getElementById("instructor-text").innerText = "임승현";

      // 값 넣기
      document.getElementById("attitude-input").value = userData.authOpinion || "";
      document.getElementById("termination-input").value = userData.interestJob || "";

      // 항상 보이게 + 비활성화
      document.getElementById("attitude-input").style.display = "block";
      document.getElementById("termination-input").style.display = "block";

      document.getElementById("attitude-input").disabled = true;
      document.getElementById("termination-input").disabled = true;

      // 출석률
      fetch(`/api/attendance/${classID}`)
        .then(res => res.json())
        .then(data => {
          document.getElementById("attendance-text").innerText = data.attendanceRate + '%' || '';
        })
        .catch(err => {
          console.error('[출석률 실패]', err);
          document.getElementById("attendance-text").innerText = '데이터 없음';
        });
    })
    .catch(err => {
      console.error('[학생 정보 불러오기 실패]', err);
    });
}


// 페이지 로드시 자동 로딩은 생략 (선택시만)
window.onload = function () {
  // 최초 로드 시 자동 불러오기는 없음
};
