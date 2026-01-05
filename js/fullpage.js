let isScrolling = false;

const pages = document.querySelectorAll(".page");
const pager = document.querySelector(".pager");
const lastPageIndex = pages.length - 1;

/* =========================
   모바일 판별
========================= */
function isMobile() {
  return window.innerWidth <= 768 || 'ontouchstart' in window;
}

/* =========================
   인디케이터 생성
========================= */
pages.forEach((_, index) => {
  const dot = document.createElement("li");
  pager.appendChild(dot);

  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    moveTo(index);
  });
});

const pagerDots = document.querySelectorAll(".pager li");

/* =========================
   인디케이터 활성화
========================= */
function setActivePager(index) {
  pagerDots.forEach(dot => dot.classList.remove("active"));
  pagerDots[index]?.classList.add("active");
}

/* =========================
   섹션 이동
========================= */
function moveTo(pageIndex) {
  window.scrollTo({
    top: pageIndex * window.innerHeight,
    behavior: "smooth"
  });

  setActivePager(pageIndex);
}

/* =========================
   휠 스크롤 제어 (PC 전용)
========================= */
window.addEventListener("wheel", (e) => {

  /* 📱 모바일에서는 풀페이지 스크롤 미사용 */
  if (isMobile()) return;

  const scrollTop = window.scrollY;
  const lastPageTop = lastPageIndex * window.innerHeight;

  /* footer 영역 */
  if (scrollTop > lastPageTop) {
    if (e.deltaY < 0) {
      e.preventDefault();
      moveTo(lastPageIndex);
    }
    return;
  }

  /* 마지막 페이지 */
  if (scrollTop === lastPageTop) {
    if (e.deltaY > 0) return;

    e.preventDefault();
    moveTo(lastPageIndex - 1);
    return;
  }

  /* 일반 풀페이지 */
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;

  let currentPage = Math.round(scrollTop / window.innerHeight);
  currentPage += e.deltaY > 0 ? 1 : -1;
  currentPage = Math.max(0, Math.min(currentPage, lastPageIndex));

  moveTo(currentPage);

  setTimeout(() => {
    isScrolling = false;
  }, 600);

}, { passive: false });
