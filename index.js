// Calculate Total Time
function getPlaylistLength(){
    var videos = document.querySelectorAll('span.ytd-thumbnail-overlay-time-status-renderer')
    var totalTime=0;
    for (let i = 0; i < videos.length; i++) {
        var time= videos[i].innerHTML //\n hh:mm:ss \n
        totalTime+= getSecond(time) // Total Seconds
    }

    console.log(getTimesFromSeconds(totalTime))

    const container = document.createElement('div')
    container.style.position='fixed'
    container.style.top='10px'
    container.style.right='10px'
    container.style.border='1px solid Black'
    container.style.padding='10px'
    container.style.background='aliceblue' 
    container.style.zIndex='9999' 

    const text = document.createElement('span')
    text.innerHTML = "Playlist Length : "+ getTimesFromSeconds(totalTime)
    text.style.fontSize='20px'

    container.appendChild(text)
    document.body.appendChild(container)

}

function getTimesFromSeconds(totalTime){
    var hours= Math.floor(totalTime/3600)
    var minutes= Math.floor((totalTime%3600)/60)
    var seconds= totalTime%60

    return `${hours}:${minutes}:${seconds}`
}

function getSecond(videoTime) {
    videoTime= videoTime.trim() // \n hh:mm:ss \n--> hh:mm:ss
    var videoArray = videoTime.split(':') // hh:mm:ss--> ['hh','mm','ss']

    var hours =0;
    var minutes =0;
    var seconds=0;

    if (videoArray.length==2) {
        minutes= parseInt(videoArray[0])
        seconds= parseInt(videoArray[1])
    }else if(videoArray.length==3){
        hours =parseInt(videoArray[0])
        minutes= parseInt(videoArray[1])
        seconds= parseInt(videoArray[2])
    }

    return hours*3600+ minutes*60+ seconds;
}

// Calling Function

setTimeout(() => {
    getPlaylistLength();
}, 5000);


// Code will Be Available on github After Video upload get The link in description