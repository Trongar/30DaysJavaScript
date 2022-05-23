const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function (e){
        execute(key.getAttribute('data-key'));
    });
})

window.addEventListener('keydown', function (e) {
    execute(e.keyCode);
});

function execute(keyCode) {
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    const key = document.querySelector(`.key[data-key='${keyCode}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('check');
    setTimeout(function() {
        key.classList.remove('check');
    }, 500);
}