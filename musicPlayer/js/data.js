// ! Tip: the data.js should import before than script.js in index.html !
// ----------------------------------------------------------------------
// musicLists is like a database or something like that to have a list of music data
// musicLists is an array that each element of this array is one object that have some key and value which
// is so important and sensetive for other methods
// the object keys: 
// 1.name, 
// 2.img (image name without full path or absolute path), 
// 3.music (music name without full path or absolute path),
// 4. albume name (if the album name not found => default = Music) 
// 5.liked (this key is for saving a liked heart for each music, default = false)
const musicLists = [
    {
        'name': "kaj",
        'artist': "Mehrad Hidden",
        'img': "zoozanaghe-album.jpeg",
        'music': "Kaj.mp3",
        'album': "Zoozanaghe",
        'liked': false,
    },
    {
        'name': "Blinding Lights",
        'artist': "The Weekend",
        'img': "blindingLights.jpg",
        'album': "Music",
        'music': "blindingLights.mp3",
        'liked': false,
    },
    {
        'name': "Save Your Tears",
        'artist': "The Weekend",
        'img': "saveYourTears.jpeg",
        'album': "Music",
        'music': "The-Weeknd-Save-Your-Tears.mp3",
        'liked': false,
    }
];
let musicListContainer = document.querySelector(".music-list-body");
musicLists.forEach((music, index) => {
    let musicObjectItem = `
    <div class="music-item-container">
        <div class="music-list-image-container">
            <img src="./img/${music.img}" class="music-item-image" width="100%" height="100%" />
        </div>
        <div class="music-list-info-container">
            <h5 class="music-item-name" onclick="changeMusicListsToPlayerPage(${index});changeMusicMethod(${index});">${music.name}</h5>
            <span class="music-item-singer">${music.artist}</span>
                <span class="music-item-album">${music.album}</span>
        </div>
    </div>`;
    musicListContainer.innerHTML += (musicObjectItem);
})
let dataMaxLength = musicLists.length;
let musicIndex = 0;
let repeatTrack = false;
let randomPlay = false;
let currentPageId = 'musicList';