 document.addEventListener("DOMContentLoaded", () => {
    const data = [
      {
        title: "프로젝트 기반 풀스택(java,spring)개발자 양성 과정",
        students: 0,
        max: "20",
        over: "미초과",
        assigned: "O",
        teacher: "홍길동"
      },
      {
        title: "AI 네이티브 언리얼(unreal)게임프로그래밍 (vr콘텐츠 제작 전문가 양성)",
        students: 0,
        max: "20",
        over: "미초과",
        assigned: "O",
        teacher: "홍길동"
      },
      {
        title: "AI프로젝트 풀스택(java,python,react)딥러닝(자연어 처리) 개발자양성과정",
        students: 0,
        max: "20",
        over: "미초과",
        assigned: "O",
        teacher: "홍길동"
      },
      {
        title: "[풀스택 클라우드 기반의 웹&앱 개발자 취업연계 부트캠프(자바,도커,보안)",
        students: 0,
        max: "20",
        over: "미초과",
        assigned: "O",
        teacher: "홍길동"
      },
      {
       title: "[기업 실무프로젝트 반영 풀스택 개발자 양성 (자바,스프링,리액트,뷰,클라우드)",
       students: 0,
       max: "20",
       over: "미초과",
       assigned: "O",
       teacher: "홍길동"
       },
      {
      title: "[[인공지능]AIOT를 이용한 빅데이터 분석 산업솔루션 개발 취업연계 부트캠프",
      students: 0,
      max: "20",
      over: "미초과",
      assigned: "O",
      teacher: "홍길동"
      },
    ];

    const grid = document.getElementById("classGrid");

    data.forEach(item => {
      grid.innerHTML += `
        <div class="title-cell">${item.title}</div>
        <div>${item.students}</div>
        <div>${item.max}</div>
        <div>${item.over}</div>
        <div>${item.assigned}</div>
        <div>${item.teacher}</div>
      `;
    });
  });
  let currentPage = 1;
  const totalPages = 3;

  function showPage(pageNum) {
    currentPage = pageNum;
    console.log("선택한 페이지:", currentPage);
    // 여기에 페이지 전환 내용 넣기
  }

  function prevPage() {
    currentPage = currentPage - 1 < 1 ? totalPages : currentPage - 1;
    showPage(currentPage);
  }

  function nextPage() {
    currentPage = currentPage + 1 > totalPages ? 1 : currentPage + 1;
    showPage(currentPage);
    }