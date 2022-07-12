let music = document.getElementById("music-audio");
let musicImage = document.querySelector(".music-image");
let musicName = document.querySelector(".music-name");
let musicArtistName = document.querySelector(".music-artist-name");
let nextTrackButton = document.getElementById("skip-next-track-button");
let previousTrackButton = document.getElementById("skip-previous-track-button");
let playMusicButton = document.getElementById("play-song-button");
let pauseMusicButton = document.getElementById("pause-song-button");
let timelinePassed = document.querySelector(".music-timer-passed");
let timelineRemained = document.getElementById("music-time-line-remain");
let musicDurationTimer = document.getElementById('music-duration');
let musicPassedTimer = document.getElementById('music-time-passed');
let likeMusicButton = document.getElementById('music-like-icon');
let likeFillMusicButton = document.getElementById('music-liked-icon');
let loopRepeatButton = document.getElementById("repeat-track");
let playRandomButton = document.getElementById("play-random-button");
let changePageBackButton = document.getElementById("music-player-header-backBottom");
let musicPlayerContainer = document.querySelector(".music-player-body");
let musicPlayListButton = document.getElementById("music-playlist-icon");

// method for changing the music
const changeMusicMethod = (index) => {

    musicImage.src = `./img/${musicLists[index].img}`;
    musicName.innerText = musicLists[index].name;
    musicArtistName.innerText = musicLists[index].artist;
    music.src = `./music/${musicLists[index].music}`;
    setInterval(() => {
        let musicTime = getMusicDuration();
        let musicMinute = Math.floor(musicTime / 60)
        let musicSeconds = Math.floor(musicTime - musicMinute * 60);
        musicDurationTimer.innerText = `${musicMinute}: ${musicSeconds}`;
    }, 10)
    if (musicLists[index].liked) {
        likeMusicButton.style.display = 'none';
        likeFillMusicButton.style.display = 'block';
    } else {
        likeMusicButton.style.display = 'block';
        likeFillMusicButton.style.display = 'none';
    }
    let musicListComponents = [...document.getElementsByClassName("music-item-container")];
    musicListComponents[index].className = 'music-item-container  music-item-container-active';
    musicListComponents[getPreviousItemIndex(index)].className = 'music-item-container';
}

// return Music Duration
const getMusicDuration = () => {
    return music.duration;
}

// return Previous Music Item Index 
const getPreviousItemIndex = (index) => {
    if (index - 1 < 0) {
        index = dataMaxLength;
    }
    return index - 1
}

// automatic Play Button change
const automaticPlayPauseButtonChange = () => {
    pauseMusicButton.style.display = 'block';
    playMusicButton.style.display = 'none';
}

// convert current Music Time
const convertCurrentMusicTime = () => {
    let musicTime = music.currentTime;
    let musicMinute = Math.floor(musicTime / 60)
    let musicSeconds = Math.floor(musicTime - musicMinute * 60);
    if (musicSeconds === 0 && musicMinute === 0) {
        return `0: 00`;
    } else if (musicSeconds < 10) {
        return `${musicMinute}: 0${musicSeconds}`;
    }
    return `${musicMinute}: ${musicSeconds}`;
}

// method for change the time line
music.addEventListener("timeupdate", () => {
    let percentagePosition = (100 * music.currentTime) / music.duration;
    timelinePassed.style.width = `${percentagePosition}%`;
    timelineRemained.style.width = `${100 - percentagePosition}%`;
    musicPassedTimer.innerText = convertCurrentMusicTime();
})

// Event Handler for click on play next button
const playNextSongMethod = () => {
    musicIndex++;
    if (musicIndex + 1 > dataMaxLength) {
        musicIndex = 0;
    }
    changeMusicMethod(musicIndex);
    automaticPlayPauseButtonChange();
}
nextTrackButton.addEventListener("click", playNextSongMethod)

// Event Handler for click on play previous button
previousTrackButton.addEventListener("click", () => {
    if (musicIndex - 1 < 0) {
        musicIndex = dataMaxLength;
    }
    musicIndex--;
    changeMusicMethod(musicIndex);
    automaticPlayPauseButtonChange();
})

// onload window handler
window.addEventListener("load", () => {
    changeMusicMethod(musicIndex)
});

// play button handler
playMusicButton.addEventListener("click", () => {
    playMusicButton.style.display = "none";
    pauseMusicButton.style.display = "block";
    music.play();
})

// pause button handler
pauseMusicButton.addEventListener("click", () => {
    playMusicButton.style.display = "block";
    pauseMusicButton.style.display = "none";
    music.pause();
})

// like button handler
likeMusicButton.addEventListener("click", () => {
    likeMusicButton.style.display = 'none';
    likeFillMusicButton.style.display = 'block';
    musicLists[musicIndex].liked = true;
})

// Dislike button handler
likeFillMusicButton.addEventListener("click", () => {
    likeMusicButton.style.display = 'block';
    likeFillMusicButton.style.display = 'none';
    musicLists[musicIndex].liked = false;
})

// loop button handler
const loopButtonHandler = () => {
    if (repeatTrack) {
        repeatTrack = false;
        music.loop = false;
        loopRepeatButton.style.color = "#F24C4C";
    } else {
        repeatTrack = true;
        music.loop = true;
        loopRepeatButton.style.color = "#EC9B3B";
        if (randomPlay) {
            randomButtonHandler()
        }
    }
}
loopRepeatButton.addEventListener("click", loopButtonHandler)

// random button handler
const randomButtonHandler = () => {
    if (randomPlay) {
        randomPlay = false;
        playRandomButton.style.color = "#F24C4C";
    } else {
        randomPlay = true;
        playRandomButton.style.color = "#EC9B3B";
        if (repeatTrack) {
            loopButtonHandler();
        }
    }
}
playRandomButton.addEventListener("click", randomButtonHandler);

// method for end of the music
const onEndHandler = () => {
    if (randomPlay) {
        let randomNumberIndex = Math.floor(Math.random() * dataMaxLength);
        while (randomNumberIndex == musicIndex) {
            randomNumberIndex = Math.floor(Math.random() * dataMaxLength)
        }
        musicIndex = randomNumberIndex;
        changeMusicMethod(randomNumberIndex);
    } else if (randomPlay === false && repeatTrack === false) {
        playNextSongMethod();
    }
}
music.addEventListener("ended", onEndHandler);


// Change Page Back Button
changePageBackButton.addEventListener('click', () => {
    if (currentPageId === 'musicPlayer') {
        musicPlayerContainer.style.display = 'none';
        musicListContainer.style.display = 'flex';
        currentPageId = 'musicList';
    } else if (currentPageId === 'musicList') {
        musicPlayerContainer.style.display = 'flex';
        musicListContainer.style.display = 'none';
        currentPageId = 'musicPlayer';
    }
})

// show playlist Button
musicPlayListButton.addEventListener('click', () => {
    musicPlayerContainer.style.display = 'none';
    musicListContainer.style.display = 'flex';
    currentPageId = 'musicList';
})

// method for change the page
const changeMusicListsToPlayerPage = (index) => {
    musicPlayerContainer.style.display = 'flex';
    musicListContainer.style.display = 'none';
    currentPageId = 'musicPlayer';
    let musicListComponents = [...document.getElementsByClassName("music-item-container")];
    musicListComponents[musicIndex].className = 'music-item-container';
    musicIndex = index;
    automaticPlayPauseButtonChange();
}