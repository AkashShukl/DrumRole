import "./styles.css";

const audioFiles = {
  kick: "./src/static/kick.wav",
  boom: "./src/static/boom.wav",
  clap: "./src/static/clap.wav",
  hihat: "./src/static/hihat.wav",
  openhat: "./src/static/openhat.wav",
  ride: "./src/static/ride.wav",
  snare: "./src/static/snare.wav",
  tink: "./src/static/tink.wav",
  tom: "./src/static/tom.wav"
};

const cache2 = {};
// window.addEventListener("load", () => {});
function preloadFunc() {
  console.log("preload");
  Object.keys(audioFiles).forEach((key) => {
    const audio = document.createElement("audio");
    audio.src = audioFiles[key];
    cache2[key] = audio;
  });
}

window.onpaint = preloadFunc();

function handleDrumSound(key) {
  console.log(key, typeof key);
  switch (key) {
    case "a":
      playAudio("clap");
      handleAnimation("clap");
      break;
    case "s":
      playAudio("hihat");
      handleAnimation("hihat");
      break;
    case "d":
      playAudio("kick");
      handleAnimation("kick");
      break;
    case "f":
      playAudio("openhat");
      handleAnimation("openhat");
      break;
    case "g":
      playAudio("boom");
      handleAnimation("boom");
      break;
    case "h":
      playAudio("ride");
      handleAnimation("ride");
      break;
    case "j":
      playAudio("snare");
      handleAnimation("snare");
      break;
    case "k":
      playAudio("tom");
      handleAnimation("tom");
      break;
    case "l":
      playAudio("tink");
      handleAnimation("tink");
      break;
    default:
  }
}

function playAudio(sound) {
  let audio;
  if (sound in cache2) {
    audio = cache2[sound];
  } else {
    console.log("sound not found");
  }
  audio.currentTime = 0;
  audio.play();
}

const cache = {};
function handleAnimation(key) {
  let item;
  if (key in cache) {
    item = cache[key];
  } else {
    item = document.getElementsByName(key)[0];
    cache[key] = item;
  }

  item.classList.add("playing");
  setTimeout(() => {
    item.classList.remove("playing");
  }, 100);
}

const drumBtns = document.querySelectorAll(".drumBtn");
drumBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(item.classList[1]);
    handleDrumSound(item.classList[1]);
  });
});

document.addEventListener("keydown", (e) => {
  handleDrumSound(e.key.toLocaleLowerCase());
});
