alert("안녕!");
// 타이틀(h1 태그)에 마우스를 올리면 색이 바뀌는 이벤트 정의
document.querySelector("h1").addEventListener("mouseover",(MouseEvent)=> {
    e.target.style.color="red";
})