document.addEventListener("DOMContentLoaded", () => {
  const data = [ {
                      title: "프로젝트 기반 풀스택(JAVA, Spring) 개발자 양성 과정",
                      startDate: "2025-06-02",
                      endDate: "2025-11-25",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "AI 네이티브 언리얼(Unreal) 게임프로그래밍(VR콘텐츠 제작 전문가 양성)",
                      startDate: "2025-06-04",
                      endDate: "2026-01-16",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "AI프로젝트 풀스택(Java, Python, React) 딥러닝(자연어처리) 개발자 양성과정",
                      startDate: "2025-06-04",
                      endDate: "2025-12-22",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "[풀스텍]클라우드 기반의 웹&앱 개발자 취업연계 부트캠프(자바,도커,보안)",
                      startDate: "2025-06-05",
                      endDate: "2025-12-23",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "기업 실무프로젝트 반영 풀스택 개발자 양성(자바,스프링,리액트,뷰,클라우드)",
                      startDate: "2025-06-05",
                      endDate: "2025-12-19",
                      applicants: 22,
                      capacity: 25
                    },
                    {
                      title: "[인공지능]AIoT를 이용한 빅데이터 분석 산업솔루션 개발 취업연계 부트캠프",
                      startDate: "2025-06-05",
                      endDate: "2025-12-23",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "심화_심층 데이터 분석을 통한 개인 맞춤형 예측 자동화 서비스 솔루션 개발 과정 (Hadoop, Tableau, TensorFlow)",
                      startDate: "2025-06-05",
                      endDate: "2025-08-06",
                      applicants: 22,
                      capacity: 25
                    },
                    {
                      title: "[ 로봇 ] AI 영상기법을 활용한 실용적인 산업화 자율주행, 서비스 협동로봇 개발자 과정 (라이다, 뎁스카메라) ",
                      startDate: "2025-06-05",
                      endDate: "2025-12-10",
                      applicants: 22,
                      capacity: 25
                    },
                    {
                      title: "융합_[ ESG ] AIoT를 활용한 스마트 환경공정제어 자동화시스템 구축 (MES, ERP, PLC)",
                      startDate: "2025-06-05",
                      endDate: "2025-12-26",
                      applicants: 22,
                      capacity: 25
                    },
                    {
                      title: "생성형 AI 활용 자바 풀스택개발(ChatGPT, Claude, React, Springboot, AWS) 부트캠프",
                      startDate: "2025-06-09",
                      endDate: "2025-11-28",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "Node.JS 기반 Open API 를 활용한 응용 소프트웨어 개발자 양성 과정",
                      startDate: "2025-06-09",
                      endDate: "2025-11-28",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "클라우드 보안엔지니어(화이트해커) 양성",
                      startDate: "2025-06-09",
                      endDate: "2026-12-12",
                      applicants: 22,
                      capacity: 25
                    },
                    {
                      title: "자바(Java) 풀스택 개발 부트캠프",
                      startDate: "2025-06-09",
                      endDate: "2025-12-01",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "프로젝트기반 풀스택 개발자 양성 과정(Java,Node,React,Vue)",
                      startDate: "2025-06-10",
                      endDate: "2025-12-02",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "RPA+시큐어코딩을 활용한 자바스프링 개발자 양성과정",
                      startDate: "2025-06-10",
                      endDate: "2025-12-01",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "Node.js&React 기반 풀스택(프론트앤드&백앤드) 개발자 양성과정",
                      startDate: "2025-06-16",
                      endDate: "2025-12-16",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "기업요구를 반영한 프로젝트 기반 풀스택 개발자 양성과정",
                      startDate: "2025-06-16",
                      endDate: "2025-12-08",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "심화_AI Roboflow를 활용한 부유물탐지 시스템 구축과정",
                      startDate: "2025-06-16",
                      endDate: "2025-08-13",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "자바 풀스택&AI를 활용한 개발자양성 취업과정(APS플랫폼 개발)",
                      startDate: "2025-06-16",
                      endDate: "2025-12-08",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "자바(파이썬) Full-Stack 개발자 양성 과정(Spring Boot기반의 React,JS활용)",
                      startDate: "2025-06-16",
                      endDate: "2025-12-11",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "[구름 x 인프런] 자바 스프링 & 리액트 풀스택 개발자 성장 과정",
                      startDate: "2025-06-16",
                      endDate: "2026-02-10",
                      applicants: 97,
                      capacity: 100
                    },
                    {
                      title: "디지털 컨버전스 중심 데이터 처리 SW 개발자 양성 과정",
                      startDate: "2025-06-16",
                      endDate: "2025-12-08",
                      applicants: 22,
                      capacity: 25
                    },
                    {
                      title: "자바와 생성형AI를 활용한 차세대 CRM플랫폼 개발",
                      startDate: "2025-06-16",
                      endDate: "2025-12-08",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "(K-DIGITAL)기업요구 생성형 AI를 활용한 개발자 양성 과정",
                      startDate: "2025-06-19",
                      endDate: "2025-12-19",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                      title: "융합_자바 Spring을 활용한 금융서비스(빅데이터기반) 개발자 양성과정",
                      startDate: "2025-06-23",
                      endDate: "2025-12-15",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "프로젝트기반 웹&앱(자바,스프링,리액트,노코드) SW개발자 양성과정",
                      startDate: "2025-06-23",
                      endDate: "2026-01-19",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "클라우드 기반의 웹&앱 풀스택 개발자 양성(자바,도커,보안,AWS)",
                      startDate: "2025-06-24",
                      endDate: "2025-12-15",
                      applicants: 21,
                      capacity: 24
                    },
                    {
                      title: "차세대 AI 예측 Solution 개발(Java, Python)",
                      startDate: "2025-06-25",
                      endDate: "2025-12-18",
                      applicants: 17,
                      capacity: 20
                    },
                    {
                      title: "IoT 스마트 융합 프로젝트 교육 과정",
                      startDate: "2025-06-26",
                      endDate: "2025-08-22",
                      applicants: 27,
                      capacity: 30
                    },
                    {
                        title: "Node.JS 기반 Open API 를 활용한 응용 소프트웨어 개발자 양성 과정",
                        startDate: "2025-06-09",
                        endDate: "2025-11-28",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "클라우드 보안엔지니어(화이트해커) 양성",
                        startDate: "2025-06-09",
                        endDate: "2026-12-12",
                        applicants: 22,
                        capacity: 25
                      },
                      {
                        title: "자바(Java) 풀스택 개발 부트캠프",
                        startDate: "2025-06-09",
                        endDate: "2025-12-01",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "프로젝트기반 풀스택 개발자 양성 과정(Java,Node,React,Vue)",
                        startDate: "2025-06-10",
                        endDate: "2025-12-02",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "RPA+시큐어코딩을 활용한 자바스프링 개발자 양성과정",
                        startDate: "2025-06-10",
                        endDate: "2025-12-01",
                        applicants: 17,
                        capacity: 20
                      },
                      {
                        title: "Node.js&React 기반 풀스택(프론트앤드&백앤드) 개발자 양성과정",
                        startDate: "2025-06-16",
                        endDate: "2025-12-16",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "기업요구를 반영한 프로젝트 기반 풀스택 개발자 양성과정",
                        startDate: "2025-06-16",
                        endDate: "2025-12-08",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "심화_AI Roboflow를 활용한 부유물탐지 시스템 구축과정",
                        startDate: "2025-06-16",
                        endDate: "2025-08-13",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "자바 풀스택&AI를 활용한 개발자양성 취업과정(APS플랫폼 개발)",
                        startDate: "2025-06-16",
                        endDate: "2025-12-08",
                        applicants: 17,
                        capacity: 20
                      },
                      {
                        title: "자바(파이썬) Full-Stack 개발자 양성 과정(Spring Boot기반의 React,JS활용)",
                        startDate: "2025-06-16",
                        endDate: "2025-12-11",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "[구름 x 인프런] 자바 스프링 & 리액트 풀스택 개발자 성장 과정",
                        startDate: "2025-06-16",
                        endDate: "2026-02-10",
                        applicants: 97,
                        capacity: 100
                      },
                      {
                        title: "디지털 컨버전스 중심 데이터 처리 SW 개발자 양성 과정",
                        startDate: "2025-06-16",
                        endDate: "2025-12-08",
                        applicants: 22,
                        capacity: 25
                      },
                      {
                        title: "자바와 생성형AI를 활용한 차세대 CRM플랫폼 개발",
                        startDate: "2025-06-16",
                        endDate: "2025-12-08",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "(K-DIGITAL)기업요구 생성형 AI를 활용한 개발자 양성 과정",
                        startDate: "2025-06-19",
                        endDate: "2025-12-19",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                        title: "융합_자바 Spring을 활용한 금융서비스(빅데이터기반) 개발자 양성과정",
                        startDate: "2025-06-23",
                        endDate: "2025-12-15",
                        applicants: 17,
                        capacity: 20
                      },
                      {
                        title: "프로젝트기반 웹&앱(자바,스프링,리액트,노코드) SW개발자 양성과정",
                        startDate: "2025-06-23",
                        endDate: "2026-01-19",
                        applicants: 17,
                        capacity: 20
                      },
                      {
                        title: "클라우드 기반의 웹&앱 풀스택 개발자 양성(자바,도커,보안,AWS)",
                        startDate: "2025-06-24",
                        endDate: "2025-12-15",
                        applicants: 21,
                        capacity: 24
                      },
                      {
                        title: "차세대 AI 예측 Solution 개발(Java, Python)",
                        startDate: "2025-06-25",
                        endDate: "2025-12-18",
                        applicants: 17,
                        capacity: 20
                      },
                      {
                        title: "IoT 스마트 융합 프로젝트 교육 과정",
                        startDate: "2025-06-26",
                        endDate: "2025-08-22",
                        applicants: 27,
                        capacity: 30
                      },
                      {
                          title: "심화_LowCode 기반의 AI융합 스마트관리시스템 개발 심화과정",
                          startDate: "2025-07-01",
                          endDate: "2025-08-26",
                          applicants: 22,
                          capacity: 25
                        },
                        {
                          title: "심화_AI기반 지능형 솔루션 개발 과정",
                          startDate: "2025-07-01",
                          endDate: "2025-09-09",
                          applicants: 17,
                          capacity: 20
                        },
                        {
                          title: "프로젝트기반 생성형 챗봇/백엔드 개발자(with 파이선,자바)",
                          startDate: "2025-07-01",
                          endDate: "2025-12-04",
                          applicants: 17,
                          capacity: 20
                        },
                        {
                          title: "AWS기반 HyperAutomation융합 웹서비스플랫폼개발(JAVA,Python,RPA)",
                          startDate: "2025-07-03",
                          endDate: "2025-12-26",
                          applicants: 22,
                          capacity: 25
                        },
                        {
                          title: "실시간 데이터처리 자바 웹서비스개발과정",
                          startDate: "2025-07-03",
                          endDate: "2026-01-16",
                          applicants: 21,
                          capacity: 24
                        },
                        {
                          title: "AI기반 시스템 및 응용소프트웨어 개발자 양성과정",
                          startDate: "2025-07-07",
                          endDate: "2025-12-29",
                          applicants: 27,
                          capacity: 30
                        },
                        {
                          title: "[엔비디아] NVIDIA AI Academy",
                          startDate: "2025-07-07",
                          endDate: "2025-12-31",
                          applicants: 24,
                          capacity: 27
                        },
                        {
                          title: "React 기반 프론트엔드 개발자 취업 특화 과정",
                          startDate: "2025-07-08",
                          endDate: "2026-01-26",
                          applicants: 47,
                          capacity: 50
                        },
                        {
                          title: "Spring 기반 백엔드 개발자 성장 과정",
                          startDate: "2025-07-08",
                          endDate: "2026-01-26",
                          applicants: 57,
                          capacity: 60
                        },
                        {
                          title: "프로덕트 매니지먼트 마스터 양성 과정",
                          startDate: "2025-07-10",
                          endDate: "2026-01-28",
                          applicants: 47,
                          capacity: 50
                        },
                        {
                          title: "프로덕트 디자이너를 위한 프론트엔드 개발 융합 실무 과정",
                          startDate: "2025-07-10",
                          endDate: "2026-01-28",
                          applicants: 47,
                          capacity: 50
                        },
                        {
                          title: "생성 AI 응용 서비스 개발자 양성 과정",
                          startDate: "2025-07-15",
                          endDate: "2026-02-02",
                          applicants: 47,
                          capacity: 50
                        },
                        {
                          title: "클라우드 네이티브 엔지니어링 개발자 과정",
                          startDate: "2025-07-15",
                          endDate: "2026-02-02",
                          applicants: 47,
                          capacity: 50
                        },
                        {
                          title: "DB보안솔루션(JAVA,C++)개발자 양성",
                          startDate: "2025-07-16",
                          endDate: "2026-02-03",
                          applicants: 21,
                          capacity: 24
                        },
                        {
                          title: "정보 보호 전문가 양성 마스터 클래스",
                          startDate: "2025-07-17",
                          endDate: "2026-02-05",
                          applicants: 47,
                          capacity: 50
                        },
                        {
                          title: "심화_인공지능(AI) 서비스 기반 웹 개발자 심화 프로젝트",
                          startDate: "2025-07-21",
                          endDate: "2025-09-18",
                          applicants: 27,
                          capacity: 30
                        },
                        {
                          title: "인터렉티브 생성형 AI 챗봇 & 풀스택 개발자",
                          startDate: "2025-07-30",
                          endDate: "2026-01-23",
                          applicants: 17,
                          capacity: 20
                        },
                        {
                          title: "AWS 클라우드 기반 자바웹 풀스택 개발자 양성",
                          startDate: "2025-11-03",
                          endDate: "2026-05-15",
                          applicants: 21,
                          capacity: 24
                        }
                  ];

  const itemsPerPage = 10;
  let currentPage = 1;

  function renderPage(page) {
    const grid = document.getElementById("classGrid");

    grid.innerHTML = `
      <div class="header">교육과정</div>
      <div class="header">훈련 시작 날짜</div>
      <div class="header">훈련 종료 날짜</div>
      <div class="header">수강신청 인원</div>
      <div class="header">정원</div>
    `;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const slicedData = data.slice(start, end);

    slicedData.forEach(item => {
      grid.innerHTML += `
        <div class="title-cell">${item.title}</div>
        <div>${item.startDate}</div>
        <div>${item.endDate}</div>
        <div>${item.applicants}</div>
        <div>${item.capacity}</div>
      `;
    });
    updateActiveBtn();
  }

  function updateActiveBtn() {
    document.querySelectorAll('.num-btn').forEach(btn => {
      btn.classList.remove('active');
      if (Number(btn.textContent) === currentPage) {
        btn.classList.add('active');
      }
    });
  }

  function showPage(pageNum) {
    currentPage = pageNum;
    renderPage(currentPage);
  }

  function prevPage() {
    currentPage = currentPage - 1 < 1 ? Math.ceil(data.length / itemsPerPage) : currentPage - 1;
    renderPage(currentPage);
  }

  function nextPage() {
    currentPage = currentPage + 1 > Math.ceil(data.length / itemsPerPage) ? 1 : currentPage + 1;
    renderPage(currentPage);
  }

  // 최초 실행
  renderPage(currentPage);

  // 전역에 함수 노출
  window.prevPage = prevPage;
  window.nextPage = nextPage;
  window.showPage = showPage;
});
