const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle (function (){
  console.log(window.scrollY);
  if(window.scrollY > 500) { //scrollY의 픽셀 위치 확인 가능
    // badge 숨기기
    //gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, { //주의! 실제 요소가 없어진 것이 아니다.
      opacity: 0,
      display: 'none' //서서히 안 보이게 하다 완전 사라지게 만든다.
    });
  } else {
    // badge 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

//_.throttle(함수, 시간)