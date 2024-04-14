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
  },

  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소로 사용하는 선택자 이용
    clickable: true //클릭하여 적용할 수 있는지 제어하는 기능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전버튼
    nextEl: '.promotion .swiper-next'  //다음버튼
  }
} );

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //프로모션 영역이 숨겨져 있니 확인 > 화면에 잘 보여서 false 불린 데이터 사용
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //!값을 반대로 만들어 달라는 뜻
  if (isHidePromotion) {
    //true이면, 숨김처리 해야 한다!
    promotionEl.classList.add('hide');
  } else {
    //false면, 보임처리 해야 한다!
    promotionEl.classList.remove('hide');
  }
});

















