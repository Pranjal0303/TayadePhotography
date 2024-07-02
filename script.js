const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.querySelector('.progress');
const albumArt = document.querySelector('.album-art img');
const trackTitle = document.querySelector('.track-info h2');
const artistName = document.querySelector('.track-info p');

const tracks = [
    {
        title: 'Track 1',
        artist: 'Artist 1',
        src: 'track1.mp3',
        cover: 'cover1.jpg'
    },
    {
        title: 'Track 2',
        artist: 'Artist 2',
        src: 'track2.mp3',
        cover: 'cover2.jpg'
    },
    // Add more tracks
];

let currentTrackIndex = 0;
let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

function playTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    albumArt.src = track.cover;
    trackTitle.textContent = track.title;
    artistName.textContent = track.artist;
    audio.play();
    isPlaying = true;
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentTrackIndex);
}

playPauseButton.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgressBar);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

// Play the first track on load
playTrack(currentTrackIndex);

