let music = document.querySelector(".music"),
    buttonImg = document.getElementById("play_btn"),
    trackName = document.querySelector(".track_name"),
    authorName = document.querySelector(".author_name"),
    authorImg = document.querySelector(".author_img"),
    progressBar = document.querySelector(".fill_bar"),
    progressBarContainer = document.querySelector(".progress_bar"),
    currentTimeDisplay = document.querySelector(".current_time"), 
    remainingTimeDisplay = document.querySelector(".remaining_time");

    let isPlaying = false;
    let currentTrackIndex = 0;

const tracks = [
  {
    name: "Keys of Moon - The Epic Hero",
    author: "Keys of Moon",
    imgSrc: "assets/img/keys-of-moon-the-epic-hero.jpeg",
    audioSrc: "assets/audio/Keys of Moon - The Epic Hero.mp3",
  },
  {
    name: "Makai Symphony - Dragon Castle",
    author: "Makai Symphony",
    imgSrc: "assets/img/makai-symphony-dragon-castle.jpeg",
    audioSrc: "assets/audio/Makai Symphony - Dragon Castle.mp3",
  },
  {
    name: "Scandinavianz - Breeze",
    author: "Scandinavianz",
    imgSrc: "assets/img/scandinavianz-breeze.jpeg",
    audioSrc: "assets/audio/Scandinavianz - Breeze.mp3",
  },
];

function playMusic() {
  music.play();
  buttonImg.innerHTML = '<img src="assets/icons/pause.svg" alt="pause">';
  isPlaying = true;
}

function pauseMusic() {
  music.pause();
  buttonImg.innerHTML = '<img src="assets/icons/play.svg" alt="play">';
  isPlaying = false;
}

buttonImg.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

function changeTrack(index) {
  if (index < 0) {
    index = tracks.length - 1;
  } else if (index >= tracks.length) {
    index = 0;
  }

  const track = tracks[index];
  changeTrackAndInfo(track.name, track.author, track.imgSrc);
  music.src = track.audioSrc;
  currentTrackIndex = index;

  if (isPlaying) {
    playMusic();
  }
}

document.getElementById("forward_btn").addEventListener("click", () => {
  changeTrack(currentTrackIndex + 1);
});

document.getElementById("backward_btn").addEventListener("click", () => {
  changeTrack(currentTrackIndex - 1);
});

function changeTrackAndInfo(trackNameText, authorNameText, imgSrc) {
    trackName.textContent = trackNameText;
    authorName.textContent = authorNameText; // Добавьте эту строку для обновления имени автора
    const authorImgElement = authorImg.querySelector("img");
    authorImgElement.src = imgSrc;
    authorImgElement.alt = authorNameText;
  }

  function updateProgressBar() {
    const duration = music.duration;
    const currentTime = music.currentTime;
    const width = (currentTime / duration) * 100;
    progressBar.style.width = width + "%";

    const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const remainingTime = duration - currentTime;
  const remainingMinutes = Math.floor(remainingTime / 60);
  const remainingSeconds = Math.floor(remainingTime % 60);

  currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`;
  remainingTimeDisplay.textContent = `-${remainingMinutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
  
  music.addEventListener("timeupdate", updateProgressBar);
  
//   


