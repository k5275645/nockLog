document.addEventListener('DOMContentLoaded', (event) => {
    const loadTime = performance.now();
    console.log(`페이지 로드 시간: ${loadTime.toFixed(2)}ms`);

    const footer = document.querySelector('footer');
    const loadTimeInfo = document.createElement('p');
    loadTimeInfo.textContent = `페이지 로드 시간: ${loadTime.toFixed(2)}ms`;
    footer.appendChild(loadTimeInfo);
});
