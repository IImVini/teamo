const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Runaway (U & I",
    name: "Galantis",
    source:
      "https://github.com/IImVini/musics/raw/main/Galantis%20-%20Runaway%20(U%20&%20I)%20(Official%20Video)%20-%20Galantis.mp3",
  },
  {
    title: "Beautiful Nightmare",
    name: "Lil Tracy",
    source:
      "https://github.com/IImVini/musics/raw/main/Lil%20Tracy%20-%20Beautiful%20Nightmare%20-%20LilTracyVEVO.mp3",
  },
  {
    title: "Nuts",
    name: "Lip Peep, Rainy Bear",
    source:
      "https://github.com/IImVini/musics/raw/main/Lil%20Peep%20-%20nuts%20(feat.%20rainy%20bear)%20(Official%20Audio)%20-%20Lil%20Peep.mp3",
  },
  {
    title: "Out Of My League",
    name: "Fitz And The Tantrums",
    source:
      "https://github.com/IImVini/musics1/raw/main/Fitz%20And%20The%20Tantrums%20-%20Out%20Of%20My%20League%20%5BOfficial%20Music%20Video%5D%20-%20Fitz%20and%20the%20Tantrums.mp3",
  },
  {
    title: "Self Love",
    name: "Metro Boomin, Coi Leray",
    source:
      "https://github.com/IImVini/musics/raw/main/Metro%20Boomin,%20Coi%20Leray%20-%20Self%20Love%20(Spider-Man_%20Across%20the%20Spider-Verse)%20-%20MetroBoominVEVO.mp3",
  },

  {
    title: "Becca",
    name: "The Sukis",
    source:
      "https://github.com/IImVini/musics/raw/main/Becca%20-%20The%20Sukis.mp3",
  },
  {
    title: "Waiting For Love",
    name: "Avicii",
    source:
      "https://github.com/IImVini/musics/raw/main/Avicii%20-%20Waiting%20For%20Love%20-%20AviciiOfficialVEVO.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});