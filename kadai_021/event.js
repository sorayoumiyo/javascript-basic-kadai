const text = document.getElementById('text');

const outptBtn = document.getElementById('btn');

outptBtn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});
