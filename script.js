
document.addEventListener('DOMContentLoaded', () => {
    console.log("Страница загружена!");
    
    const btn = document.getElementById('action-btn');
    const text = document.getElementById('text-to-change');

    btn.addEventListener('click', () => {
        text.innerText = "Текст успешно изменен с помощью JavaScript! 🎉";
        text.style.color = "#ff3b30"; 
        alert("Вы нажали на кнопку!");
    });
});
