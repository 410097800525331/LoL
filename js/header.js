
$(document).ready(function () {
  // header
  const header = `
    <header id="header">
    <!-- GNB -->
      <div class="header_inner">
        <!-- LEFT MENU -->
        <nav class="gnb gnb_left">
          <ul>
            <li class="gnb_menu">
              <a href="#">게임정보<svg width="10" height="5" class="Keqbnicv6fO1CTrVF-g5Rg== Z-Mbz2de33EBshUmlYmWVQ==" viewBox="0 0 8 5"><title>mainNavArrowDown</title><path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E"></path></svg></a>
              <ul class="sub_menu">
                <li><a href="#">기본정보</a></li>
                <li><a href="#">챔피언</a></li>
                <li><a href="#">패치 노트</a></li>
              </ul>
            </li>
            <li class="gnb_menu">
              <a href="#">새소식<svg width="10" height="5" class="Keqbnicv6fO1CTrVF-g5Rg== Z-Mbz2de33EBshUmlYmWVQ==" viewBox="0 0 8 5"><title>mainNavArrowDown</title><path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E"></path></svg></a>
              <ul class="sub_menu">
                <li><a href="#">공지</a></li>
                <li><a href="#">게임 업데이트</a></li>
                <li><a href="#">개발자 블로그</a></li>
                <li><a href="#">세계관</a></li>
                <li><a href="#">미디어</a></li>
                <li><a href="#">e스포츠</a></li>
                <li><a href="#">라이엇 스토어</a></li>
                <li><a href="#">라이엇 게임즈</a></li>
                <li><a href="#">커뮤니티</a></li>
                <li><a href="#">서버 점검 및 업데이트</a></li>
              </ul>
            </li>
            <li class="gnb_menu">
              <a href="#">다운로드</a>
            </li>
            <li class="gnb_menu">
              <a href="https://lolesports.com/ko-KR/">E스포츠<svg width="10" height="10" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg></a>
            </li>
            <li class="gnb_menu">
              <a href="#">이벤트<svg width="10" height="5" class="Keqbnicv6fO1CTrVF-g5Rg== Z-Mbz2de33EBshUmlYmWVQ==" viewBox="0 0 8 5"><title>mainNavArrowDown</title><path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E"></path></svg></a>
              <ul class="sub_menu">
                <li><a href="#">PC방 이벤트</a></li>
              </ul>
            </li>
            <li class="gnb_menu">
              <a href="#">알아보기<svg width="10" height="5" class="Keqbnicv6fO1CTrVF-g5Rg== Z-Mbz2de33EBshUmlYmWVQ==" viewBox="0 0 8 5"><title>mainNavArrowDown</title><path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E"></path></svg></a>
              <ul class="sub_menu">
                <li><a href="#">LoL 디스플레이</a></li>
                <li><a href="#">전설의 전당</a></li>
                <li><a href="#">모바일 상점</a></li>
                <li><a href="#">라이엇 모바일</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- LOGO -->
        <h1 class="logo"><a href="/"><img src="assets/img/Logo.svg" alt="Logo"></a></h1>
        <!-- RIGHT MENU -->
        <nav class="gnb gnb_right">
          <ul>
            <li class="gnb_menu">
              <a href="https://support.riotgames.com/hc/ko">고객지원<svg width="10" height="10" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg></a>
            </li>
            <li class="gnb_menu">
              <a href="https://www.riot-store.co.kr/">라이엇 스토어<svg width="10" height="10" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg></a>
            </li>
            <li class="gnb_menu">
              <a href="https://universe.leagueoflegends.com/ko_KR/">유니버스<svg width="10" height="10" viewBox="0 0 16 16"><title>mainNavLinkOut</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path></svg></a>
            </li>
            <li class="gnb_menu">
              <a href="#">로그인</a>
            </li>
            <li class="gnb_menu">
              <a href="#">회원가입</a>
            </li>
            <li class="gnb_menu">
              <a href="#"><svg width="16" height="16" viewBox="0 0 16 16"><title>globeIcon</title><path d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8Zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0 1 13.536 4.8ZM8 1.632A11.27 11.27 0 0 1 9.528 4.8H6.472A11.27 11.27 0 0 1 8 1.632ZM1.808 9.6A6.594 6.594 0 0 1 1.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 0 0 4.4 8c0 .544.048 1.072.112 1.6H1.808Zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 0 1 2.464 11.2Zm2.36-6.4h-2.36a6.39 6.39 0 0 1 3.464-2.848A12.52 12.52 0 0 0 4.824 4.8ZM8 14.368A11.27 11.27 0 0 1 6.472 11.2h3.056A11.27 11.27 0 0 1 8 14.368ZM9.872 9.6H6.128A11.77 11.77 0 0 1 6 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6Zm.2 4.448a12.52 12.52 0 0 0 1.104-2.848h2.36a6.424 6.424 0 0 1-3.464 2.848ZM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704Z" fill="#E8E8E8"></path></svg></a>
            </li>
          </ul>
        </nav>
        <button class="btn_hamburger" aria-label="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
  </header>
  `;

  $("#header").append(header);


  const btn = document.querySelector('.btn_hamburger');
  const gnb = document.querySelectorAll('.gnb');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    gnb.forEach(menu => {
      menu.classList.toggle('active');
    });
  });



});