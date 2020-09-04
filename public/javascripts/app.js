const audio=document.getElementById('audio')
const progressContainer=document.getElementById('progress-container')
$('.user-settings').click((e) => {
    e.preventDefault();
    // Show expamded navigation
    console.log('user Icon Clicked');
    $('.user-settings-expanded').toggleClass('user-settings-expanded-active');

})

$('.record-btn').click((e) => {
    console.log('show links')
    $('.record-content').toggle()
    $('.record-btn-wrap').toggleClass('record-btn-pt');
})

function readableDuration(time) {
    sec = Math.floor(time);

    min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
}
function playSong(){
    $('.player-container').addClass('play')
    $('.action-btn-big i.fas').removeClass('fa-play')
    $('.action-btn-big i.fas').addClass('fa-pause')
    $('.player-container-wrap').css('margin-top','3rem')
    const time=readableDuration(audio.duration)
    $('#player-duration').text(`00:00/${time}`)
    audio.play();
}
function pauseSong(){
    $('.player-container').removeClass('play')
    $('.action-btn-big i.fas').addClass('fa-play')
    $('.action-btn-big i.fas').removeClass('fa-pause')
    $('.player-container-wrap').css('margin-top','1rem')

    audio.pause();
}

function updateProgress(){
    const progressPercent=(audio.currentTime/audio.duration)*100;
    const ctime=readableDuration(audio.currentTime)
    const atime=readableDuration(audio.duration)
    $('#player-duration').text(`${ctime}/${atime}`)
    $('.player-progress').css('width',`${progressPercent}%`)
}

//set progress bar
function setProgress(e){
    const width=this.clientWidth;
    const clickX= e.offsetX;
    const duration=audio.duration;
    audio.currentTime=(clickX/width)*duration;
}
$('#play').click(() => {
    const isPlaying=$('.player-container').hasClass('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})


audio.addEventListener('timeupdate',updateProgress);
progressContainer.addEventListener('click',setProgress)


