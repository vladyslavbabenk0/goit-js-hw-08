
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import throttle from "lodash.throttle";

const timeVideo = JSON.parse(localStorage.getItem("videoplayer-current-time")) || {};
const seconds = timeVideo.seconds;
console.log(seconds);


player.on('timeupdate', throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));


player.setCurrentTime(seconds).then(function() {
    
}).catch(function(error) {
    switch (error.name) {

        case 'RangeError':
            break;

        default:
            break;
    }
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
player.on("play", player.setCurrentTime);