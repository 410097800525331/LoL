
let isScrolling = false;

const pages = document.querySelectorAll(".page");
const pager = document.querySelector(".pager");
// index: 0, 1, 2, 3
const lastPageIndex = pages.length - 1; // 3

// 인디케이터 생성
pages.forEach((_, index) => {
  const dot = document.createElement("li");
  // 최초에 첫 번째 섹션에 해당하는 인디케이터(li)에 active 클래스 추가
  pager.appendChild(dot);
  if (index === 0) dot.classList.add("active");

  // 인디케이터 클릭 시 페이지 이동
  dot.addEventListener("click", () => {
    moveTo(index);
  });

});

const pagerDots = document.querySelectorAll(".pager li");

// 현재 페이지의 인디케이터에 active 클래스 추가
function setActivePager(index) {
  pagerDots.forEach(dot => dot.classList.remove("active"));

  pagerDots[index]?.classList.add("active");
}

// 섹션 이동
function moveTo(pageIndex) {
  window.scrollTo({
    top: pageIndex * window.innerHeight,
    behavior: "smooth"
  });

  setActivePager(pageIndex);
}

// 휠 이벤트 처리
window.addEventListener("wheel", (e) => {

  const scrollTop = window.scrollY;

  const lastPageTop = lastPageIndex * window.innerHeight;
  // console.log('window.scrollY: ' + window.scrollY);
  // console.log('window.innerHeight: ' + window.innerHeight);

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

  setTimeout(() => isScrolling = false, 600);
}, { passive: false });