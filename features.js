let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

// FONT SIZE SLIDER
const fontSizeSlider = document.getElementById("font-size-slider");

fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  document.documentElement.style.fontSize = `${fontSize}px`;  // Change font size of root
});


// TURN OFF ANIMATIONS
const toggleButton = document.getElementById("toggleAnimations");
const body = document.body;

function updateButtonText() {
  if (body.classList.contains("no-animations")) {
    toggleButton.textContent = "Turn On Animation";
  } else {
    toggleButton.textContent = "Turn Off Animation";
  }
}

// Toggle animations on button click
toggleButton.addEventListener("click", function () {
  body.classList.toggle("no-animations");
  
  updateButtonText();
});
