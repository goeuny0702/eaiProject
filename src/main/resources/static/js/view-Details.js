const params = new URLSearchParams(window.location.search);
const subjectId = params.get("id");

if (subjectId) {
    fetch(`/api/subject/${subjectId}`)
        .then(response => {
            if (!response.ok) throw new Error("과정 정보를 불러올 수 없습니다.");
            return response.json();
        })
        .then(data => {
            // 과정명과 교육기간만 표시
            document.getElementById("subjectTitle").textContent = data.subjectTitle;
            document.getElementById("subjectPeriod").textContent = data.subjectPeriod;
        })
        .catch(error => {
            alert(error.message);
        });
} else {
    alert("잘못된 접근입니다. 과정 ID가 없습니다.");
}
