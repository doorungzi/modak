gsap.registerPlugin(ScrollTrigger);
gsap.to(".section4", {
    scrollTrigger: {
        trigger: '.bg2', //객체 기준범위
        start: '300px 30%', //start와 end의 앞 숫자는 객체의 기준점 설정(ex.10%으로 하면 '.bg2'의 상단부터 10%가 기준점), 뒷 숫자는 화면상의 트리거 설정(ex.25%로 하면 '.bg2'의 시작 기준점이 상단부터 25% 지나면 모션 적용)
        toggleClass: 'widthAni', //추가할 클래스명
        markers: false
    }
});
