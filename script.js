// 1. HTML 요소 가져오기
const toggleBtn = document.getElementById('toggle-btn');

// 2. 버튼에 클릭 이벤트 붙임
toggleBtn.addEventListener('click', function() {
    // 3. body 태그의 'dark-mode' 클래스를 토글 설정함
    document.body.classList.toggle('dark-mode');

    // 버튼 텍스트도 상황에 맞게 바꿈
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "라이트 모드 켜기 ☀️";
    } else {
        toggleBtn.textContent = "다크 모드 켜기 🌙";
    }
});