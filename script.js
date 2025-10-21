let btn = document.getElementById("btn");
let score = document.getElementById('score');
let time = document.getElementById('time');
let hole = document.querySelectorAll('.hole');
let img = document.querySelectorAll('.img');
let scorecount = 0;
let timecount = 0
btn.addEventListener('click', () => {
    console.log('time start now!');
    gameStart();
})

function gameStart() {
    let gametime = setInterval(() => {
        timecount++;
        let caught = Math.floor(Math.random() * (9 - 1) + 1)
        let penguin_spawn = document.getElementById(`${caught}hole`);
        time.innerText = timecount;
        img.forEach((el) => {
            penguin_spawn.setAttribute('src', '/penguin.png');
            el.addEventListener('click', () => {
                if (penguin_spawn.getAttribute('src') === '/penguin.png') {
                    let sound = new Audio('/sfx_point.mp3');
                    sound.play();
                    sound.currentTime = 0;
                    scorecount++;
                    document.getElementById(`${caught}point`).style.display = 'block';
                    score.innerText = scorecount;
                }
            })
            if (penguin_spawn.getAttribute('src') === '/penguin.png') {
                setInterval(() => {
                    penguin_spawn.setAttribute('src', '/hole.png');
                    document.getElementById(`${caught}point`).style.display = 'none';
                }, 2200);
            }
        })
        if (timecount >= 11) {
            clearInterval(gametime);
            alert(`Your time is up ! \n Your current score is ${scorecount}`);
            window.location.reload();
        }
    }, 2000);

}
