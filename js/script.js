/*================================= burger ======================================*/
var burger_icon = document.querySelector('.header_burger');
var header_list = document.querySelectorAll('.header_list li');
var header__content_top = document.querySelector('.header__content_top');
burger_icon.addEventListener('click', function () {
    if (!burger_icon.classList.contains('clicked')) {
        burger_icon.classList.add('clicked');

    }
    else {
        burger_icon.classList.remove('clicked');
    }

    if (burger_icon.classList.contains('clicked')) {
        header__content_top.classList.add('active');
    }
    else {
        header__content_top.classList.remove('active');
    }
})

/*================================= burger ======================================*/


/*================================= video =======================================*/
var video = document.querySelector('.video');
var play_icon = document.querySelector('.play_icon');
var video_text = document.querySelector('.video_text');
var timer = document.querySelector('.video_num');
video_text.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        play_icon.classList.add('pause');
        play_icon.classList.remove('play');
        play_icon.setAttribute('src', 'img/play_icon.png');
        video_text.style.opacity = 0;
    } else {
        play_icon.classList.add('play');
        play_icon.classList.remove('pause');
        video.pause();
        play_icon.setAttribute('src', 'img/pause_icon.png');
        video_text.style.opacity = 1;
    }
    timer.innerText = Math.round(video.currentTime / video.duration * 100) + "%";
})

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        play_icon.classList.add('pause');
        play_icon.classList.remove('play');
        play_icon.setAttribute('src', 'img/pause_icon.png');
        video_text.style.opacity = 0;
    } else {
        play_icon.classList.add('play');
        play_icon.classList.remove('pause');
        video.pause();
        play_icon.setAttribute('src', 'img/play_icon.png');
        video_text.style.opacity = 1;
        
    }
    timer.innerText = Math.round(video.currentTime / video.duration * 100) + "%";
})
// function video_play() {
//     if (video.paused) {
//         video_text.style.opacity = 0;
//     }
//     else{
//         video_text.style.opacity = 1;
//     }

//     video_play();
//   }
//   video_play();
/*================================= video =======================================*/


