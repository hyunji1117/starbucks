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


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소,지속시간,옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true 
  /* 반복재생 여부 설정 */
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', (디렉션의 기본값이 수평으로 별도 코드 작성하지 않음)
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  }
} );

